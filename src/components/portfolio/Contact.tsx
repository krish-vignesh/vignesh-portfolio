import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("krishvignesh1015@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      connector="Where I'm heading · let's connect"
      title="Open to feedback, collaboration, and learning together."
      description="If you have advice, an interesting dataset, or a small project to collaborate on, I'd love to hear from you."
    >
      <div className="panel grid gap-8 p-8 sm:p-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="text-base leading-relaxed text-foreground/90">
            The fastest way to reach me is by email. I read everything and try to
            reply within a couple of days.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:krishvignesh1015@gmail.com?subject=Portfolio%20Inquiry"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              krishvignesh1015@gmail.com
              <ArrowRight size={14} />
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:border-l md:border-border md:pl-8">
          {[
            { icon: Github, label: "GitHub", value: "@krish-vignesh", href: "https://github.com/krish-vignesh" },
            { icon: Linkedin, label: "LinkedIn", value: "in/vigneshkrishnar", href: "https://www.linkedin.com/in/vigneshkrishnar" },
            { icon: Mail, label: "Email", value: "krishvignesh1015@gmail.com", href: "mailto:krishvignesh1015@gmail.com?subject=Portfolio%20Inquiry" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between rounded-md border border-border bg-background/40 px-4 py-3 text-sm transition-colors hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <c.icon size={15} className="text-primary" />
                <span className="text-muted-foreground">{c.label}</span>
              </span>
              <span className="font-mono text-foreground">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} — Data Science & AI Engineering learning portfolio.</span>
        <span className="font-mono">Built with care · always learning</span>
      </div>
    </footer>
  );
}
