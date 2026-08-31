import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Timeline } from "@/components/Timeline";
import { PlaceholderTile } from "@/components/PlaceholderTile";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTA } from "@/components/CTA";
import { testimonials } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Depuis plus de 26 ans, la communauté d'Antsonjobe a grandi dans une église en bois. Découvrez l'histoire qui donne naissance à sa nouvelle maison.",
};

const usages = [
  "Cultes",
  "Prières",
  "Baptêmes",
  "Mariages",
  "Rencontres",
  "Éducation religieuse",
];

export default function NotreHistoirePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-24 px-6 py-16">
          <div className="max-w-2xl space-y-6">
            <Breadcrumbs items={[{ href: "/notre-histoire", label: "Notre histoire" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">
              26 années d&rsquo;histoire qui donnent naissance à une nouvelle
              génération.
            </h1>
            <p className="text-lg text-ink/70">
              Pendant plus de 26 ans, la communauté d&rsquo;Antsonjobe a
              utilisé une église en bois. Ce n&rsquo;était pas seulement un
              bâtiment : c&rsquo;était le lieu où plusieurs générations ont
              grandi dans leur foi.
            </p>
          </div>

          {/* Ce que l'église en bois a porté */}
          <section className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="font-display text-3xl">
                Un lieu de vie, pas seulement un bâtiment
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-ink/75">
                {usages.map((usage) => (
                  <li key={usage}>{usage}</li>
                ))}
              </ul>
              <p className="mt-6 text-ink/70">
                De souvenirs familiaux en souvenirs familiaux, c&rsquo;est la
                croissance spirituelle de plusieurs générations qui s&rsquo;est
                jouée entre ces murs de bois.
              </p>
            </div>
            <PlaceholderTile label="ancienne église en bois" className="aspect-[4/3]" />
          </section>

          {/* Timeline */}
          <section className="space-y-8">
            <h2 className="font-display text-3xl">26 ans en quelques étapes</h2>
            <Timeline
              items={[
                { label: "1999", description: "La communauté grandit." },
                { label: "26 années", description: "Une génération après l'autre." },
                { label: "Aujourd'hui", description: "La nouvelle construction commence." },
                { label: "Demain", description: "Une maison pour les générations futures." },
              ]}
            />
          </section>

          {/* Galerie d'archives */}
          <section className="space-y-6">
            <h2 className="font-display text-3xl">Des visages, une histoire</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <PlaceholderTile label="enfants" />
              <PlaceholderTile label="culte" />
              <PlaceholderTile label="baptême" />
              <PlaceholderTile label="famille" />
            </div>
          </section>

          {/* Témoignage */}
          <section className="space-y-8 border-t border-stone/25 pt-16">
            <h2 className="font-display text-3xl">
              Que représente Antsonjobe pour vous ?
            </h2>
            <TestimonialCard testimonial={testimonials[0]} />
          </section>

          <section className="space-y-6 border-t border-stone/25 pt-16">
            <p className="font-display text-2xl italic text-ink/85">
              Hier, une église en bois. Aujourd&rsquo;hui, une nouvelle maison
              pour demain.
            </p>
            <CTA href="/le-projet">Découvrir le projet</CTA>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
