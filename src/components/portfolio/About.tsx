import { Section } from "./Section";
import { GraduationCap, Code2, LineChart, Brain } from "lucide-react";

const skills = [
  {
    icon: Code2,
    label: "Python",
    note: "pandas · numpy",
    context: "Daily driver for data processing, ML workflows, and automating small AI pipelines end-to-end.",
  },
  {
    icon: LineChart,
    label: "Analysis",
    note: "EDA · visualization",
    context: "Exploratory analysis and clear charts to understand the data before any model or retrieval system is built.",
  },
  {
    icon: Brain,
    label: "ML & AI",
    note: "scikit-learn · LangChain",
    context: "Beginner ML workflows alongside early work on RAG, LangGraph agents, and human-in-the-loop AI flows.",
  },
  {
    icon: GraduationCap,
    label: "DS Maths",
    note: "linear algebra · probability · calculus",
    context: "Studying the maths behind ML and modern AI so the systems are understood, not just used.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      connector="Start here · who I am"
      title="Aspiring Data Scientist and AI Engineer."
      description="Focused on building real depth in the fundamentals — clean Python, statistical thinking, ML workflows, and a growing toolkit for retrieval and agentic AI systems."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="panel p-7 lg:col-span-3">
          <p className="text-base leading-relaxed text-foreground/90">
            I&apos;m an early-stage Data Science and AI Engineering learner working
            through courses, books, and small projects. My goal is to understand how
            data, machine learning, retrieval systems, and agentic workflows fit
            together — then put each piece to work on a real dataset or task.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I treat every project as practice: writing readable notebooks, designing
            workflows that make sense, and being honest about what I do and
            don&apos;t yet understand. The interest is in systems, not just tools.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((s) => (
              <div
                key={s.label}
                tabIndex={0}
                className="panel-hover rounded-md border border-border bg-background/40 p-3 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <s.icon size={16} className="text-primary" />
                <div className="mt-2 text-sm font-medium text-foreground">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.note}</div>
                <div className="reveal-preview">
                  <div>
                    <p className="pt-2 text-[11px] leading-relaxed text-foreground/80">
                      {s.context}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-7 lg:col-span-2">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Quick facts
          </div>
          <dl className="mt-4 space-y-4">
            {[
              ["Role", "Student · DS & AI learner"],
              ["Currently", "ML foundations & RAG / agents"],
              ["Tools", "Python · SQL · LangGraph · Power BI"],
              ["Looking for", "Practice & feedback"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                <dt className="text-sm text-muted-foreground">{k}</dt>
                <dd className="text-sm font-medium text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
