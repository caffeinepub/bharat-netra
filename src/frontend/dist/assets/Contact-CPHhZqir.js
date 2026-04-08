import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as Mail, a as Shield } from "./index-BcNvmT02.js";
import { B as Button } from "./button-BGHJIPAQ.js";
import { L as Label, I as Input, T as Textarea } from "./textarea-DhfHyllU.js";
import { u as ue } from "./index-JFy1HUq1.js";
import { F as useSubmitContact } from "./use-backend-CxOO92nj.js";
import { m as motion } from "./proxy-hWVm7lxz.js";
import "./index-D9T35Pb7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const EMPTY_FORM = {
  name: "",
  email: "",
  subject: "",
  message: ""
};
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function Contact() {
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [touched, setTouched] = reactExports.useState({});
  const { mutate: submitContact, isPending } = useSubmitContact();
  function set(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }
  function blur(key) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }
  const errors = {
    name: touched.name && !form.name.trim() ? "Name is required." : null,
    email: touched.email && !form.email.trim() ? "Email is required." : touched.email && !isValidEmail(form.email) ? "Enter a valid email address." : null,
    subject: touched.subject && !form.subject.trim() ? "Subject is required." : null,
    message: touched.message && !form.message.trim() ? "Message is required." : touched.message && form.message.trim().length < 20 ? "Message must be at least 20 characters." : null
  };
  const isFormValid = form.name.trim() && isValidEmail(form.email) && form.subject.trim() && form.message.trim().length >= 20;
  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isFormValid) return;
    submitContact(
      {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim()
      },
      {
        onSuccess: (r) => {
          if (r.__kind__ === "ok") {
            ue.success("Message sent! We will get back to you soon.");
            setForm(EMPTY_FORM);
            setTouched({});
          } else {
            ue.error(`Failed to send: ${r.err}`);
          }
        },
        onError: (err) => ue.error(`Error: ${err.message}`)
      }
    );
  }
  const inputCls = (error) => `bg-background border-input text-foreground font-semibold focus-visible:ring-accent ${error ? "border-destructive focus-visible:ring-destructive" : ""}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", "data-ocid": "contact-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-b border-border py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "max-w-3xl mx-auto text-center space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl font-black text-foreground font-display", children: [
            "Get in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Touch" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-semibold max-w-md mx-auto leading-relaxed", children: "Have a story tip, press inquiry, or question about our verification process? We read every message." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "space-y-8",
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-black uppercase tracking-wider text-foreground", children: "Contact Bharat Netra" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-semibold leading-relaxed", children: "Reach out for story tips, corrections, press inquiries, or general questions about our work." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
              {
                icon: Mail,
                label: "Email",
                value: "contact@bharatnetra.in"
              },
              {
                icon: MapPin,
                label: "Organization",
                value: "Vishwodya Foundation, India"
              },
              {
                icon: Shield,
                label: "Founder",
                value: "Prabhat Priyadarshi"
              }
            ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest text-muted-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mt-0.5", children: value })
              ] })
            ] }, label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-md p-5 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest text-accent", children: "Our Commitment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-muted-foreground leading-relaxed", children: [
                '"Every message is read by a human. We will never share your information. No spam, no propaganda —',
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-black", children: "Only Truth." }),
                '"'
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "bg-card border border-border rounded-md p-6 sm:p-8 space-y-5",
              "data-ocid": "contact-form",
              noValidate: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-widest text-foreground", children: "Send a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "contact-name",
                      className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                      children: "Full Name *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "contact-name",
                      value: form.name,
                      onChange: (e) => set("name", e.target.value),
                      onBlur: () => blur("name"),
                      placeholder: "Your full name",
                      className: inputCls(errors.name),
                      "data-ocid": "contact-name-input",
                      "aria-invalid": !!errors.name,
                      "aria-describedby": errors.name ? "name-error" : void 0
                    }
                  ),
                  errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      id: "name-error",
                      className: "text-xs text-destructive font-semibold mt-1",
                      children: errors.name
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "contact-email",
                      className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                      children: "Email Address *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "contact-email",
                      type: "email",
                      value: form.email,
                      onChange: (e) => set("email", e.target.value),
                      onBlur: () => blur("email"),
                      placeholder: "you@example.com",
                      className: inputCls(errors.email),
                      "data-ocid": "contact-email-input",
                      "aria-invalid": !!errors.email,
                      "aria-describedby": errors.email ? "email-error" : void 0
                    }
                  ),
                  errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      id: "email-error",
                      className: "text-xs text-destructive font-semibold mt-1",
                      children: errors.email
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "contact-subject",
                      className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                      children: "Subject *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "contact-subject",
                      value: form.subject,
                      onChange: (e) => set("subject", e.target.value),
                      onBlur: () => blur("subject"),
                      placeholder: "e.g. Story tip, Press inquiry, Correction",
                      className: inputCls(errors.subject),
                      "data-ocid": "contact-subject-input",
                      "aria-invalid": !!errors.subject,
                      "aria-describedby": errors.subject ? "subject-error" : void 0
                    }
                  ),
                  errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      id: "subject-error",
                      className: "text-xs text-destructive font-semibold mt-1",
                      children: errors.subject
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "contact-message",
                      className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                      children: "Message *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "contact-message",
                      value: form.message,
                      onChange: (e) => set("message", e.target.value),
                      onBlur: () => blur("message"),
                      placeholder: "Minimum 20 characters. Tell us what's on your mind.",
                      rows: 5,
                      className: `resize-none bg-background border-input text-foreground font-semibold focus-visible:ring-accent ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`,
                      "data-ocid": "contact-message-input",
                      "aria-invalid": !!errors.message,
                      "aria-describedby": errors.message ? "message-error" : void 0
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    errors.message ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        id: "message-error",
                        className: "text-xs text-destructive font-semibold",
                        children: errors.message
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
                      form.message.trim().length,
                      "/20 min"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: isPending,
                    className: "w-full h-12 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90",
                    "data-ocid": "contact-submit-btn",
                    children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                      "Sending…"
                    ] }) : "Send Message"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold text-center", children: "We typically respond within 48 hours." })
              ]
            }
          )
        }
      )
    ] }) })
  ] });
}
export {
  Contact as default
};
