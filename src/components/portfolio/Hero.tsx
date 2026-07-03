import { ArrowRight, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="mx-auto max-w-6xl px-6">
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
          <div className="hero-enter hero-delay-4 lg:col-span-5">
            <div className="info-card">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
