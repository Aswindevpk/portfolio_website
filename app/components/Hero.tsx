import Image from "next/image";
import Reveal from "./Reveal";
import { FaJsSquare } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { Briefcase, MessageCircle } from "lucide-react";

type HeroProps = {
  name: string;
  role: string;
  tagline: string;
};

export default function Hero({ name, role, tagline }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ---------------- Left Content ---------------- */}
          <div className="relative">
            {/* Ambient Layers */}
            <div className="absolute inset-0 -z-10">
              {/* Primary glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[420px] w-[420px] rounded-full bg-accent/35 blur-[140px]" />
              </div>

              {/* Offset glow */}
              <div className="absolute -top-20 -right-16">
                <div className="h-[260px] w-[260px] rounded-full bg-accent/20 blur-[120px]" />
              </div>

              {/* Ground glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="h-28 w-[60%] rounded-full bg-accent/15 blur-[80px]" />
              </div>
            </div>
            <h1 className="hidden">Full-Stack React & Next.js Developer Building Modern Web Applications</h1>

            <Reveal>
              <p className="text-sm font-medium tracking-[0.16em] text-foreground/60">
                {role}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                Hello, I’m {name}
                <span className="text-accent">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/70 sm:text-xl">
                {tagline}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="group flex h-11 items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-6 text-sm font-medium text-foreground transition hover:bg-accent/20"
                >
                  <Briefcase className="h-4 w-4" />
                  View Projects
                </a>

                <a
                  href="https://www.linkedin.com/in/aswindevpk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-full border-0 bg-white px-6 text-sm font-semibold text-violet-600 transition hover:bg-white/90 hover:shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  Let's Talk
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---------------- Right Image ---------------- */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-[460px]">
              {/* Ambient element */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="h-[420px] w-[420px] rounded-full bg-accent/70  " />
              </div>

              {/* Ambient Layers */}
              <div className="absolute inset-0 -z-10">
                {/* Primary glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[420px] w-[420px] rounded-full bg-accent/35 blur-[140px]" />
                </div>

                {/* Offset glow */}
                <div className="absolute -top-20 -right-16">
                  <div className="h-[260px] w-[260px] rounded-full bg-accent/20 blur-[120px]" />
                </div>

                {/* Ground glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="h-28 w-[60%] rounded-full bg-accent/15 blur-[80px]" />
                </div>
              </div>

              {/* ---------- Floating Stat Badges ---------- */}
              <div className="pointer-events-none absolute inset-0 z-10">
                {/* React */}
                <div className="absolute left-[-5%] bottom-16">
                  <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-transparent px-4 py-3 backdrop-blur-sm shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                      <FaJsSquare className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">JavaScript</p>
                      <p className="text-xs text-white/70">React.js / Next.js</p>
                    </div>
                  </div>
                </div>

                {/* Next.js */}
                <div className="absolute left-[40%] bottom-[-5%]">
                  <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-transparent px-4 py-3 backdrop-blur-sm shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                      <SiSupabase className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">
                        Supabase
                      </p>
                      <p className="text-xs text-white/70">PostgreSQL</p>
                    </div>
                  </div>
                </div>

                {/* Tailwind */}
                <div className="absolute right-[-5%] bottom-24">
                  <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-transparent px-4 py-3 backdrop-blur-sm shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                      <BiLogoTailwindCss className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">
                        CSS
                      </p>
                      <p className="text-xs text-white/70">Tailwind </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <Image
                  src="/hero-image.png"
                  alt="Aswin Dev – Full Stack Developer"
                  width={920}
                  height={980}
                  priority
                  quality={70}
                  className=" w-full object-contain opacity-80 saturate-125 drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
                />
                {/* Bottom fade (hides harsh PNG end) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
