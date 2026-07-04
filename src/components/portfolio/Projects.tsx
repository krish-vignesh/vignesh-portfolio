
import { Section } from "./Section";
import { Clock, Github, ExternalLink, ArrowRight, ChevronUp } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import retailImg from "@/assets/project-retail.jpg";
import vgsalesImg from "@/assets/project-vgsales.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import ragImg from "@/assets/project-rag.jpg";
import agenticImg from "@/assets/project-agentic.jpg";
import macroragImg from "@/assets/project-macrorag.png";

type Project = {
  title: string;
  summary: string;
  status: "Enhancement Planned" | "Complete";
  focus: string;
  dataset?: string;
  tags: string[];
  image: string;
  cta: string;
  workflow: string[];
  // Expanded Detail Panel Attributes
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  challenges: string;
  highlights: string;
  github: string;
  liveDemo?: string;
  highlightsList?: string[];
  metrics?: string[];
};

const projects: Project[] = [
  {
    title: "Enterprise_Macro_RAG",
    summary:
      "Designed and engineered an enterprise-grade AI platform that combines Retrieval-Augmented Generation (RAG), live macroeconomic intelligence, and interactive analytics to support strategic business decision-making. Built using a modular full-stack architecture with AI evaluation, observability, and enterprise engineering practices.",
    status: "Enhancement Planned",
    focus: "Enterprise AI • Strategic Intelligence • Hybrid RAG",
    dataset: "Macroeconomic Indicators • Enterprise Knowledge Base • Economic Reports",
    tags: ["React", "TypeScript", "Node.js", "Gemini", "LangChain", "ChromaDB", "LangSmith", "RAGAS", "Docker"],
    image: macroragImg,
    cta: "Project completed",
    workflow: [
      "Ingest & model macro data",
      "Configure hybrid search",
      "Integrate Gemini LLM",
      "Run RAGAS evaluation",
      "Deploy Docker container",
    ],
    problem: "Business leaders often rely on fragmented economic reports, spreadsheets, dashboards, and internal documentation when making strategic decisions. Switching between multiple sources slows analysis, reduces confidence in AI-generated insights, and makes it difficult to maintain a single source of truth.",
    solution: "Designed and developed a modular enterprise platform that integrates live macroeconomic indicators, document retrieval, Hybrid RAG, AI reasoning, evaluation pipelines, and observability into a unified decision intelligence system. The architecture emphasizes scalability, explainability, maintainability, and continuous improvement through retrieval evaluation and AI monitoring.",
    architecture: "React Dashboard → Node.js / Express API → Hybrid Retrieval (Vector Search + BM25 + Reciprocal Rank Fusion) → Gemini 2.5 Flash → Evaluation Pipeline (RAGAS) → Observability (LangSmith) → Executive Intelligence Dashboard",
    features: [
      "Executive AI Copilot for macroeconomic analysis",
      "Interactive business intelligence dashboards",
      "Hybrid Retrieval combining semantic and lexical search",
      "AI-powered strategic insight generation",
      "Live macroeconomic indicator integration",
      "AI evaluation using RAGAS",
      "LangSmith observability and tracing",
      "Modular enterprise architecture",
    ],
    challenges: "Designed an enterprise-scale AI architecture capable of integrating structured economic data, document retrieval, hybrid search strategies, AI evaluation, observability, and interactive analytics into a scalable and maintainable platform while ensuring reliable AI responses and an intuitive user experience.",
    highlights: "Enterprise Full-Stack Architecture • Hybrid Retrieval (Vector Search + BM25 + Reciprocal Rank Fusion) • Modular AI Service Architecture • Gemini-powered reasoning engine • Executive analytics dashboard • LangSmith observability • RAGAS evaluation pipeline • Docker-based development environment • Scalable and reusable application architecture",
    github: "https://github.com/krish-vignesh/Macro_RAG",
  },
  {
    title: "VGSales — End-to-End Machine Learning Pipeline",
    summary:
      "Designed and implemented a complete machine learning workflow to analyze historical video game sales, engineer predictive features, compare multiple supervised learning models, and classify commercial game success using an optimized XGBoost pipeline.",
    status: "Enhancement Planned",
    focus: "Machine Learning • Feature Engineering • Classification Modeling",
    dataset: "Video Game Sales Dataset (Historical Global Sales)",
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn", "Feature Engineering", "Cross Validation"],
    image: vgsalesImg,
    cta: "Project in progress",
    workflow: [
      "Raw Dataset",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Model Training",
      "Model Comparison",
      "XGBoost Optimization",
      "Evaluation & Prediction",
    ],
    problem: "Game publishers need early indicators of whether a title is likely to become commercially successful before release. Historical metadata such as platform, publisher, genre, and release year can be leveraged to estimate market performance and support better publishing decisions.",
    solution: "Built a structured machine learning workflow that transforms raw sales data into predictive features, evaluates multiple baseline models, applies feature engineering techniques, and optimizes an XGBoost classifier using cross-validation and threshold tuning to improve prediction quality.",
    architecture: "Raw Dataset → Data Cleaning → Exploratory Data Analysis → Feature Engineering → Train/Test Split → Model Training → Model Comparison → XGBoost Optimization → Evaluation & Prediction",
    features: [
      "Comprehensive exploratory data analysis",
      "Missing value handling and preprocessing",
      "Feature engineering for predictive performance",
      "Multiple model comparison",
      "XGBoost implementation",
      "Hyperparameter tuning",
      "Stratified cross-validation",
      "Classification threshold optimization",
      "Performance metric evaluation",
    ],
    challenges: "Improving classification performance while minimizing overfitting required careful feature engineering, model selection, validation strategy, and threshold optimization. Multiple algorithms were benchmarked before selecting the final optimized model.",
    highlights: "End-to-End ML Pipeline • Feature Engineering Workflow • Classification Modeling • XGBoost Optimization • Stratified Cross Validation • Threshold Tuning • Model Performance Comparison • Production-style ML Workflow",
    github: "https://github.com/krish-vignesh/vgsales-eda-ml",
  },
  {
    title: "Retail dashboard analysis",
    summary:
      "Designed and developed an interactive business intelligence dashboard in Power BI to transform retail transaction data into actionable insights through KPI monitoring, sales analytics, regional performance tracking, and executive reporting.",
    status: "Enhancement Planned",
    focus: "Business Intelligence • Dashboard Engineering • KPI Analytics",
    dataset: "Retail Sales Transactions",
    tags: ["Excel", "Power BI", "DAX", "Data Modeling", "Business Intelligence", "Dashboard Design"],
    highlightsList: [
      "Interactive KPI Dashboard",
      "Sales Trend Analysis",
      "Product Performance Tracking",
      "Regional Sales Insights",
      "Customer Segment Analysis",
      "Dynamic Filtering & Slicers",
      "Executive Business Reporting",
      "Power BI Visualizations",
    ],
    metrics: [
      "Revenue",
      "Profit",
      "Orders",
      "Customers",
      "Sales Growth",
      "Regional Performance",
      "Product Categories",
      "Average Order Value",
    ],
    image: dashboardImg,
    cta: "Project in progress",
    workflow: [
      "Shape & model the data",
      "Define KPIs & metrics",
      "Design dashboard layout",
      "Communicate insights clearly",
    ],
    problem: "Store managers and supply chain directors lack centralized visibility into transaction logs, leading to delayed inventory stockouts and missed revenue peaks.",
    solution: "Built a robust reporting dashboard in Power BI backed by raw SQL views to highlight top product categories, average customer spend, and rolling profit margins.",
    architecture: "Relational database extraction with custom views feeding a Power BI star-schema reporting model.",
    features: [
      "Dynamic date-range slicers and category filters",
      "Automated DAX measures for year-over-year revenue comparison",
      "Customer cohort segments analyzing buyer loyalty trends",
    ],
    challenges: "Optimizing slow DAX query performance during heavy time-intelligence metric runs on transaction logs.",
    highlights: "Designed a clean dimensional star schema that cut automated dashboard reload times by 40%.",
    github: "https://github.com/krish-vignesh/retail-dashboard",
    liveDemo: "https://app.powerbi.com",
  },
  {
    title: "Cricket Performance Analytics Pipeline",
    summary:
      "Designed and implemented an end-to-end exploratory analytics pipeline to analyze professional cricket performance data using statistical exploration, preprocessing, player segmentation, correlation analysis, and business-driven visualizations to uncover actionable performance insights.",
    status: "Complete",
    focus: "Sports Analytics • Exploratory Data Analysis • Performance Analytics",
    dataset: "Professional Cricket Performance Dataset",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Linear Regression", "Data Cleaning", "Statistical Analysis", "EDA"],
    image: retailImg,
    cta: "Project in progress",
    workflow: [
      "Load & clean data",
      "Profile dataset",
      "Statistical summary",
      "Bivariate analysis",
      "Plot correlations",
      "Player filtering",
      "Team comparison",
      "Generate insights",
    ],
    problem: "Coaches, selectors, and sports managers struggle to extract clear patterns from raw cricket scorecards and match reports, leading to suboptimal team selection and bias in performance evaluations.",
    solution: "Developed a Python-based data profiling and analysis pipeline that cleans player statistics, performs multivariate correlation analysis, builds distribution profiles, and renders seaborn visualizations to segment top players quantitatively.",
    architecture: "Raw Cricket Data → Pandas Profiling → Null Value Imputation → Outlier Filtering → Statistical Analysis → Correlation Heatmaps → Player Performance Filtering → Team Performance Comparison → Actionable Sports Insights",
    features: [
      "Comprehensive dataset profiling and missing value imputation",
      "Statistical summaries and boxplot distribution analysis",
      "Multivariate correlation heatmap modeling using Seaborn",
      "Conditional player performance filtering and segmentation",
      "Team-wise metric aggregations and comparative analytics",
      "Actionable performance insight reports",
    ],
    challenges: "Tuning categorical filtering boundaries to accurately isolate player consistency metrics while handling null score fields from abandoned matches.",
    highlights: "Dataset profiling • Preprocessing & null value imputation • Statistical distribution box plots • Multivariate correlation matrices • Conditional filtering query optimization • Team-wise comparative analytics • Actionable sports performance insights",
    github: "https://github.com/krish-vignesh/cricket-performance-analytics",
  },
  {
    title: "RAG system — progressive retrieval pipeline",
    summary:
      "Designed and engineered an enterprise-style Retrieval-Augmented Generation (RAG) system that transforms unstructured PDF documents into an intelligent knowledge base using semantic retrieval, cross-encoder re-ranking, and a locally hosted Llama 3.2 model. Built with evaluation and observability pipelines to improve retrieval quality, answer reliability, and system transparency.",
    status: "Enhancement Planned",
    focus: "AI Retrieval • Enterprise RAG • Semantic Search",
    dataset: "Synthetic Enterprise Documents & Technical Knowledge Base",
    tags: ["LangChain", "ChromaDB", "Ollama", "Llama 3.2", "LangSmith", "RAGAS", "Cross-Encoder"],
    image: ragImg,
    cta: "Project in progress",
    workflow: [
      "Chunk & embed documents",
      "Index in vector store",
      "Hybrid & multi-query retrieval",
      "Evaluate retrieval quality",
    ],
    problem: "Organizations often rely on large collections of PDF documentation, making critical information difficult to locate quickly. Manual document search slows decision-making, increases response times, and reduces knowledge accessibility across teams.",
    solution: "Designed a modular RAG pipeline that ingests PDF documents, generates semantic embeddings, performs vector retrieval with MMR, improves ranking using a Cross-Encoder, and produces grounded responses through a locally hosted Llama 3.2 model. Integrated RAGAS evaluation and LangSmith observability to continuously measure and improve retrieval quality.",
    architecture: "Document Ingestion → Recursive Chunking → HuggingFace Embeddings → ChromaDB → Semantic Retrieval → Cross-Encoder Re-Ranking → Prompt Construction → Llama 3.2 → Context-Aware Response",
    features: [
      "Enterprise PDF ingestion and intelligent document indexing",
      "Recursive text chunking with semantic embeddings",
      "MMR-based semantic retrieval with Top-K candidate selection",
      "Cross-Encoder re-ranking for improved retrieval precision",
      "Context-aware answer generation using a local Llama 3.2 model",
      "Automated evaluation using RAGAS metrics",
      "LangSmith tracing for observability and pipeline debugging",
    ],
    challenges: "Balancing retrieval accuracy, response quality, and inference latency while integrating semantic search, re-ranking, evaluation, and observability into a modular and maintainable AI pipeline.",
    highlights: "Modular Retrieval-Augmented Generation architecture • Retrieval optimization using MMR and Cross-Encoder Re-Ranking • Local LLM deployment with Ollama and Llama 3.2 • Automated evaluation pipeline with RAGAS • End-to-end observability using LangSmith • Experiment-driven retrieval optimization",
    github: "https://github.com/krish-vignesh/rag-retrieval-pipeline",
  },
  {
    title: "Agentic AI email summarizer",
    summary:
      "Building an Agentic AI workflow using LangGraph where multiple AI agents collaborate to analyze incoming emails, generate summaries, and draft responses with human approval.",
    status: "Enhancement Planned",
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
    problem: "Shared corporate inboxes receive hundreds of support tickets daily, causing delays in prioritizing critical inquiries and drafting repeating templates.",
    solution: "Engineered a stateful multi-agent system using LangGraph that processes support requests, categorizes priority, drafts replies, and pauses for human confirmation.",
    architecture: "LangGraph state chart orchestrating local Ollama LLMs, Google Sheets API connector, and a CLI human-approval node.",
    features: [
      "Conditional graph routing based on email urgency levels",
      "Human-in-the-loop execution gate to edit generated response drafts",
      "Structured output generation writing workflow metrics to Google Sheets",
    ],
    challenges: "Enforcing reliable JSON schemas from small local LLMs and preserving conversational state across async graph execution cycles.",
    highlights: "Configured Graph State checkpointing and memory serialization, allowing workflow states to freeze during human interruption and resume smoothly.",
    github: "https://github.com/krish-vignesh/agentic-email-summarizer",
    liveDemo: "https://n8n.io",
  },
];

