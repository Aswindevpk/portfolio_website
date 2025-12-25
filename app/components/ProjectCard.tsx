import Reveal from './Reveal';

type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
};

export default function ProjectCard({ name, description, stack }: ProjectCardProps) {
  return (
    <Reveal>
      <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors hover:bg-foreground/[0.05]">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
        </div>

        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {name}
            </h3>
            <div className="h-9 w-9 shrink-0 rounded-full border border-foreground/15 bg-background/30 transition-colors group-hover:border-foreground/25" />
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
