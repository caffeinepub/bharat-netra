import NewsFetchTypes "../types/news-fetch";
import NewsArticleTypes "../types/news-articles";
import AdminTypes "../types/admin";
import AdminLib "../lib/admin";
import Text "mo:core/Text";

module {

  /// Returns a masked version of the API key (shows first 4 and last 4 chars).
  public func maskApiKey(key : Text) : Text {
    let size = key.size();
    if (size <= 8) { return "****" };
    let chars = key.toArray();
    let prefix = Text.fromArray(chars.sliceToArray(0, 4));
    let suffix = Text.fromArray(chars.sliceToArray((size - 4 : Nat).toInt(), size.toInt()));
    prefix # "..." # suffix
  };

  /// Returns ?errText if caller is NOT admin, null if admin check passes.
  public func requireAdmin(
    caller : Principal,
    adminPrincipal : AdminTypes.AdminPrincipal
  ) : ?Text {
    if (not AdminLib.isAdmin(caller, adminPrincipal)) {
      ?("Unauthorised: caller is not admin")
    } else {
      null
    }
  };

  /// Converts a FetchedArticleInput into a full ArticleInput with default scores/analysis.
  public func toArticleInput(
    fetched : NewsFetchTypes.FetchedArticleInput
  ) : NewsArticleTypes.ArticleInput {
    {
      headline = fetched.headline;
      summary = fetched.summary;
      body = fetched.body;
      category = fetched.category;
      author = fetched.author;
      source_outlet = fetched.source_outlet;
      publication_date = fetched.publication_date;
      source_reliability_score = 70;
      fact_completeness_score = 70;
      no_contradiction_flag = 70;
      bias_indicator = #Low;
      source_reliability = #Medium;
      classification = #Unverified;
      propaganda_analysis = {
        emotional_manipulation = false;
        selective_facts = false;
        fear_based_language = false;
        ideological_pushing = false;
        suggested_rewrite = null;
      };
    }
  };

};
