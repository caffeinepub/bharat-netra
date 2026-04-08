import ContactTypes "../types/contact";
import AdminTypes "../types/admin";
import AdminLib "../lib/admin";
import List "mo:core/List";

module {

  /// Creates a new ContactSubmission with a generated id and current timestamp.
  public func createSubmission(
    id : Nat,
    timestamp : Int,
    name : Text,
    email : Text,
    subject : Text,
    message : Text
  ) : ContactTypes.ContactSubmission {
    {
      id;
      name;
      email;
      subject;
      message;
      timestamp;
      isRead = false;
    }
  };

  /// Returns paginated contact submissions (newest-first).
  public func getSubmissions(
    contacts : List.List<ContactTypes.ContactSubmission>,
    offset : Nat,
    limit : Nat
  ) : [ContactTypes.ContactSubmission] {
    let arr = contacts.toArray().reverse();
    let total = arr.size();
    if (offset >= total) return [];
    let end = if (offset + limit > total) total else offset + limit;
    arr.sliceToArray(offset.toInt(), end.toInt())
  };

  /// Marks a single submission as read. Returns ok/err.
  public func markRead(
    contacts : List.List<ContactTypes.ContactSubmission>,
    id : Nat,
    adminPrincipal : AdminTypes.AdminPrincipal,
    caller : Principal
  ) : ContactTypes.ContactResult {
    if (not AdminLib.isAdmin(caller, adminPrincipal)) {
      return #err("Unauthorised: caller is not admin");
    };
    var found = false;
    contacts.mapInPlace(func(c) {
      if (c.id == id) {
        found := true;
        { c with isRead = true }
      } else { c }
    });
    if (found) { #ok("Marked as read") } else { #err("Submission not found") }
  };

  /// Deletes a submission by id. Returns ok/err.
  public func deleteSubmission(
    contacts : List.List<ContactTypes.ContactSubmission>,
    id : Nat,
    adminPrincipal : AdminTypes.AdminPrincipal,
    caller : Principal
  ) : ContactTypes.ContactResult {
    if (not AdminLib.isAdmin(caller, adminPrincipal)) {
      return #err("Unauthorised: caller is not admin");
    };
    let sizeBefore = contacts.size();
    let filtered = contacts.filter(func(c) { c.id != id });
    if (filtered.size() == sizeBefore) {
      return #err("Submission not found");
    };
    contacts.clear();
    contacts.append(filtered);
    #ok("Submission deleted")
  };

  /// Returns count of unread submissions.
  public func unreadCount(contacts : List.List<ContactTypes.ContactSubmission>) : Nat {
    contacts.foldLeft<Nat, ContactTypes.ContactSubmission>(0, func(acc, c) {
      if (not c.isRead) { acc + 1 } else { acc }
    })
  };

};
