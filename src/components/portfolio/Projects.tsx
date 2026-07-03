import { Section } from "./Section";
import { Clock } from "lucide-react";
import retailImg from "@/assets/project-retail.jpg";
import vgsalesImg from "@/assets/project-vgsales.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import ragImg from "@/assets/project-rag.jpg";
import agenticImg from "@/assets/project-agentic.jpg";

type Project = {
  title: string;
  summary: string;
  status: "In progress" | "Planned" | "Complete";
  focus: string;
  dataset?: string;
  tags: string[];
  image: string;
  cta: string;
  workflow: string[];
};

const projects: Project[] = [
  {
    title: "VGSales — EDA & ML workflow",
    summary:
      "Working through the VGSales dataset end-to-end: data cleaning, exploratory data analysis, preprocessing, and a beginner-friendly machine learning workflow with baseline models.",
    status: "In progress",
    focus: "EDA & machine learning workflow",
    dataset: "VGSales dataset",
    tags: ["pandas", "scikit-learn"],
    image: vgsalesImg,
    cta: "Project in progress",
    workflow: [
      "Data cleaning & inspection",
      "Exploratory data analysis",
      "Feature engineering",
      "Baseline model & evaluation",
    ],
  },
  {
    title: "Retail dashboard analysis",
    summary:
      "Designing interactive dashboards to surface sales trends, KPIs, and business insights from a retail dataset using Excel and Power BI.",
    status: "In progress",
    focus: "Dashboard building & business insights",
    dataset: "Retail sales dataset",
    tags: ["Excel", "Power BI"],
    image: dashboardImg,
    cta: "Project in progress",
    workflow: [
      "Shape & model the data",
      "Define KPIs & metrics",
      "Design dashboard layout",
      "Communicate insights clearly",
    ],
  },
  {
    title: "Retail sales EDA",
    summary:
      "Exploring a public retail sales dataset to practise data cleaning, grouping, time-based aggregations, and clear data visualization.",
    status: "In progress",
    focus: "Exploratory data analysis & visualization",
    dataset: "Public retail sales",
    tags: ["pandas", "matplotlib"],
    image: retailImg,
    cta: "Project in progress",
    workflow: [
      "Load & clean the data",
      "Group & summarise",
      "Analyse time-based trends",
      "Build readable visualisations",
    ],
  },
  {
    title: "RAG system — progressive retrieval pipeline",
    summary:
      "Building a Retrieval-Augmented Generation system over synthetic industry-style documents, PDFs, and text data. Uses Ollama 3.2 as the local LLM while exploring chunking, embeddings, vector search, retrieval evaluation, Hybrid RAG, and Multi-Query Retrieval.",
    status: "In progress",
    focus: "Document retrieval & RAG workflows",
    dataset: "Synthetic industry documents & PDFs",
    tags: ["RAG", "Ollama 3.2", "Embeddings", "Vector Search", "Hybrid RAG", "Multi-Query Retrieval"],
    image: ragImg,
    cta: "Project in progress",
    workflow: [
      "Chunk & embed documents",
      "Index in vector store",
      "Hybrid & multi-query retrieval",
      "Evaluate retrieval quality",
    ],
  },
  {
    title: "Agentic AI email summarizer",
    summary:
      "Building an Agentic AI workflow using LangGraph where multiple AI agents collaborate to analyze incoming emails, generate concise summaries, assign priority levels, and draft appropriate responses. The workflow integrates a human-in-the-loop approval step, allowing the owner to review and approve generated drafts before they are automatically sent to the original sender. Structured outputs and workflow data are stored in Google Sheets for tracking and follow-up. The system uses Ollama 3.2 as the local LLM for reasoning, summarization, and response generation.",
    status: "In progress",
    focus: "Multi-Agent Systems, Workflow Automation, Human-in-the-Loop AI",
    dataset: "Sample email inbox",
    tags: [
      "LangGraph",
      "Agentic AI",
      "Ollama 3.2",
      "Human in the Loop",
      "Workflow Automation",
      "Email Processing",
      "Google Sheets",
      "Multi-Agent Systems",
    ],
    image: agenticImg,
    cta: "Project in progress",
    workflow: [
      "Ingest & parse emails",
      "Agent reasoning & summary",
      "Priority assignment",
      "Human-in-the-loop approval",
      "Auto-send approved responses",
      "Sync outputs to Google Sheets",
    ],
  },
];

const statusStyle: Record<Project["status"], string> = {
  "In progress": "bg-muted text-foreground ring-border",
  Planned: "bg-muted text-muted-foreground ring-border",
  Complete: "bg-primary text-primary-foreground ring-primary",
};

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      connector="Putting it to work · how I apply concepts"
      title="A small dashboard of what I'm building."
      description="These are learning projects — small, focused, and gradually improved as I grow. The goal is clarity and honesty over flash."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="panel panel-hover group flex h-full flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
              <img
                src={p.image}
                alt={`${p.title} visual`}
                width={800}
                height={450}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <span
                className={`absolute left-4 top-4 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${statusStyle[p.status]}`}
              >
                {p.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>

              <div className="mt-5 space-y-1.5 text-xs">
                <div className="flex items-baseline gap-2">
                  <span className="font-medium uppercase tracking-wider text-muted-foreground/80">
                    Focus
                  </span>
                  <span className="text-foreground/90">{p.focus}</span>
                </div>
                {p.dataset && (
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium uppercase tracking-wider text-muted-foreground/80">
                      Dataset
                    </span>
                    <span className="font-mono text-foreground/90">{p.dataset}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background/40 px-2 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="reveal-preview">
                <div>
                  <div className="rounded-md border border-border bg-background/40 p-3">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/80">
                      Workflow
                    </div>
                    <ol className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-foreground/85">
                      {p.workflow.map((step, i) => (
                        <li key={step} className="flex items-center gap-1.5">
                          <span className="font-mono text-muted-foreground/70">{String(i + 1).padStart(2, "0")}</span>
                          <span>{step}</span>
                          {i < p.workflow.length - 1 && (
                            <span className="text-muted-foreground/40">→</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border bg-background/30 px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
                  <Clock size={12} />
                  {p.cta}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
