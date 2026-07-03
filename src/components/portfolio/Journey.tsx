import { Section } from "./Section";
import { CheckCircle2, Circle, CircleDot } from "lucide-react";

const milestones = [
  {
    status: "done" as const,
    title: "Python fundamentals",
    detail: "Core syntax, data structures, control flow, and writing small, readable scripts.",
    concepts: ["variables", "control flow", "functions", "modules & I/O"],
  },
  {
    status: "done" as const,
    title: "Data wrangling with pandas",
    detail: "Cleaning, joining, grouping, and reshaping real datasets into analysis-ready form.",
    concepts: ["DataFrames", "groupby", "joins & merges", "missing values"],
  },
  {
    status: "active" as const,
    title: "Math for data science",
    detail: "Linear algebra, probability, statistics, and the calculus intuition that underpins machine learning.",
    concepts: ["vectors & matrices", "probability", "distributions", "derivatives & gradients"],
  },
  {
    status: "active" as const,
    title: "Machine learning workflows",
    detail: "Preprocessing, feature engineering, model training, and clean evaluation inside reproducible workflows.",
    concepts: ["Pipeline", "ColumnTransformer", "cross-validation", "evaluation metrics"],
  },
  {
    status: "active" as const,
    title: "SQL for analytics",
    detail: "Writing clearer analytical queries — joins, CTEs, and window functions for real reporting questions.",
    concepts: ["joins", "CTEs", "window functions", "aggregations"],
  },
  {
    status: "active" as const,
    title: "Dashboard building with Excel & Power BI",
    detail: "Turning raw data into clean dashboards that communicate KPIs, trends, and business insights.",
    concepts: ["pivot tables", "DAX basics", "KPI design", "data storytelling"],
  },
  {
    status: "active" as const,
    title: "Retrieval-Augmented Generation (RAG)",
    detail: "Building RAG systems using synthetic documents and PDFs. Exploring chunking, embeddings, vector search, Hybrid RAG, Multi-Query Retrieval, and retrieval evaluation.",
    concepts: ["document chunking", "embeddings", "vector search", "Hybrid RAG", "Multi-Query Retrieval"],
  },
  {
    status: "active" as const,
    title: "LangChain, LangGraph & LangSmith",
    detail: "Learning modern AI frameworks for production-style LLM workflows, agent orchestration, tool calling, and observability.",
    concepts: ["prompt pipelines", "agent orchestration", "tool calling", "multi-agent systems", "tracing & evaluation"],
  },
  {
    status: "active" as const,
    title: "Workflow Automation with n8n",
    detail: "Designing and automating business workflows using n8n. Exploring AI integrations, API connections, email automation, and no-code orchestration.",
    concepts: ["n8n nodes", "API integrations", "email automation", "Google Workspace", "no-code orchestration"],
  },
  {
    status: "todo" as const,
    title: "Transformer Models & Deep Learning",
    detail: "Studying neural networks, attention mechanisms, self-attention, embeddings, positional encoding, and the Transformer architecture behind modern LLMs.",
    concepts: ["neural networks", "backpropagation", "self-attention", "embeddings", "Transformers"],
  },
  {
    status: "todo" as const,
    title: "Agentic AI Architecture Design",
    detail: "Designing scalable Agentic AI systems combining LLMs, tools, memory, retrieval, human-in-the-loop workflows, and multi-agent collaboration.",
    concepts: ["LLM agents", "memory & retrieval", "human-in-the-loop", "orchestration", "multi-agent collaboration"],
  },
  {
    status: "todo" as const,
    title: "Advanced machine learning",
    detail: "Ensembles, regularisation, hyperparameter tuning, and a deeper look at model evaluation and validation.",
    concepts: ["random forests", "gradient boosting", "regularisation", "hyperparameter tuning"],
  },
  {
    status: "todo" as const,
    title: "Deep learning fundamentals",
    detail: "Neural networks, training dynamics, and a first hands-on project with PyTorch.",
    concepts: ["neurons & layers", "backpropagation", "optimisers", "PyTorch basics"],
  },
];

const map = {
  done: { icon: CheckCircle2, color: "text-primary", label: "Done" },
  active: { icon: CircleDot, color: "text-chart-2", label: "In progress" },
  todo: { icon: Circle, color: "text-muted-foreground", label: "Up next" },
};

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Learning Journey"
      connector="Next · what I'm learning"
      title="A roadmap I'm actively working through."
      description="An honest snapshot of where I am — completed foundations, active focus areas, and what's lined up next."
    >
      <div className="panel p-2 sm:p-3">
        <ol className="divide-y divide-border">
          {milestones.map((m, i) => {
            const cfg = map[m.status];
            const Icon = cfg.icon;
            return (
              <li
                key={m.title}
                tabIndex={0}
                className="row-interactive grid grid-cols-[auto_1fr_auto] items-start gap-4 px-4 py-5 outline-none focus-visible:ring-2 focus-visible:ring-primary/30 sm:px-6 sm:pr-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon size={18} className={cfg.color} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground">{m.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{m.detail}</div>
                  <div className="reveal-preview">
                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {m.concepts.map((c) => (
                          <span
                            key={c}
                            className="rounded-md border border-border bg-background/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <span className="hidden rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:inline-block">
                  {cfg.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
