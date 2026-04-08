import { c as createLucideIcon, j as jsxRuntimeExports, E as Eye, a as Shield, L as Link } from "./index-BcNvmT02.js";
import { B as Badge } from "./badge-DGuT2Iwl.js";
import { B as Button } from "./button-BGHJIPAQ.js";
import { m as motion } from "./proxy-hWVm7lxz.js";
import { C as CircleCheckBig } from "./circle-check-big-Be02AbOK.js";
import { Z as Zap } from "./zap-BoPdMz84.js";
import "./index-D9T35Pb7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
];
const Scale = createLucideIcon("scale", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
function ValueCard({ icon: Icon, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-md p-6 flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-sm bg-accent/10 border border-accent/25 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-accent" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-semibold leading-relaxed", children: description })
    ] })
  ] });
}
function StepCard({ step, icon: Icon, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-sm bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-accent" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black font-mono text-muted-foreground", children: [
        "0",
        step
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1 space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-semibold leading-relaxed", children: description })
    ] })
  ] });
}
function About() {
  const rules = [
    "Never promote political, religious, or ideological bias.",
    "Always distinguish between FACT, OPINION, and UNVERIFIED.",
    "Cross-check context before drawing any conclusion.",
    "Avoid sensational language — clarity over virality.",
    "If uncertain, state 'Insufficient Data.' Never guess.",
    "Highlight and explain propaganda. Never amplify it."
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", "data-ocid": "about-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto text-center space-y-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "border-accent/50 text-accent font-black text-xs uppercase tracking-widest mb-4",
              children: "About Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl font-black text-foreground leading-tight font-display", children: [
            "About ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Bharat Netra" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground font-semibold max-w-xl mx-auto leading-relaxed", children: "India's first AI-powered, fully independent truth network. Every story is fact-checked, bias-scored, and propaganda-analyzed before it reaches your screen." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-y border-border py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "text-center space-y-2",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-black uppercase tracking-wider text-foreground", children: [
            "Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Mission" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-card border border-border rounded-md p-6 sm:p-8 space-y-5",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-black text-foreground leading-relaxed", children: "Bharat Netra exists to deliver only factual, verified, and neutral information to every Indian citizen — eliminating all forms of bias, propaganda, and emotional manipulation from public discourse." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest text-muted-foreground mb-4", children: "Non-Negotiable Rules" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: rules.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-chart-1 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: rule })
              ] }, rule)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 border border-primary/25 rounded-sm px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black text-foreground", children: [
              '"No Godi. No Chatukar.',
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Only Truth." }),
              '"'
            ] }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          className: "text-2xl font-black uppercase tracking-wider text-foreground text-center",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            "Core ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Values" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        {
          icon: Target,
          title: "Truth First",
          description: "Factual accuracy is the only KPI that matters. We publish nothing we cannot verify from at least two independent sources."
        },
        {
          icon: Scale,
          title: "No Bias",
          description: "Political, religious, and ideological neutrality is absolute. CAFFEINE AI flags any narrative deviation automatically."
        },
        {
          icon: Eye,
          title: "Full Transparency",
          description: "Every Truth Score, Bias Indicator, and Propaganda Flag is shown to the reader — nothing is hidden in the pipeline."
        }
      ].map(({ icon, title, description }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ValueCard,
            {
              icon,
              title,
              description
            }
          )
        },
        title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-y border-border py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          className: "text-2xl font-black uppercase tracking-wider text-foreground text-center",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            "How It ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Works" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [
        {
          icon: Search,
          title: "Collect",
          description: "Journalists and AI systems collect raw news from across India and international sources 24/7."
        },
        {
          icon: Shield,
          title: "Verify",
          description: "CAFFEINE AI cross-references claims against known facts, source databases, and prior verified reporting."
        },
        {
          icon: Zap,
          title: "Score",
          description: "Each article receives a Truth Score (0–100), Bias Indicator, Source Reliability rating, and Propaganda Flags."
        },
        {
          icon: CircleCheckBig,
          title: "Publish",
          description: "Only verified, scored articles are published. All classifications are displayed transparently to readers."
        }
      ].map(({ icon, title, description }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            StepCard,
            {
              step: idx + 1,
              icon,
              title,
              description
            }
          )
        },
        title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          className: "text-2xl font-black uppercase tracking-wider text-foreground text-center",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            "The ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Foundation" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "bg-card border border-border rounded-md p-6 sm:p-8 space-y-5",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-foreground uppercase tracking-wider", children: "Vishwodya Foundation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold", children: "Powering & Funding Bharat Netra" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-muted-foreground leading-relaxed", children: "Bharat Netra is a Vishwodya Foundation initiative — a non-partisan organization committed to civic education, media literacy, and factual public discourse across India. Every rupee goes toward verification infrastructure, journalist training, and AI development." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-sm px-4 py-3 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-muted-foreground", children: "Founder" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-foreground", children: "Prabhat Priyadarshi" })
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "max-w-xl mx-auto text-center space-y-5",
        initial: { opacity: 0, scale: 0.97 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-black text-primary-foreground uppercase tracking-wider", children: "Have a question or a story tip?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70 font-semibold", children: "Reach out to the Bharat Netra team directly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "h-12 px-8 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90 gap-2",
              "data-ocid": "about-contact-cta",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                "Contact Us",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  About as default
};
