import type { Metadata } from "next";
import { BookOpen, Users, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCard } from "@/components/ProjectCard";
import { StepTracker } from "@/components/StepTracker";
import { NeedCard } from "@/components/NeedCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { SectionQuestion } from "@/components/SectionQuestion";
import { project, needs } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Le projet",
  description:
    "Vision, architecture et étapes de la construction de la nouvelle église d'Antsonjobe, à Madagascar.",
};

export default function LeProjetPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-24 px-6 py-16">
          <div className="max-w-2xl space-y-6">
            <Breadcrumbs items={[{ href: "/le-projet", label: "Le projet" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">Le projet</h1>
            <p className="text-lg text-ink/70">{project.vision}</p>
          </div>

          {/* Vision / ce que la nouvelle église permettra */}
          <section className="space-y-8">
            <h2 className="font-display text-3xl">
              Ce que cette nouvelle église permettra
            </h2>
            <div className="grid gap-10 sm:grid-cols-3">
              <ProjectCard
                icon={Users}
                title="Accueillir la communauté"
                description="Un espace pensé pour rassembler la communauté d'Antsonjobe dans de bonnes conditions, pour les cultes comme pour les grands rassemblements."
              />
              <ProjectCard
                icon={BookOpen}
                title="Transmettre la foi"
                description="Un lieu durable pour l'éducation religieuse et l'accompagnement des nouvelles générations."
              />
              <ProjectCard
                icon={Sparkles}
                title="Préparer l'avenir"
                description="Une maison construite pour durer, capable de porter la mission de l'église pour les décennies à venir."
              />
            </div>
          </section>

          {/* Architecture / capacité — données à confirmer */}
          <section className="grid gap-10 border-y border-stone/25 py-16 sm:grid-cols-3">
            <div>
              <p className="text-sm text-ink/55">Capacité</p>
              <p className="mt-1 font-display text-2xl">À confirmer</p>
            </div>
            <div>
              <p className="text-sm text-ink/55">Surface</p>
              <p className="mt-1 font-display text-2xl">À confirmer</p>
            </div>
            <div>
              <p className="text-sm text-ink/55">Inauguration prévue</p>
              <p className="mt-1 font-display text-2xl">À confirmer</p>
            </div>
          </section>

          {/* Étapes */}
          <section className="space-y-6">
            <h2 className="font-display text-3xl">Les grandes étapes</h2>
            <StepTracker steps={project.steps} />
            <SectionQuestion
              question="Vous voulez suivre l'avancement en détail ?"
              href="/le-chantier"
              label="Voir le chantier"
            />
          </section>

          {/* Besoins */}
          <section className="space-y-8">
            <h2 className="font-display text-3xl">Les besoins du projet</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {needs.map((need) => (
                <NeedCard key={need.id} need={need} />
              ))}
            </div>
          </section>
        </div>

        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  );
}
