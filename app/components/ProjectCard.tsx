import Reveal from './Reveal';
import { FiExternalLink, FiGithub, FiClock } from 'react-icons/fi';
import Link from 'next/link';

type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  isComingSoon?: boolean;
};

export default function ProjectCard({ 
  name, 
  description, 
  stack, 
  demoUrl, 
  githubUrl,
  isComingSoon = false 
}: ProjectCardProps) {
  return (
    <Reveal>
      <div className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-all hover:bg-foreground/[0.05] hover:shadow-lg ${isComingSoon ? 'opacity-70' : ''}`}>
        {isComingSoon && (
          <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <FiClock className="h-3 w-3" />
            <span>Coming Soon</span>
          </div>
        )}
        
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
        </div>

        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {name}
            </h3>
            <div className="flex gap-2">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/30 text-foreground/60 transition-colors hover:border-foreground/25 hover:text-foreground"
                  aria-label={`View ${name} on GitHub`}
                >
                  <FiGithub className="h-4 w-4" />
                </a>
              )}
              {demoUrl && (
                <a 
                  href={demoUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-background/30 text-foreground/60 transition-colors hover:border-foreground/25 hover:text-foreground"
                  aria-label={`View ${name} demo`}
                >
                  <FiExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 text-sm leading-7 text-foreground/70 sm:text-base">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-foreground/10 bg-background/40 px-3 py-1 text-xs font-medium text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
