import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaCode, FaRocket, FaTools } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiReact, SiVite, SiGithubactions } from "react-icons/si";
import Reveal from "./Reveal";

type AboutShowcaseProps = {
  name: string;
  headline: string;
  bio: string;
};

export default function AboutShowcase({ name, headline, bio }: AboutShowcaseProps) {
  const skills = [
    { name: "React", icon: <SiReact className="h-5 w-5" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5" /> },
    { name: "Vite", icon: <SiVite className="h-5 w-5" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="h-5 w-5" /> },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Aswindevpk",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aswindevpk/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[380px] lg:mx-0">
              <div className="pointer-events-none absolute -inset-10 opacity-70">
                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-foreground/[0.03]">
                <Image
                  src="/aswin-image.png"
                  alt={`Portrait of ${name}`}
                  quality={50}
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
              <p className="text-xs font-medium tracking-[0.18em] text-foreground/60">ABOUT ME</p>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {headline}
              </h2>

              <div className="mt-8 space-y-6">
                <p className="text-foreground/80 leading-relaxed">{bio}</p>
                
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <FaTools className="h-4 w-4" />
                    <span>Tech Stack</span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.02] px-4 py-2 text-sm font-medium text-foreground/80"
                      >
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <FaRocket className="h-4 w-4" />
                    <span>Connect with me</span>
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.02] text-foreground/70 transition-colors hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground"
                        aria-label={`Visit my ${link.name}`}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}