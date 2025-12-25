import Reveal from './Reveal';

type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  email: string;
  links: FooterLink[];
};

export default function Footer({ email, links }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-foreground/10 py-12">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Contact</p>
              <a
                className="mt-3 inline-flex text-base text-foreground/70 transition-colors hover:text-foreground"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 text-xs text-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
