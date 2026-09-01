import Link from "next/link";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Le projet",
    links: [
      { href: "/notre-histoire", label: "Notre histoire" },
      { href: "/le-projet", label: "Le projet" },
      { href: "/le-chantier", label: "Le chantier" },
      { href: "/journal", label: "Journal du chantier" },
      { href: "/transparence", label: "Transparence" },
    ],
  },
  {
    title: "Suivre",
    links: [
      { href: "/actualites", label: "Actualités" },
      { href: "/participer", label: "Rejoindre WhatsApp" },
    ],
  },
  {
    title: "Contact",
    links: [{ href: "/contact", label: "Nous écrire" }],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone/25 bg-sand/40">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="font-display text-xl">Antsonjobe — La Suite</p>
            <p className="max-w-xs text-sm text-ink/70">
              26 ans de foi. Une nouvelle maison. Des générations à venir.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <p className="text-sm font-semibold text-ink/90">{column.title}</p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/70 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-stone/25 pt-6 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fiangonana Adventiste Antsonjobe</p>
          <p>Madagascar · International</p>
        </div>
      </div>
    </footer>
  );
}
