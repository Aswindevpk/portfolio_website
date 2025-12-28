import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import Reveal from './Reveal';

type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  email: string;
  links: FooterLink[];
};

export default function Footer({ email, links }: FooterProps) {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: <FaGithub className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin className="h-5 w-5" />
    },
    {
      name: 'Email',
      href: `mailto:${email}`,
      icon: <FaEnvelope className="h-5 w-5" />
    }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer id="contact" className="border-t border-foreground/10 bg-background/50 backdrop-blur-lg " >
      <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16 ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand and social */}
          <div className="space-y-6">
            <Link href="/" className="text-xl font-bold text-foreground">
              ASWIN
            </Link>
            <p className="text-sm text-foreground/70">
              Building digital experiences that matter. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-accent transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Stay Updated</h3>
            <p className="mt-4 text-sm text-foreground/70">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-foreground/20 bg-background/50 px-4 py-2 text-sm text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-r-md bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Aswin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
