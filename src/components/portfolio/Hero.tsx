import { ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const techPills = [
  { text: "Python", top: "14%", left: "4%", delay: 3.5, duration: 18, ampX: 8, ampY: 15, dirX: 1 as const, dirY: -1 as const },
  { text: "SQL", bottom: "22%", left: "5%", delay: 8.2, duration: 22, ampX: 6, ampY: 12, dirX: -1 as const, dirY: 1 as const },
  { text: "LangGraph", top: "18%", right: "4%", delay: 12.1, duration: 26, ampX: 7, ampY: 14, dirX: 1 as const, dirY: -1 as const },
  { text: "RAG Systems", bottom: "12%", right: "42%", delay: 5.8, duration: 30, ampX: 9, ampY: 16, dirX: -1 as const, dirY: 1 as const },
  { text: "Machine Learning", top: "42%", left: "2%", delay: 16.4, duration: 34, ampX: 8, ampY: 18, dirX: 1 as const, dirY: -1 as const },
  { text: "AI Engineering", top: "8%", right: "32%", delay: 9.3, duration: 28, ampX: 10, ampY: 13, dirX: -1 as const, dirY: -1 as const },
  { text: "Power BI", top: "8%", left: "32%", delay: 4.7, duration: 20, ampX: 7, ampY: 15, dirX: 1 as const, dirY: 1 as const },
  { text: "Azure", bottom: "8%", left: "28%", delay: 18.2, duration: 24, ampX: 9, ampY: 17, dirX: -1 as const, dirY: 1 as const },
  { text: "Docker", top: "42%", right: "2%", delay: 11.5, duration: 32, ampX: 6, ampY: 13, dirX: 1 as const, dirY: -1 as const },
];

const cssAnimations = techPills.map((pill, idx) => {
  const name = `float-pill-anim-${idx}`;
  const ampX = pill.ampX;
  const ampY = pill.ampY;
  const dirX = pill.dirX;
  const dirY = pill.dirY;

  return `
    @keyframes ${name} {
      0% { transform: translate3d(0px, 0px, 0); }
      16% { transform: translate3d(${ampX * 0.5 * dirX}px, ${-ampY * 0.4 * dirY}px, 0); }
      33% { transform: translate3d(${-ampX * 0.3 * dirX}px, ${ampY * 0.2 * dirY}px, 0); }
      50% { transform: translate3d(${ampX * dirX}px, ${-ampY * dirY}px, 0); }
      66% { transform: translate3d(${-ampX * 0.6 * dirX}px, ${ampY * 0.4 * dirY}px, 0); }
      83% { transform: translate3d(${ampX * 0.3 * dirX}px, ${-ampY * 0.3 * dirY}px, 0); }
      100% { transform: translate3d(0px, 0px, 0); }
    }
    .float-pill-class-${idx} {
      animation: ${name} ${pill.duration}s ease-in-out infinite;
      animation-delay: -${pill.delay}s;
      will-change: transform;
    }
  `;
}).join("\n") + `
  @keyframes float-card {
    0% { transform: translate3d(0px, 0px, 0); }
    16% { transform: translate3d(1px, -3px, 0); }
    33% { transform: translate3d(-1px, 1px, 0); }
    50% { transform: translate3d(2px, -4px, 0); }
    66% { transform: translate3d(-2px, 2px, 0); }
    83% { transform: translate3d(1px, -2px, 0); }
    100% { transform: translate3d(0px, 0px, 0); }
  }
  .float-card-class {
    animation: float-card 32s ease-in-out infinite;
    animation-delay: -6.4s;
    will-change: transform;
  }
`;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <style dangerouslySetInnerHTML={{ __html: cssAnimations }} />

      {/* Floating Technology Pills in the Background */}
      {techPills.map((pill, idx) => (
        <div
          key={pill.text}
          className={`hidden md:inline-flex items-center rounded-full border border-border bg-surface/90 px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm cursor-default select-none z-0 float-pill-class-${idx}`}
          style={{
            position: "absolute",
            top: pill.top,
            left: pill.left,
            right: pill.right,
            bottom: pill.bottom,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -2,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
          >
            {pill.text}
          </motion.div>
        </div>
      ))}

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left — headline (60%) */}
          <div className="lg:col-span-7">
            <div className="hero-enter flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              Vignesh Krishna
            </div>

            <h1 className="hero-enter hero-delay-1 mt-8 text-balance font-display text-[2.75rem] font-medium leading-[1.02] tracking-[-0.022em] text-foreground sm:text-[3.75rem] md:text-[4.5rem]">
              Building foundations in{" "}
              <span className="italic font-normal text-muted-foreground">
                Data Science
              </span>{" "}
              and{" "}
              <span className="italic font-normal text-muted-foreground">
                AI Engineering
              </span>
              .
            </h1>

            <p className="hero-enter hero-delay-2 mt-9 max-w-[34rem] text-pretty text-[1.02rem] leading-[1.7] text-muted-foreground sm:text-lg sm:leading-[1.65]">
              Aspiring Data Scientist and AI Engineer exploring data, machine
              learning, retrieval systems, and agentic workflows. A working
              record of what I&apos;m studying and the projects I&apos;m building
              along the way.
            </p>

            <div className="hero-enter hero-delay-3 mt-11 flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                className="cta-btn cta-btn-primary group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                View projects
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#about"
                className="cta-btn cta-btn-ghost inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground"
              >
                About me
              </a>
              <div className="ml-2 flex items-center gap-1.5">
                <a
                  href="https://github.com/krish-vignesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="icon-btn grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vigneshkrishnar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="icon-btn grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — meta strip (40%) */}
          <div className="hero-enter hero-delay-4 lg:col-span-5 relative z-20">
            <div className="float-card-class">
              <motion.div 
                className="info-card cursor-default"
                whileHover={{
                  y: -3,
                  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.12)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    At a glance
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                </div>
                <dl className="divide-y divide-border">
                  {[
                    { k: "Focus", v: "DS · ML · AI Engineering" },
                    { k: "Stack", v: "Python · SQL · LangGraph" },
                    { k: "Projects", v: "5 in progress" },
                    { k: "Status", v: "Open to learn" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="meta-row group flex items-baseline justify-between gap-4 py-[0.95rem]"
                    >
                      <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground/70">
                        {s.k}
                      </dt>
                      <dd className="text-[0.9rem] font-medium tracking-[-0.005em] text-foreground">
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