const statusStyle: Record<Project["status"], string> = {
  "Enhancement Planned": "bg-muted text-foreground ring-border",
  Complete: "bg-primary text-primary-foreground ring-primary",
};

// Check if a tag or focus wording contains architectural terms to visually emphasize them
const needsEmphasis = (text: string) => {
  const lower = text.toLowerCase();
  return ["architecture", "ai", "cloud", "data", "backend", "rag", "agentic", "pipeline", "agent", "system"].some(term => lower.includes(term));
};

function ProjectCard({
  project,
  index,
  hoveredIdx,
  setHoveredIdx,
  selectedProjectIdx,
  setSelectedProjectIdx,
}: {
  project: Project;
  index: number;
  hoveredIdx: number | null;
  setHoveredIdx: (idx: number | null) => void;
  selectedProjectIdx: number | null;
  setSelectedProjectIdx: (idx: number | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Internal Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 300 });

  const imgParallaxX = useTransform(springX, [-1, 1], [-4, 4]);
  const imgParallaxY = useTransform(springY, [-1, 1], [-4, 4]);

  const contentParallaxX = useTransform(springX, [-1, 1], [-2, 2]);
  const contentParallaxY = useTransform(springY, [-1, 1], [-2, 2]);

  const ctaParallaxX = useTransform(springX, [-1, 1], [-1, 1]);
  const ctaParallaxY = useTransform(springY, [-1, 1], [-1, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xVal = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const yVal = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    mouseX.set(0);
    mouseY.set(0);
  };

  const isActive = selectedProjectIdx === index;
  const isDimmed = hoveredIdx !== null && hoveredIdx !== index;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredIdx(index)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setSelectedProjectIdx(isActive ? null : index)}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        initial: { opacity: 0, y: 32, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="panel group flex h-full flex-col overflow-hidden cursor-pointer relative transition-all duration-300"
      style={{
        opacity: isDimmed ? 0.85 : 1,
      }}
      animate={
        isActive
          ? {
              y: -10,
              scale: 1.02,
              borderColor: "rgba(13, 13, 13, 0.35)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }
          : {}
      }
      whileHover={
        shouldReduceMotion || isActive
          ? {}
          : {
              y: -8,
              borderColor: "rgba(13, 13, 13, 0.22)",
              boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.08)",
            }
      }
    >
      {/* Project Image block with internal transform shifts */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
        <motion.img
          src={project.image}
          alt={`${project.title} visual`}
          width={800}
          height={450}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={{
            x: imgParallaxX,
            y: imgParallaxY,
          }}
        />
        <span
          className={`absolute left-4 top-4 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${statusStyle[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <motion.div
        className="flex flex-1 flex-col p-6 transition-transform duration-300 ease-out group-hover:translate-y-[-2px]"
        style={{ x: contentParallaxX, y: contentParallaxY }}
      >
        <h3 className={`text-lg tracking-tight text-foreground transition-colors ${needsEmphasis(project.title) ? "font-semibold" : "font-medium"}`}>
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-5 space-y-1.5 text-xs">
          <div className="flex items-baseline gap-2">
            <span className="font-medium uppercase tracking-wider text-muted-foreground/80">
              Focus
            </span>
            <span className={`text-foreground/90 transition-all ${needsEmphasis(project.focus) ? "font-semibold text-foreground" : "font-normal"}`}>
              {project.focus}
            </span>
          </div>
          {project.dataset && (
            <div className="flex items-baseline gap-2">
              <span className="font-medium uppercase tracking-wider text-muted-foreground/80">
                Dataset
              </span>
              <span className="font-mono text-foreground/90">{project.dataset}</span>
            </div>
          )}
        </div>

        {/* Tech badges staggered viewport entrance */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.04 } }
          }}
          className="mt-4 flex flex-wrap gap-1.5"
        >
          {project.tags.map((t) => (
            <motion.span
              key={t}
              variants={{
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 }
              }}
              whileHover={{
                y: -2,
                scale: 1.03,
                borderColor: "rgba(13, 13, 13, 0.22)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`rounded-md border border-border bg-background/40 px-2 py-1 text-[11px] transition-colors cursor-default select-none ${needsEmphasis(t) ? "font-semibold text-foreground border-foreground/30" : "text-muted-foreground"}`}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <div className="reveal-preview">
          <div>
            <div className="rounded-md border border-border bg-background/40 p-3">
              <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/80">
                Workflow
              </div>
              <ol className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-foreground/85">
                {project.workflow.map((step, i) => (
                  <li key={step} className="flex items-center gap-1.5">
                    <span className="font-mono text-muted-foreground/70">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                    {i < project.workflow.length - 1 && (
                      <span className="text-muted-foreground/40">→</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <motion.div
          style={{ x: ctaParallaxX, y: ctaParallaxY }}
          className="mt-auto pt-6 flex items-center justify-between"
        >
          <motion.span
            whileHover={{
              y: -3,
              boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.08)",
              borderColor: "rgba(13, 13, 13, 0.22)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border bg-background/30 px-2.5 py-1.5 text-xs font-medium text-muted-foreground cursor-default transition-all duration-300"
          >
            <Clock size={12} />
            {project.cta}
          </motion.span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProjectIdx(isActive ? null : index);
            }}
            className="text-xs font-semibold text-primary underline underline-offset-4 hover:text-foreground"
          >
            Learn More
          </button>
        </motion.div>

        {/* Dynamic Project Detail Panel (Collapsible Drawer with 60 FPS transform transitions) */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="border-t border-border mt-6 pt-6 space-y-5 text-xs text-foreground/90 overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground/80">Business Problem</h4>
                <p className="mt-1 text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground/80">Engineering Solution</h4>
                <p className="mt-1 text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground/80">Architecture</h4>
                <p className="mt-1 text-muted-foreground leading-relaxed font-mono bg-background/30 p-2 rounded border border-border/60">{project.architecture}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground/80">Key Features</h4>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-muted-foreground leading-relaxed">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground/80">Technical Challenges</h4>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground/80">Highlights</h4>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{project.highlights}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-primary py-2.5 text-[11px] font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
                >
                  <Github size={12} />
                  GitHub Repository
                </a>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProjectIdx(null);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronUp size={12} />
                  Collapse Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      connector="Putting it to work · how I apply concepts"
      title="A small dashboard of what I'm building."
      description="These are learning projects — small, focused, and gradually improved as I grow. The goal is clarity and honesty over flash."
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.08,
            }
          }
        }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((p, idx) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={idx}
            hoveredIdx={hoveredIdx}
            setHoveredIdx={setHoveredIdx}
            selectedProjectIdx={selectedProjectIdx}
            setSelectedProjectIdx={setSelectedProjectIdx}
          />
        ))}
      </motion.div>
    </Section>
  );
}
