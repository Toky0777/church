import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProgressBar } from "@/components/ProgressBar";
import { StepTracker } from "@/components/StepTracker";
import { ConstructionUpdateCard } from "@/components/ConstructionUpdateCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { SectionQuestion } from "@/components/SectionQuestion";
import { project, constructionUpdates } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Le chantier",
  description:
    "Suivez en direct la progression de la construction de la nouvelle église d'Antsonjobe : étapes, avancement et journal de chantier.",
};

export default function LeChantierPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-20 px-6 py-16">
          <div className="space-y-6">
            <Breadcrumbs items={[{ href: "/le-chantier", label: "Le chantier" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">Le chantier</h1>
            <p className="max-w-lg text-lg text-ink/70">
              Chaque jour, une pierre de plus. Chaque semaine, un pas de plus
              vers la nouvelle maison d&rsquo;Antsonjobe.
            </p>
          </div>

          <section className="space-y-8">
            <ProgressBar label="Avancement des travaux" percent={project.progressPercent} />
            <StepTracker steps={project.steps} />
          </section>

          <section className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-3xl">Journal du chantier</h2>
              <CTA href="/journal" variant="quiet">
                Voir toutes les entrées
              </CTA>
            </div>
            <div>
              {constructionUpdates.map((update) => (
                <ConstructionUpdateCard key={update.id} update={update} />
              ))}
            </div>
          </section>

          <SectionQuestion
            question="Vous voulez comprendre comment votre soutien est utilisé ?"
            href="/transparence"
            label="Voir la transparence financière"
          />
        </div>

        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  );
}
