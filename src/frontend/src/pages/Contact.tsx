import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/use-backend";

// ── Types ──────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const { mutate: submitContact, isPending } = useSubmitContact();

  function set<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function blur(key: keyof FormState) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  const errors = {
    name: touched.name && !form.name.trim() ? "Name is required." : null,
    email:
      touched.email && !form.email.trim()
        ? "Email is required."
        : touched.email && !isValidEmail(form.email)
          ? "Enter a valid email address."
          : null,
    subject:
      touched.subject && !form.subject.trim() ? "Subject is required." : null,
    message:
      touched.message && !form.message.trim()
        ? "Message is required."
        : touched.message && form.message.trim().length < 20
          ? "Message must be at least 20 characters."
          : null,
  };

  const isFormValid =
    form.name.trim() &&
    isValidEmail(form.email) &&
    form.subject.trim() &&
    form.message.trim().length >= 20;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mark all as touched
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isFormValid) return;

    submitContact(
      {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      },
      {
        onSuccess: (r) => {
          if (r.__kind__ === "ok") {
            toast.success("Message sent! We will get back to you soon.");
            setForm(EMPTY_FORM);
            setTouched({});
          } else {
            toast.error(`Failed to send: ${r.err}`);
          }
        },
        onError: (err) => toast.error(`Error: ${err.message}`),
      },
    );
  }

  const inputCls = (error: string | null) =>
    `bg-background border-input text-foreground font-semibold focus-visible:ring-accent ${
      error ? "border-destructive focus-visible:ring-destructive" : ""
    }`;

  return (
    <div className="w-full" data-ocid="contact-page">
      {/* ── Hero ── */}
      <section className="bg-background border-b border-border py-14 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-black text-foreground font-display">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-sm text-muted-foreground font-semibold max-w-md mx-auto leading-relaxed">
            Have a story tip, press inquiry, or question about our verification
            process? We read every message.
          </p>
        </motion.div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="bg-muted/20 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-3">
              <h2 className="text-xl font-black uppercase tracking-wider text-foreground">
                Contact Bharat Netra
              </h2>
              <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                Reach out for story tips, corrections, press inquiries, or
                general questions about our work.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "contact@bharatnetra.in",
                },
                {
                  icon: MapPin,
                  label: "Organization",
                  value: "Vishwodya Foundation, India",
                },
                {
                  icon: Shield,
                  label: "Founder",
                  value: "Prabhat Priyadarshi",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-sm bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-md p-5 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-accent">
                Our Commitment
              </p>
              <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                "Every message is read by a human. We will never share your
                information. No spam, no propaganda —{" "}
                <span className="text-foreground font-black">Only Truth.</span>"
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-md p-6 sm:p-8 space-y-5"
              data-ocid="contact-form"
              noValidate
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground">
                Send a Message
              </h3>

              {/* Full Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-name"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Full Name *
                </Label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  onBlur={() => blur("name")}
                  placeholder="Your full name"
                  className={inputCls(errors.name)}
                  data-ocid="contact-name-input"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-xs text-destructive font-semibold mt-1"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-email"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Email Address *
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  onBlur={() => blur("email")}
                  placeholder="you@example.com"
                  className={inputCls(errors.email)}
                  data-ocid="contact-email-input"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-xs text-destructive font-semibold mt-1"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-subject"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Subject *
                </Label>
                <Input
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => set("subject", e.target.value)}
                  onBlur={() => blur("subject")}
                  placeholder="e.g. Story tip, Press inquiry, Correction"
                  className={inputCls(errors.subject)}
                  data-ocid="contact-subject-input"
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="text-xs text-destructive font-semibold mt-1"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Message *
                </Label>
                <Textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  onBlur={() => blur("message")}
                  placeholder="Minimum 20 characters. Tell us what's on your mind."
                  rows={5}
                  className={`resize-none bg-background border-input text-foreground font-semibold focus-visible:ring-accent ${
                    errors.message
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }`}
                  data-ocid="contact-message-input"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                <div className="flex items-center justify-between">
                  {errors.message ? (
                    <p
                      id="message-error"
                      className="text-xs text-destructive font-semibold"
                    >
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-muted-foreground font-mono">
                    {form.message.trim().length}/20 min
                  </span>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-12 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90"
                data-ocid="contact-submit-btn"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>

              <p className="text-xs text-muted-foreground font-semibold text-center">
                We typically respond within 48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
