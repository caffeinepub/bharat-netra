module {

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
    isRead : Bool;
  };

  public type ContactResult = {
    #ok : Text;
    #err : Text;
  };

};
