
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import Section from "./components/Section";
import CapabilityCard from "./components/CapabilityCard";
import { FaServer } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { PiCodeFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <main id="top">
        <Hero
          name="Aswin"
          role="React Full‑Stack Developer"
          tagline="I build high-signal web products with calm UI, predictable state, and performance that feels invisible."
        />
        <Section id="what">
          <div className="grid gap-6 sm:grid-cols-3">
            <CapabilityCard
              title="Frontend"
              description="Accessible, responsive UI systems built with a focus on clarity, performance, and long-term maintainability."
              tools={[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Styled Components",
              ]}
              icon={<PiCodeFill className="h-6 w-6" />}
            />

            <CapabilityCard
              title="Backend"
              description="Reliable backend systems and APIs that are intentionally boring—fast, typed, and easy to reason about."
              tools={[
                "Supabase",
                "PostgreSQL",
                "Edge Functions",
              ]}
              icon={<FaServer className="h-6 w-6" />}
            />

            <CapabilityCard
              title="Product"
              description="End-to-end ownership from idea to deployment, with clear scope, thoughtful UX, and fewer surprises."
              tools={["System Design", "UX Decisions", "Shipping", "Iteration"]}
              icon={<FiPackage className="h-6 w-6" />}
              
            />
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected" title="Selected Projects">
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              name="Signalboard"
              description="A minimal team dashboard that surfaces only what matters: trends, blockers, and next actions."
              stack={["Next.js", "React", "TypeScript", "Tailwind", "Postgres"]}
            />
            <ProjectCard
              name="Shipnotes"
              description="Release notes that write themselves: changelog drafting from PRs, labels, and commits."
              stack={["Node.js", "tRPC", "Prisma", "Redis"]}
            />
            <ProjectCard
              name="Luma Checkout"
              description="A checkout flow focused on speed and clarity, with micro-interactions and instant validation."
              stack={["React", "Zod", "Framer Motion", "Playwright"]}
            />
          </div>

          <div className="mt-10">
            <Reveal>
              <p className="text-sm text-foreground/60">
                Hover interactions only for now — navigation comes in Phase 2.
              </p>
            </Reveal>
          </div>
        </Section>
      </main>
    </div>
  );
}
