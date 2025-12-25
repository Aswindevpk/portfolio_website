import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <a
            href="#top"
            className="font-mono text-xs tracking-[0.22em] text-foreground/70 transition-colors hover:text-foreground"
          >
            ASWIN
          </a>
          <nav className="flex items-center gap-5 text-sm text-foreground/70">
            <a className="transition-colors hover:text-foreground" href="#what">
              What I do
            </a>
            <a className="transition-colors hover:text-foreground" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-foreground" href="#about">
              About
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero
          name="Aswin"
          role="React Full‑Stack Developer"
          tagline="I build high-signal web products with calm UI, predictable state, and performance that feels invisible."
        />

        <Section id="what" eyebrow="Capabilities" title="What I do">
          <div className="grid gap-6 sm:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
                <p className="text-sm font-medium text-foreground">Frontend</p>
                <p className="mt-2 text-sm leading-7 text-foreground/70">
                  Accessible, responsive UI systems with React + TypeScript.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
                <p className="text-sm font-medium text-foreground">Backend</p>
                <p className="mt-2 text-sm leading-7 text-foreground/70">
                  APIs that are boring (in a good way): fast, typed, observable.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
                <p className="text-sm font-medium text-foreground">Product</p>
                <p className="mt-2 text-sm leading-7 text-foreground/70">
                  From idea to shipped—tight scopes, crisp UX, fewer surprises.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="work" eyebrow="Selected" title="Selected work">
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

        <Section id="about" eyebrow="Human" title="About">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-base leading-8 text-foreground/70 sm:text-lg">
                I’m a developer who cares about how software feels. I like building
                interfaces that read clearly, move subtly, and hold up under real
                usage. Outside of code, I’m usually refining systems, collecting
                small design references, or simplifying something that’s gotten
                noisy.
              </p>
            </div>
          </Reveal>
        </Section>

        <Footer
          email="hello@aswin.dev"
          links={[
            { label: 'GitHub', href: 'https://github.com/' },
            { label: 'LinkedIn', href: 'https://linkedin.com/' },
          ]}
        />
      </main>
    </div>
  );
}
