import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  AlertCircle,
  BarChart3,
  ChevronRight,
  Eye,
  Radio,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useArticles, useDashboard } from "../hooks/use-backend";
import type { Article } from "../types";

// ── Helpers ────────────────────────────────────────────────────────────────────

function truthColor(score: number) {
  if (score >= 70) return "text-chart-1";
  if (score >= 40) return "text-chart-2";
  return "text-chart-3";
}

function biasLabel(bias: string) {
  if (bias === "Low") return "bg-chart-1/15 text-chart-1 border-chart-1/30";
  if (bias === "High") return "bg-chart-3/15 text-chart-3 border-chart-3/30";
  return "bg-chart-2/15 text-chart-2 border-chart-2/30";
}

// ── Article card (preview strip) ───────────────────────────────────────────────

function PreviewCard({ article }: { article: Article }) {
  const score = Number(article.truth_score);
  return (
    <Link
      to="/article/$id"
      params={{ id: article.id.toString() }}
      className="block group"
      data-ocid={`home-article-${article.id}`}
    >
      <div className="bg-card border border-border rounded-md p-5 h-full flex flex-col gap-3 hover:border-accent/50 transition-colors duration-200">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-xs font-black uppercase tracking-widest text-accent">
            {article.category}
          </span>
          <span
            className={`text-sm font-black font-mono px-2.5 py-0.5 rounded-sm bg-primary/20 ${truthColor(score)}`}
          >
            {score}/100
          </span>
        </div>
        <h3 className="text-sm font-black text-foreground leading-snug line-clamp-3 group-hover:text-accent transition-colors">
          {article.headline}
        </h3>
        <p className="text-xs text-muted-foreground font-semibold line-clamp-2 flex-1">
          {article.summary}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-sm border ${biasLabel(article.bias_indicator as string)}`}
          >
            Bias: {article.bias_indicator as string}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-sm border border-border text-muted-foreground">
            {article.classification as string}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Feature card ───────────────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}
function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card border border-border rounded-md p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-200">
      <div className="w-10 h-10 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-sm font-black uppercase tracking-wider text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────

export default function Home() {
  const { data: articles, isLoading: articlesLoading } = useArticles();
  const { data: stats, isLoading: statsLoading } = useDashboard();

  const preview = articles?.filter((a) => a.published).slice(0, 3) ?? [];

  return (
    <div className="w-full" data-ocid="home-page">
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background px-4 py-20">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/8 blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              India's AI-Powered Truth Network
            </span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>

          {/* Brand */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground font-display leading-tight">
              भारत नेत्र
            </h1>
            <p className="text-lg sm:text-xl font-black uppercase tracking-[0.3em] text-muted-foreground">
              Bharat Netra
            </p>
          </div>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl font-black text-foreground">
            No Godi. No Chatukar.{" "}
            <span className="text-accent">Only Truth.</span>
          </p>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-muted-foreground font-semibold max-w-xl mx-auto leading-relaxed">
            Every story verified. Every claim fact-checked.{" "}
            <span className="text-foreground font-black">
              Powered by CAFFEINE AI.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              asChild
              className="h-12 px-8 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
              data-ocid="hero-cta-news"
            >
              <Link to="/news-feed">
                Read Latest News
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 font-black uppercase tracking-widest text-sm border-primary/50 hover:border-accent hover:bg-primary/10 gap-2"
              data-ocid="hero-cta-dashboard"
            >
              <Link to="/dashboard">
                <BarChart3 className="w-4 h-4" />
                Intelligence Dashboard
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-card border-y border-border py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statsLoading ? (
            [1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-16 w-full rounded-md" />
            ))
          ) : (
            <>
              <motion.div
                className="flex flex-col items-center text-center gap-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-3xl font-black text-accent font-mono">
                  {stats ? Number(stats.total_articles) : "—"}
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Total Articles
                </span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center gap-1 border-y sm:border-y-0 sm:border-x border-border py-6 sm:py-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-3xl font-black text-chart-1 font-mono">
                  {stats ? Number(stats.verified_count) : "—"}
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Verified Articles
                </span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center gap-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-3xl font-black text-primary-foreground font-mono">
                  {stats ? Number(stats.low_bias_count) : "—"}
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Low Bias Articles
                </span>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-black uppercase tracking-wider text-foreground">
              Built on <span className="text-accent">Truth</span>
            </h2>
            <p className="text-sm text-muted-foreground font-semibold max-w-lg mx-auto">
              Every article is processed by CAFFEINE AI before publication —
              zero human bias in the verification pipeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Shield,
                title: "Truth Score System",
                description:
                  "Every article is rated 0–100 for factual accuracy. Source reliability, fact completeness, and contradiction flags all feed the score.",
              },
              {
                icon: Eye,
                title: "Bias Detection",
                description:
                  "Low / Medium / High bias indicator on every story. AI models cross-reference multiple sources before any classification is assigned.",
              },
              {
                icon: AlertCircle,
                title: "Propaganda Analysis",
                description:
                  "AI detects emotional manipulation, selective facts, fear-based language, and ideological pushing — then flags and rewrites them.",
              },
            ].map(({ icon, title, description }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
              >
                <FeatureCard
                  icon={icon}
                  title={title}
                  description={description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest news preview ── */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between gap-4">
            <motion.h2
              className="text-xl font-black uppercase tracking-wider text-foreground"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Latest <span className="text-accent">Verified</span> News
            </motion.h2>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="font-bold text-xs uppercase tracking-wide gap-1.5 border-primary/40 hover:border-accent"
              data-ocid="view-all-articles-btn"
            >
              <Link to="/news-feed">
                View All
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {articlesLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-48 w-full rounded-md" />
              ))}
            </div>
          ) : preview.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-border rounded-md"
              data-ocid="home-articles-empty"
            >
              <Activity className="w-10 h-10 text-muted-foreground/40 mb-3" />
              <p className="text-sm font-bold text-muted-foreground">
                No verified articles published yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {preview.map((article, idx) => (
                <motion.div
                  key={article.id.toString()}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <PreviewCard article={article} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Live broadcasts strip ── */}
      <section className="bg-muted/30 py-12 px-4 border-y border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-chart-3/15 border border-chart-3/30 flex items-center justify-center">
              <Radio className="w-6 h-6 text-chart-3" />
            </div>
            <div>
              <p className="font-black text-sm uppercase tracking-wider text-foreground">
                Live Broadcasts
              </p>
              <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                Watch verified live events as they unfold
              </p>
            </div>
          </div>
          <Button
            asChild
            className="font-black uppercase tracking-widest text-xs h-11 px-6 bg-chart-3/20 text-chart-3 border border-chart-3/30 hover:bg-chart-3/30 gap-2"
            variant="outline"
            data-ocid="hero-cta-live"
          >
            <Link to="/live">
              <Zap className="w-3.5 h-3.5" />
              Watch Live Streams
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-primary py-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-5"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="border-accent/50 text-accent font-black text-xs uppercase tracking-widest"
          >
            Vishwodya Foundation
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black text-primary-foreground leading-tight">
            Join India's fight for truth.
            <br />
            <span className="text-accent">Zero propaganda. Zero bias.</span>
          </h2>
          <p className="text-sm text-primary-foreground/70 font-semibold max-w-md mx-auto">
            Powered by CAFFEINE AI. Founded by Prabhat Priyadarshi. Every story
            on this platform has been verified, scored, and fact-checked.
          </p>
          <Button
            asChild
            className="h-12 px-8 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            data-ocid="footer-cta-news"
          >
            <Link to="/news-feed">
              Start Reading
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
