'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-colors hover:text-foreground ${
      pathname === href ? 'text-foreground' : 'text-foreground/70'
    }`;

  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.22em] text-foreground/70 transition-colors hover:text-foreground"
        >
          ASWIN
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link className={linkClass('/#what')} href="/#what">
            What I do
          </Link>
          <Link className={linkClass('/#work')} href="/#work">
            Work
          </Link>
          <Link className={linkClass('/about')} href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
