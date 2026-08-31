import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Statistic } from "@/components/Statistic";
import { FinancialReportCard } from "@/components/FinancialReportCard";
import { SectionQuestion } from "@/components/SectionQuestion";
import { financialReports, contacts } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Transparence",
  description:
    "Budget, dépenses et financement de la construction de la nouvelle église d'Antsonjobe : notre engagement de transparence.",
};

export default function TransparencePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-20 px-6 py-16">
          <div className="max-w-2xl space-y-6">
            <Breadcrumbs items={[{ href: "/transparence", label: "Transparence" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">
              Votre confiance est aussi importante que votre soutien.
            </h1>
            <p className="text-lg text-ink/70">
              Nous nous engageons à publier régulièrement l&rsquo;état du
              budget, des dépenses et de l&rsquo;avancement financier du
              projet.
            </p>
          </div>

          <section className="grid grid-cols-2 gap-8 border-y border-stone/25 py-12 sm:grid-cols-4">
            <Statistic value="À confirmer" label="Avancement des travaux" />
            <Statistic value="À confirmer" label="Budget total" />
            <Statistic value="À confirmer" label="Déjà financé" />
            <Statistic value="À confirmer" label="Reste à financer" />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">Rapports financiers</h2>
            <div className="space-y-4">
              {financialReports.map((report) => (
                <FinancialReportCard key={report.id} report={report} />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">Responsables du projet</h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {contacts.map((contact) => (
                <li key={contact.name} className="border-l-2 border-wood/60 pl-5">
                  <p className="font-display text-lg">{contact.name}</p>
                  <p className="text-sm text-ink/60">{contact.role}</p>
                </li>
              ))}
            </ul>
          </section>

          <SectionQuestion
            question="Vous voulez faire partie de la suite de cette histoire ?"
            href="/participer"
            label="Voir comment participer"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
