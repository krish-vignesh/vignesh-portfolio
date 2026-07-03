import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Exploring } from "@/components/portfolio/Exploring";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Data Science Portfolio — Student building with Python & ML" },
      {
        name: "description",
        content:
          "A clean, dashboard-style portfolio for a Data Science student — projects, learning journey, and topics currently being explored.",
      },
      { property: "og:title", content: "Data Science Portfolio — Student" },
      {
        property: "og:description",
        content:
          "Projects, learning roadmap, and current focus areas in statistics, Python, and machine learning.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Exploring />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
