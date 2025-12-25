import Reveal from './Reveal';

type HeroProps = {
  name: string;
  role: string;
  tagline: string;
};

export default function Hero({ name, role, tagline }: HeroProps) {
  return (
    <section className="pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-foreground/60">
            {role}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {name}
            <span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">
            {tagline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/15 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              Contact
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 border-t border-foreground/10 pt-8">
            <div className="flex flex-col gap-3 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
              <p>Building calm, fast interfaces.</p>
              <p className="font-mono text-xs tracking-wide">Available for 2026</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
