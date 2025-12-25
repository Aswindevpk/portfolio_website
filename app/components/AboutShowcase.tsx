import Image from "next/image";

import Reveal from "./Reveal";

type AboutShowcaseProps = {
  name: string;
  headline: string;
  bio: string;
};

export default function AboutShowcase({ name, headline, bio }: AboutShowcaseProps) {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[380px] lg:mx-0">
              <div className="pointer-events-none absolute -inset-10 opacity-70">
                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-foreground/[0.03]">
                <Image
                  src="/aswin-image.png"
                  alt={`Portrait of ${name}`}
                  width={760}
                  height={980}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 80vw, 380px"
                  priority={false}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="lg:pl-10">
              <p className="text-xs font-medium tracking-[0.18em] text-foreground/60">
                ABOUT ME
              </p>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {headline}
              </h2>

              <p className="mt-8 text-sm font-medium tracking-[0.14em] text-foreground/60">
                {name.toUpperCase()}
              </p>
              <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-base">
                {bio}
              </p>

              <div className="mt-8">
                <a
                  href="#about"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/15 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
                >
                  Learn more
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
