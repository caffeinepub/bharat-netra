import ContactTypes "../types/contact";
import AdminTypes "../types/admin";
import AdminLib "../lib/admin";
import ContactLib "../lib/contact";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  contacts : List.List<ContactTypes.ContactSubmission>,
  adminState : List.List<AdminTypes.AdminPrincipal>,
  nextIdState : List.List<Nat>
) {

  /// Public — anyone can submit a contact form message.
  public shared func submitContact(
    name : Text,
    email : Text,
    subject : Text,
    message : Text
  ) : async ContactTypes.ContactResult {
    let id = nextIdState.at(0);
    let submission = ContactLib.createSubmission(id, Time.now(), name, email, subject, message);
    contacts.add(submission);
    nextIdState.put(0, id + 1);
    #ok("Message received. We will get back to you soon.")
  };

  /// Admin only — returns a paginated list of contact submissions.
  public query ({ caller }) func getContactSubmissions(
    offset : Nat,
    limit : Nat
  ) : async [ContactTypes.ContactSubmission] {
    if (not AdminLib.isAdmin(caller, adminState.at(0))) {
      Runtime.trap("Unauthorised: caller is not admin");
    };
    ContactLib.getSubmissions(contacts, offset, limit)
  };

  /// Admin only — marks a specific submission as read.
  public shared ({ caller }) func markContactRead(id : Nat) : async ContactTypes.ContactResult {
    ContactLib.markRead(contacts, id, adminState.at(0), caller)
  };

  /// Admin only — permanently deletes a contact submission.
  public shared ({ caller }) func deleteContactSubmission(id : Nat) : async ContactTypes.ContactResult {
    ContactLib.deleteSubmission(contacts, id, adminState.at(0), caller)
  };

  /// Admin only — returns count of unread submissions.
  public query ({ caller }) func getUnreadContactCount() : async Nat {
    if (not AdminLib.isAdmin(caller, adminState.at(0))) {
      Runtime.trap("Unauthorised: caller is not admin");
    };
    ContactLib.unreadCount(contacts)
  };

};
