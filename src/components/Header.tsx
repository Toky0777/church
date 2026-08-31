"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CTA } from "./CTA";

const links = [
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/le-chantier", label: "Le chantier" },
  { href: "/actualites", label: "Actualités" },
  { href: "/transparence", label: "Transparence" },
  { href: "/participer", label: "Participer" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone/25 bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg" onClick={() => setOpen(false)}>
          Antsonjobe <span className="text-accent-dark">— La Suite</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTA href="/participer" variant="primary" className="px-5 py-2.5">
            Soutenir le projet
          </CTA>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-stone/25 bg-bone px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink/85"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CTA href="/participer" variant="primary" className="mt-6 w-full">
            Soutenir le projet
          </CTA>
        </nav>
      )}
    </header>
  );
}
