module {

  public type NewsFetchSettings = {
    newsApiKey : Text;
    lastFetchTimestamp : Int;
  };

  public type FetchedArticleInput = {
    headline : Text;
    summary : Text;
    body : Text;
    category : Text;
    author : Text;
    source_outlet : Text;
    publication_date : Int;
  };

  public type NewsFetchStatus = {
    lastFetchTime : Int;
    fetchedCount : Nat;
  };

  public type NewsFetchResult = {
    #ok : Text;
    #err : Text;
  };

};
