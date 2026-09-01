import { HeartHandshake, Megaphone, HandHeart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Timeline } from "@/components/Timeline";
import { ProgressBar } from "@/components/ProgressBar";
import { Statistic } from "@/components/Statistic";
import { StepTracker } from "@/components/StepTracker";
import { ProjectCard } from "@/components/ProjectCard";
import { NeedCard } from "@/components/NeedCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ConstructionUpdateCard } from "@/components/ConstructionUpdateCard";
import { Gallery } from "@/components/Gallery";
import { FinancialReportCard } from "@/components/FinancialReportCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { SectionQuestion } from "@/components/SectionQuestion";
import { constructionSteps } from "@/lib/placeholder-data";

const sampleNeed = {
  id: "toiture",
  icon: "🏗️",
  label: "Toiture",
  targetAmountAr: 12000000,
  fundedAmountAr: 4500000,
};

const sampleNeedUnconfirmed = {
  id: "mobilier",
  icon: "🪑",
  label: "Mobilier",
  targetAmountAr: null,
  fundedAmountAr: null,
};

const sampleTestimonial = {
  id: "1",
  name: "Prénom Nom",
  role: "Membre depuis 2000",
  quote:
    "Cette église en bois a vu grandir mes enfants. J'ai hâte de voir la nouvelle maison accueillir mes petits-enfants.",
};

const sampleUpdate = {
  id: "1",
  day: 47,
  date: "2026-08-20",
  title: "Les murs prennent forme",
  description:
    "La structure porteuse est désormais visible sur l'ensemble du bâtiment.",
  mediaUrls: [],
};

const sampleReport = {
  id: "1",
  period: "Août 2026",
  incomeAr: null,
  expensesAr: null,
  balanceAr: null,
};

export default function StyleguidePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero
          imageAlt="Chantier de la nouvelle église d'Antsonjobe"
          title={["26 ans de foi.", "Une nouvelle maison."]}
          subtitle="Pendant plus de 26 ans, Antsonjobe a grandi dans une église en bois. Aujourd'hui, une nouvelle génération construit la suite de cette histoire."
          primaryCta={{ href: "/le-projet", label: "Découvrir le projet" }}
          secondaryCta={{ href: "/le-chantier", label: "Suivre la construction" }}
        />

        <div className="mx-auto max-w-content space-y-20 px-6 py-20">
          <section>
            <Breadcrumbs items={[{ href: "/styleguide", label: "Composants" }]} />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">26 ans en quelques secondes</h2>
            <Timeline
              items={[
                { label: "2000", description: "La communauté grandit." },
                { label: "26 années", description: "Une génération après l'autre." },
                { label: "Aujourd'hui", description: "La nouvelle construction commence." },
                { label: "Demain", description: "Une maison pour les générations futures." },
              ]}
            />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">Le chantier</h2>
            <ProgressBar label="Avancement des travaux" percent={42} />
            <StepTracker steps={constructionSteps} />
          </section>

          <section className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Statistic value="42 %" label="Avancement des travaux" />
            <Statistic value="Montant à confirmer" label="Budget total" />
            <Statistic value="Montant à confirmer" label="Déjà financé" />
            <Statistic value="Montant à confirmer" label="Reste à financer" />
          </section>

          <section className="grid gap-8 sm:grid-cols-3">
            <ProjectCard
              icon={HandHeart}
              title="Prier"
              description="Priez pour les travaux, les ouvriers, les finances et la mission future de cette église."
            />
            <ProjectCard
              icon={Megaphone}
              title="Partager"
              description="Faites connaître l'histoire d'Antsonjobe autour de vous."
            />
            <ProjectCard
              icon={HeartHandshake}
              title="Soutenir"
              description="Contribuez au projet selon vos possibilités."
            />
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <NeedCard need={sampleNeed} />
            <NeedCard need={sampleNeedUnconfirmed} />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">Journal du chantier</h2>
            <ConstructionUpdateCard update={sampleUpdate} />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">Galerie</h2>
            <Gallery images={[]} />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">Témoignage</h2>
            <TestimonialCard testimonial={sampleTestimonial} />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl">Transparence</h2>
            <FinancialReportCard report={sampleReport} />
          </section>

          <SectionQuestion
            question="Vous voulez voir où nous en sommes aujourd'hui ?"
            href="/le-chantier"
            label="Voir le chantier"
          />
        </div>

        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  );
}
