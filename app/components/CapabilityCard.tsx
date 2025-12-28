import { ReactElement } from 'react';
import Reveal from './Reveal';
import { LucideIcon } from 'lucide-react';
import { 
  FaReact, 
  FaServer, 
  FaLightbulb,
  FaCode,
  FaDatabase,
  FaMobile,
  FaPalette,
  FaRocket
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiFigma,
  SiFramer,
  SiStorybook
} from 'react-icons/si';

type CapabilityCardProps = {
  title: string;
  description: string;
  icon: ReactElement;
  tools: string[];
};

const iconMap = {
  'React': <FaReact className="h-4 w-4" />,
  'Next.js': <SiNextdotjs className="h-4 w-4" />,
  'TypeScript': <SiTypescript className="h-4 w-4" />,
  'Tailwind CSS': <SiTailwindcss className="h-4 w-4" />,
  'Styled Components': <FaPalette className="h-4 w-4" />,
  'Supabase': <SiSupabase className="h-4 w-4" />,
  'PostgreSQL': <SiPostgresql className="h-4 w-4" />,
  'Node.js': <SiNodedotjs className="h-4 w-4" />,
  'Figma': <SiFigma className="h-4 w-4" />,
  'Framer': <SiFramer className="h-4 w-4" />,
  'Design Systems': <SiStorybook className="h-4 w-4" />,
  'UX Decisions': <FaLightbulb className="h-4 w-4" />,
  'Shipping': <FaRocket className="h-4 w-4" />,
  'Iteration': <FaServer className="h-4 w-4" />
};

export default function CapabilityCard({
  title,
  description,
  icon,
  tools,
}: CapabilityCardProps) {
  return (
    <Reveal>
      <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-all duration-300 hover:border-accent/20 hover:bg-background/50 hover:shadow-lg h-full">
        {/* Subtle glow effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10" />
        </div>

        <div className="relative">
          {/* Header with icon */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/50 text-accent shadow-sm ring-1 ring-foreground/5">
              {icon}
            </div>
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            {description}
          </p>

          {/* Tools with icons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:bg-background/80 hover:text-foreground"
              >
                {iconMap[tool] || <FaCode className="h-3 w-3" />}
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}