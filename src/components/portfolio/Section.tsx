import { useEffect, useRef, useState, type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  connector,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Short transitional line that links this section to the previous one. */
  connector?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} className="relative scroll-mt-24 py-20 sm:py-24">
      <div ref={ref} className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}>
        {connector && (
          <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
            <span className="h-px w-8 bg-border" />
            <span>{connector}</span>
          </div>
        )}
        <div className="mb-10 max-w-2xl sm:mb-12">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
              <span className="h-px w-6 bg-primary/50" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
