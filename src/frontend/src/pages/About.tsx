import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Scale,
  Search,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

// ── Value card ─────────────────────────────────────────────────────────────────

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}
function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-card border border-border rounded-md p-6 flex flex-col gap-4">
      <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/25 flex items-center justify-center">
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

// ── Step card ──────────────────────────────────────────────────────────────────

interface StepCardProps {
  step: number;
  icon: React.ElementType;
  title: string;
  description: string;
}
function StepCard({ step, icon: Icon, title, description }: StepCardProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <span className="text-[10px] font-black font-mono text-muted-foreground">
          0{step}
        </span>
      </div>
      <div className="pt-1 space-y-1">
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

// ── Page ───────────────────────────────────────────────────────────────────────

export default function About() {
  const rules = [
    "Never promote political, religious, or ideological bias.",
    "Always distinguish between FACT, OPINION, and UNVERIFIED.",
    "Cross-check context before drawing any conclusion.",
    "Avoid sensational language — clarity over virality.",
    "If uncertain, state 'Insufficient Data.' Never guess.",
    "Highlight and explain propaganda. Never amplify it.",
  ];

  return (
    <div className="w-full" data-ocid="about-page">
      {/* ── Hero ── */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="border-accent/50 text-accent font-black text-xs uppercase tracking-widest mb-4"
            >
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-tight font-display">
              About <span className="text-accent">Bharat Netra</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground font-semibold max-w-xl mx-auto leading-relaxed">
              India's first AI-powered, fully independent truth network. Every
              story is fact-checked, bias-scored, and propaganda-analyzed before
              it reaches your screen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-muted/30 border-y border-border py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-black uppercase tracking-wider text-foreground">
              Our <span className="text-accent">Mission</span>
            </h2>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-md p-6 sm:p-8 space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm sm:text-base font-black text-foreground leading-relaxed">
              Bharat Netra exists to deliver only factual, verified, and neutral
              information to every Indian citizen — eliminating all forms of
              bias, propaganda, and emotional manipulation from public
              discourse.
            </p>
            <div className="border-t border-border pt-5">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">
                Non-Negotiable Rules
              </p>
              <ul className="space-y-3">
                {rules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-chart-1 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-foreground">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/10 border border-primary/25 rounded-sm px-4 py-3">
              <p className="text-sm font-black text-foreground">
                "No Godi. No Chatukar.{" "}
                <span className="text-accent">Only Truth.</span>"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h2
            className="text-2xl font-black uppercase tracking-wider text-foreground text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core <span className="text-accent">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Target,
                title: "Truth First",
                description:
                  "Factual accuracy is the only KPI that matters. We publish nothing we cannot verify from at least two independent sources.",
              },
              {
                icon: Scale,
                title: "No Bias",
                description:
                  "Political, religious, and ideological neutrality is absolute. CAFFEINE AI flags any narrative deviation automatically.",
              },
              {
                icon: Eye,
                title: "Full Transparency",
                description:
                  "Every Truth Score, Bias Indicator, and Propaganda Flag is shown to the reader — nothing is hidden in the pipeline.",
              },
            ].map(({ icon, title, description }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ValueCard
                  icon={icon}
                  title={title}
                  description={description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-muted/30 border-y border-border py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.h2
            className="text-2xl font-black uppercase tracking-wider text-foreground text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It <span className="text-accent">Works</span>
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                icon: Search,
                title: "Collect",
                description:
                  "Journalists and AI systems collect raw news from across India and international sources 24/7.",
              },
              {
                icon: Shield,
                title: "Verify",
                description:
                  "CAFFEINE AI cross-references claims against known facts, source databases, and prior verified reporting.",
              },
              {
                icon: Zap,
                title: "Score",
                description:
                  "Each article receives a Truth Score (0–100), Bias Indicator, Source Reliability rating, and Propaganda Flags.",
              },
              {
                icon: CheckCircle,
                title: "Publish",
                description:
                  "Only verified, scored articles are published. All classifications are displayed transparently to readers.",
              },
            ].map(({ icon, title, description }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <StepCard
                  step={idx + 1}
                  icon={icon}
                  title={title}
                  description={description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Organization ── */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.h2
            className="text-2xl font-black uppercase tracking-wider text-foreground text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The <span className="text-accent">Foundation</span>
          </motion.h2>

          <motion.div
            className="bg-card border border-border rounded-md p-6 sm:p-8 space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-foreground uppercase tracking-wider">
                  Vishwodya Foundation
                </h3>
                <p className="text-xs text-muted-foreground font-semibold">
                  Powering & Funding Bharat Netra
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
              Bharat Netra is a Vishwodya Foundation initiative — a non-partisan
              organization committed to civic education, media literacy, and
              factual public discourse across India. Every rupee goes toward
              verification infrastructure, journalist training, and AI
              development.
            </p>
            <div className="bg-muted/40 rounded-sm px-4 py-3 flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Founder
              </span>
              <span className="text-sm font-black text-foreground">
                Prabhat Priyadarshi
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-primary py-14 px-4">
        <motion.div
          className="max-w-xl mx-auto text-center space-y-5"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-black text-primary-foreground uppercase tracking-wider">
            Have a question or a story tip?
          </h2>
          <p className="text-sm text-primary-foreground/70 font-semibold">
            Reach out to the Bharat Netra team directly.
          </p>
          <Button
            asChild
            className="h-12 px-8 font-black uppercase tracking-widest text-sm bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            data-ocid="about-contact-cta"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
