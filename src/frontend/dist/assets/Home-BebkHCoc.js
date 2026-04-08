import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, S as Skeleton, a as Shield, E as Eye, R as Radio } from "./index-BcNvmT02.js";
import { B as Badge } from "./badge-DGuT2Iwl.js";
import { B as Button } from "./button-BGHJIPAQ.js";
import { u as useArticles, a as useDashboard } from "./use-backend-CxOO92nj.js";
import { m as motion } from "./proxy-hWVm7lxz.js";
import { C as ChevronRight } from "./chevron-right-AUhTEjUC.js";
import { A as Activity } from "./activity-CYlss_DM.js";
import { Z as Zap } from "./zap-BoPdMz84.js";
import "./index-D9T35Pb7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode);
function truthColor(score) {
  if (score >= 70) return "text-chart-1";
  if (score >= 40) return "text-chart-2";
  return "text-chart-3";
}
function biasLabel(bias) {
  if (bias === "Low") return "bg-chart-1/15 text-chart-1 border-chart-1/30";
  if (bias === "High") return "bg-chart-3/15 text-chart-3 border-chart-3/30";
  return "bg-chart-2/15 text-chart-2 border-chart-2/30";
}
function PreviewCard({ article }) {
  const score = Number(article.truth_score);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/article/$id",
      params: { id: article.id.toString() },
      className: "block group",
      "data-ocid": `home-article-${article.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-md p-5 h-full flex flex-col gap-3 hover:border-accent/50 transition-colors duration-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-accent", children: article.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-sm font-black font-mono px-2.5 py-0.5 rounded-sm bg-primary/20 ${truthColor(score)}`,
              children: [
                score,
                "/100"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-foreground leading-snug line-clamp-3 group-hover:text-accent transition-colors", children: article.headline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold line-clamp-2 flex-1", children: article.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-xs font-bold px-2 py-0.5 rounded-sm border ${biasLabel(article.bias_indicator)}`,
              children: [
                "Bias: ",
                article.bias_indicator
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-2 py-0.5 rounded-sm border border-border text-muted-foreground", children: article.classification })
        ] })
      ] })
    }
  );
}
function FeatureCard({ icon: Icon, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-md p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-accent" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-semibold leading-relaxed", children: description })
    ] })
  ] });
}
function Home() {
  const { data: articles, isLoading: articlesLoading } = useArticles();
  const { data: stats, isLoading: statsLoading } = useDashboard();
  const preview = (articles == null ? void 0 : articles.filter((a) => a.published).slice(0, 3)) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", "data-ocid": "home-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background px-4 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/8 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "relative z-10 max-w-4xl mx-auto text-center space-y-6",
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-accent", children: "India's AI-Powered Truth Network" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground font-display leading-tight", children: "भारत नेत्र" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl font-black uppercase tracking-[0.3em] text-muted-foreground", children: "Bharat Netra" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl sm:text-3xl font-black text-foreground", children: [
              "No Godi. No Chatukar.",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Only Truth." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base text-muted-foreground font-semibold max-w-xl mx-auto leading-relaxed", children: [
              "Every story verified. Every claim fact-checked.",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-black", children: "Powered by CAFFEINE AI." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  className: "h-12 px-8 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90 gap-2",
                  "data-ocid": "hero-cta-news",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/news-feed", children: [
                    "Read Latest News",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  className: "h-12 px-8 font-black uppercase tracking-widest text-sm border-primary/50 hover:border-accent hover:bg-primary/10 gap-2",
                  "data-ocid": "hero-cta-dashboard",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4" }),
                    "Intelligence Dashboard"
                  ] })
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-y border-border py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6", children: statsLoading ? [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full rounded-md" }, i)) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "flex flex-col items-center text-center gap-1",
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black text-accent font-mono", children: stats ? Number(stats.total_articles) : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-muted-foreground", children: "Total Articles" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "flex flex-col items-center text-center gap-1 border-y sm:border-y-0 sm:border-x border-border py-6 sm:py-0",
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black text-chart-1 font-mono", children: stats ? Number(stats.verified_count) : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-muted-foreground", children: "Verified Articles" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "flex flex-col items-center text-center gap-1",
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black text-primary-foreground font-mono", children: stats ? Number(stats.low_bias_count) : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-muted-foreground", children: "Low Bias Articles" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center space-y-2",
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-black uppercase tracking-wider text-foreground", children: [
              "Built on ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Truth" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-semibold max-w-lg mx-auto", children: "Every article is processed by CAFFEINE AI before publication — zero human bias in the verification pipeline." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        {
          icon: Shield,
          title: "Truth Score System",
          description: "Every article is rated 0–100 for factual accuracy. Source reliability, fact completeness, and contradiction flags all feed the score."
        },
        {
          icon: Eye,
          title: "Bias Detection",
          description: "Low / Medium / High bias indicator on every story. AI models cross-reference multiple sources before any classification is assigned."
        },
        {
          icon: CircleAlert,
          title: "Propaganda Analysis",
          description: "AI detects emotional manipulation, selective facts, fear-based language, and ideological pushing — then flags and rewrites them."
        }
      ].map(({ icon, title, description }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1, duration: 0.45 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FeatureCard,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h2,
          {
            className: "text-xl font-black uppercase tracking-wider text-foreground",
            initial: { opacity: 0, x: -16 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            children: [
              "Latest ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Verified" }),
              " News"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "outline",
            size: "sm",
            className: "font-bold text-xs uppercase tracking-wide gap-1.5 border-primary/40 hover:border-accent",
            "data-ocid": "view-all-articles-btn",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/news-feed", children: [
              "View All",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
            ] })
          }
        )
      ] }),
      articlesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-md" }, i)) }) : preview.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-16 text-center border border-dashed border-border rounded-md",
          "data-ocid": "home-articles-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-10 h-10 text-muted-foreground/40 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-muted-foreground", children: "No verified articles published yet. Check back soon." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: preview.map((article, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1, duration: 0.4 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewCard, { article })
        },
        article.id.toString()
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-12 px-4 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-sm bg-chart-3/15 border border-chart-3/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "w-6 h-6 text-chart-3" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-sm uppercase tracking-wider text-foreground", children: "Live Broadcasts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold mt-0.5", children: "Watch verified live events as they unfold" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          className: "font-black uppercase tracking-widest text-xs h-11 px-6 bg-chart-3/20 text-chart-3 border border-chart-3/30 hover:bg-chart-3/30 gap-2",
          variant: "outline",
          "data-ocid": "hero-cta-live",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/live", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
            "Watch Live Streams"
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "max-w-3xl mx-auto text-center space-y-5",
        initial: { opacity: 0, scale: 0.97 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "border-accent/50 text-accent font-black text-xs uppercase tracking-widest",
              children: "Vishwodya Foundation"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-black text-primary-foreground leading-tight", children: [
            "Join India's fight for truth.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Zero propaganda. Zero bias." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70 font-semibold max-w-md mx-auto", children: "Powered by CAFFEINE AI. Founded by Prabhat Priyadarshi. Every story on this platform has been verified, scored, and fact-checked." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "h-12 px-8 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90 gap-2",
              "data-ocid": "footer-cta-news",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/news-feed", children: [
                "Start Reading",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ] })
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  Home as default
};
