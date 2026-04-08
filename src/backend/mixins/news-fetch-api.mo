import NewsFetchTypes "../types/news-fetch";
import NewsArticleTypes "../types/news-articles";
import AdminTypes "../types/admin";
import AdminLib "../lib/admin";
import NewsFetchLib "../lib/news-fetch";
import NewsArticlesLib "../lib/news-articles";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";

mixin (
  articles : List.List<NewsArticleTypes.Article>,
  adminState : List.List<AdminTypes.AdminPrincipal>,
  auditState : List.List<AdminTypes.AuditLogEntry>,
  nextIdState : List.List<Nat>,
  settingsState : List.List<NewsFetchTypes.NewsFetchSettings>
) {

  // Local article ID counter — mirrors news-articles-api.mo pattern
  var nextFetchedArticleId : Nat = 10_000;

  // IC management canister for HTTP outcalls
  let ic = actor "aaaaa-aa" : actor {
    http_request : ({
      url : Text;
      max_response_bytes : ?Nat64;
      method : { #get; #head; #post };
      headers : [{ name : Text; value : Text }];
      body : ?Blob;
      transform : ?{
        function : shared query ({ response : { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob }; context : Blob }) -> async { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob };
        context : Blob;
      };
      is_replicated : ?Bool;
    }) -> async { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob };
  };

  /// Admin only — stores or updates the NewsAPI.org API key.
  public shared ({ caller }) func setNewsApiKey(key : Text) : async NewsFetchTypes.NewsFetchResult {
    if (not AdminLib.isAdmin(caller, adminState.at(0))) {
      return #err("Unauthorised: caller is not admin");
    };
    let current = settingsState.at(0);
    settingsState.put(0, { current with newsApiKey = key });
    #ok("NewsAPI key saved successfully.")
  };

  /// Admin only — returns the masked API key.
  public query ({ caller }) func getNewsApiKey() : async Text {
    if (not AdminLib.isAdmin(caller, adminState.at(0))) {
      Runtime.trap("Unauthorised: caller is not admin");
    };
    let settings = settingsState.at(0);
    if (settings.newsApiKey.size() == 0) { return "Not configured" };
    NewsFetchLib.maskApiKey(settings.newsApiKey)
  };

  /// Admin only — triggers an HTTP outcall to NewsAPI.org and imports fetched articles.
  public shared ({ caller }) func fetchAndImportNews() : async { #ok : Text; #err : Text } {
    if (not AdminLib.isAdmin(caller, adminState.at(0))) {
      return #err("Unauthorised: caller is not admin");
    };
    let settings = settingsState.at(0);
    if (settings.newsApiKey.size() == 0) {
      return #err("NewsAPI key not configured. Set it in Admin Settings first.");
    };

    let url = "https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=" # settings.newsApiKey;
    let response = await ic.http_request({
      url;
      max_response_bytes = ?500_000;
      method = #get;
      headers = [{ name = "Accept"; value = "application/json" }];
      body = null;
      transform = null;
      is_replicated = ?false;
    });

    if (response.status != 200) {
      return #err("HTTP request failed with status " # debug_show(response.status));
    };

    let bodyText = switch (response.body.decodeUtf8()) {
      case (?t) t;
      case null { return #err("Failed to decode response body") };
    };

    // Simple JSON parsing — extract articles array entries
    var importedCount : Nat = 0;

    // Split by "title" field occurrences to find article blocks
    let articleBlocks = bodyText.split(#text "\"title\":");
    let blocksArray = articleBlocks.toArray();

    // Skip first element (it's before the first article)
    var i : Nat = 1;
    label fetchLoop while (i < blocksArray.size() and importedCount < 10) {
      let block = blocksArray[i];
      i += 1;

      // Extract title — skip block if empty
      let title = extractJsonString(block);
      if (title.size() == 0) {
        continue fetchLoop;
      };

      // Extract description from the block
      let descBlock = switch (splitOnce(block, "\"description\":")) {
        case (?rest) rest;
        case null "";
      };
      let description = if (descBlock.size() > 0) extractJsonString(descBlock) else "";

      // Extract content
      let contentBlock = switch (splitOnce(block, "\"content\":")) {
        case (?rest) rest;
        case null "";
      };
      let content = if (contentBlock.size() > 0) extractJsonString(contentBlock) else "";

      // Extract author
      let authorBlock = switch (splitOnce(block, "\"author\":")) {
        case (?rest) rest;
        case null "";
      };
      let rawAuthor = if (authorBlock.size() > 0) extractJsonString(authorBlock) else "";

      // Extract source name
      let sourceBlock = switch (splitOnce(block, "\"name\":")) {
        case (?rest) rest;
        case null "";
      };
      let sourceName = if (sourceBlock.size() > 0) extractJsonString(sourceBlock) else "NewsAPI";

      let summary = if (description.size() > 0) description else "No description available.";
      let body = if (content.size() > 0) content else summary;
      let author = if (rawAuthor.size() == 0 or rawAuthor == "null") "NewsAPI" else rawAuthor;
      let source = if (sourceName.size() == 0) "NewsAPI" else sourceName;

      let fetched : NewsFetchTypes.FetchedArticleInput = {
        headline = title;
        summary;
        body;
        category = "World News";
        author;
        source_outlet = source;
        publication_date = Time.now();
      };

      let articleInput = NewsFetchLib.toArticleInput(fetched);
      ignore NewsArticlesLib.submitArticle(articles, nextFetchedArticleId, articleInput);
      nextFetchedArticleId += 1;
      importedCount += 1;
    };

    // Update last fetch timestamp
    let currentSettings = settingsState.at(0);
    settingsState.put(0, { currentSettings with lastFetchTimestamp = Time.now() });

    #ok("Successfully imported " # debug_show(importedCount) # " articles from NewsAPI.")
  };

  /// Admin only — returns metadata about the last fetch operation.
  public query ({ caller }) func getNewsFetchStatus() : async NewsFetchTypes.NewsFetchStatus {
    if (not AdminLib.isAdmin(caller, adminState.at(0))) {
      Runtime.trap("Unauthorised: caller is not admin");
    };
    let settings = settingsState.at(0);
    {
      lastFetchTime = settings.lastFetchTimestamp;
      fetchedCount = articles.size();
    }
  };

  // --- Private helpers ---

  /// Extracts the first JSON string value from text starting after \":
  func extractJsonString(text : Text) : Text {
    let chars = text.toArray();
    var start : ?Nat = null;
    var end : ?Nat = null;
    var inString = false;
    var escaped = false;
    var i = 0;
    label scan while (i < chars.size()) {
      let c = chars[i];
      if (not inString) {
        if (c == '\"') {
          inString := true;
          start := ?(i + 1);
        } else if (c == 'n' and i + 3 < chars.size()) {
          // null value
          if (chars[i+1] == 'u' and chars[i+2] == 'l' and chars[i+3] == 'l') {
            return ""
          }
        }
      } else {
        if (escaped) {
          escaped := false;
        } else if (c == '\\') {
          escaped := true;
        } else if (c == '\"') {
          end := ?i;
          break scan;
        }
      };
      i += 1;
    };
    switch (start, end) {
      case (?s, ?e) {
        Text.fromArray(chars.sliceToArray(s.toInt(), e.toInt()))
      };
      case _ { "" };
    }
  };

  /// Splits text on the first occurrence of separator, returning the part after.
  func splitOnce(text : Text, sep : Text) : ?Text {
    let textChars = text.toArray();
    let sepChars = sep.toArray();
    let sepLen = sepChars.size();
    let textLen = textChars.size();
    if (sepLen == 0 or textLen < sepLen) return null;
    var i = 0;
    while (i + sepLen <= textLen) {
      var match = true;
      var j = 0;
      while (j < sepLen) {
        if (textChars[i + j] != sepChars[j]) {
          match := false;
        };
        j += 1;
      };
      if (match) {
        return ?Text.fromArray(textChars.sliceToArray((i + sepLen).toInt(), textLen.toInt()))
      };
      i += 1;
    };
    null
  };

};
