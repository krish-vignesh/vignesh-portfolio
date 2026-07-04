import { Section } from "./Section";
import { BookOpen, Code, Database, FlaskConical } from "lucide-react";

const items = [
  {
    icon: FlaskConical,
    tag: "ENTERPRISE DATA",
    title: "AI-Ready Data Platforms",
    body: "Learning how enterprise organizations prepare data for AI systems through modern data architectures, governance, and scalable analytics platforms.",
    preview:
      "Currently exploring: • Medallion Architecture • Data Lakehouse • Delta Lake • Unity Catalog • Data Governance • AI-Ready Data • Enterprise Data Pipelines • Modern Data Platforms",
  },
  {
    icon: Code,
    tag: "SYSTEM DESIGN",
    title: "Enterprise System Design",
    body: "Studying how production software systems are architected for scalability, reliability, and enterprise-grade AI applications.",
    preview:
      "Currently exploring: • System Design • Backend Architecture • REST API Design • Scalable Backend Systems • Event-Driven Architecture • Kafka • Distributed Systems • High-Level Architecture Design",
  },
  {
    icon: Database,
    tag: "DATA ENGINEERING",
    title: "Apache Spark & Databricks",
    body: "Learning distributed data engineering for large-scale analytics and AI pipelines using modern enterprise data processing frameworks.",
    preview:
      "Currently exploring: • Apache Spark • Spark SQL • DataFrames • ETL Pipelines • ELT Workflows • Databricks • Delta Lake • Data Lake Architecture • Batch Processing • Distributed Computing",
  },
  {
    icon: BookOpen,
    tag: "AI Engineering",
    title: "RAG, LangChain & Agentic AI",
    body: "Exploring retrieval-augmented generation, LangChain / LangGraph orchestration, and early agentic workflows with human-in-the-loop steps.",
    preview:
      "Building small RAG pipelines and multi-agent flows on local LLMs — chunking, embeddings, vector search, tool calling, and workflow automation.",
  },
];

export function Exploring() {
  return (
    <Section
      id="exploring"
      eyebrow="Currently Exploring"
      connector="Right now · what I'm exploring"
      title="What I'm digging into this month."
      description="Short list of topics, tools, and resources I'm spending real time with right now."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((it) => (
          <article key={it.title} tabIndex={0} className="panel panel-hover p-6 outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-accent-blue-soft text-primary ring-1 ring-primary/15">
                <it.icon size={16} />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {it.tag}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            <div className="reveal-preview">
              <div>
                <div className="rounded-md border border-border bg-background/40 px-3 py-2.5">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/80">
                    Practical context
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/85">{it.preview}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
