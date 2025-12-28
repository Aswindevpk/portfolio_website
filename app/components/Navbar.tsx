'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import {
  Briefcase,
  Sparkles,
  User,
  Download,
  MessageCircle,
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const read = () => setHash(window.location.hash || '');
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
  }, []);

  const activeKey = useMemo(() => {
    if (pathname === '/about') return '/about';
    if (pathname === '/') {
      if (hash === '#what') return '/#what';
      if (hash === '#projects') return '/#projects';
      return '/';
    }
    return pathname;
  }, [hash, pathname]);

  const linkClass = (href: string) =>
    `relative flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition ${
      activeKey === href
        ? 'bg-foreground/10 text-foreground'
        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
    }`;

  return (
    <header className="fixed top-5 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between gap-2 rounded-full border border-foreground/15 bg-background/70 p-2 backdrop-blur-xl shadow-xl shadow-black/25">
          {/* Logo */}
          <Link
            href="/"
            className="group flex h-10 items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:bg-foreground/10 hover:shadow-lg hover:shadow-accent/10"
          >
            <span className="relative inline-block overflow-hidden">
              <span className="block transition-transform duration-300 group-hover:translate-y-[-100%]">
                ASWIN
              </span>
              <span className="absolute left-0 top-full block text-accent transition-transform duration-300 group-hover:translate-y-[-100%]">
                HOME
              </span>
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent/80"></span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-2 sm:flex">
            <Link className={linkClass('/#what')} href="/#what">
              <Sparkles className="h-4 w-4 opacity-70" />
              What I do
            </Link>

            <Link className={linkClass('/#projects')} href="/#projects">
              <Briefcase className="h-4 w-4 opacity-70" />
              Projects
            </Link>

            <Link className={linkClass('/about')} href="/about">
              <User className="h-4 w-4 opacity-70" />
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Resume */}
            <a
              href="https://docs.google.com/document/d/1ZfFOXRHLld9hJHb9yFR9JTMw9vLqSdH1xpqv2EfxpSM/edit?usp=drive_link"
              download
              className="hidden h-10 items-center gap-2 rounded-full border border-foreground/15 bg-background/40 px-4 text-sm font-medium text-foreground/80 transition hover:bg-foreground/5 sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>

            {/* Primary CTA */}
            <a
              href="https://www.linkedin.com/in/aswindevpk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-full border-0 bg-white px-4 text-sm font-semibold text-violet-600 transition hover:bg-white/90 hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
