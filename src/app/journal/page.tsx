import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConstructionUpdateCard } from "@/components/ConstructionUpdateCard";
import { SectionQuestion } from "@/components/SectionQuestion";
import { constructionUpdates } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Journal du chantier",
  description:
    "Toutes les entrées du journal de construction de la nouvelle église d'Antsonjobe, jour après jour.",
};

export default function JournalPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-16 px-6 py-16">
          <div className="max-w-2xl space-y-6">
            <Breadcrumbs items={[{ href: "/journal", label: "Journal du chantier" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">
              Journal du chantier
            </h1>
            <p className="text-lg text-ink/70">
              Chaque étape franchie, racontée au fil des jours. Une archive
              vivante de la construction de la nouvelle église
              d&rsquo;Antsonjobe.
            </p>
          </div>

          <section>
            {constructionUpdates.map((update) => (
              <ConstructionUpdateCard key={update.id} update={update} />
            ))}
          </section>

          <SectionQuestion
            question="Vous voulez comprendre comment votre soutien est utilisé ?"
            href="/transparence"
            label="Voir la transparence financière"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
