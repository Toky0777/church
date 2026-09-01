import { HandHeart, Megaphone, HeartHandshake } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { ProgressBar } from "@/components/ProgressBar";
import { StepTracker } from "@/components/StepTracker";
import { Statistic } from "@/components/Statistic";
import { ProjectCard } from "@/components/ProjectCard";
import { NeedCard } from "@/components/NeedCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PlaceholderTile } from "@/components/PlaceholderTile";
import { MissionSplit } from "@/components/MissionSplit";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { SectionQuestion } from "@/components/SectionQuestion";
import { project, needs, testimonials } from "@/lib/placeholder-data";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero
          imageSrc="/img/fond.jpeg"
          imageAlt="Chantier de la nouvelle église d'Antsonjobe"
          title={["26 ans de foi.", "Une nouvelle maison."]}
          subtitle="Pendant plus de 26 ans, Antsonjobe a grandi dans une église en bois. Aujourd'hui, une nouvelle génération construit la suite de cette histoire."
          primaryCta={{ href: "/le-projet", label: "Découvrir le projet" }}
          secondaryCta={{ href: "/le-chantier", label: "Suivre la construction" }}
        />

        <div className="mx-auto max-w-content space-y-24 px-6 py-24">
          {/* 26 ans en quelques secondes */}
          <section className="space-y-8">
            <h2 className="max-w-md font-display text-3xl sm:text-4xl">
              26 ans en quelques secondes
            </h2>
            <Timeline
              items={[
                { label: "2000", description: "La communauté grandit." },
                { label: "26 années", description: "Une génération après l'autre." },
                { label: "Aujourd'hui", description: "La nouvelle construction commence." },
                { label: "Demain", description: "Une maison pour les générations futures." },
              ]}
            />
          </section>

          {/* Storytelling */}
          <section className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">
                Ce n&rsquo;est pas seulement une construction.
              </h2>
              <p className="mt-4 text-lg text-ink/75">
                Cette église en bois n&rsquo;était peut-être pas grande. Mais
                elle a porté une grande histoire.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <PlaceholderTile src="/img/enfantss.jpeg" alt="Enfants dans l'église" label="enfants" className="col-span-3" width={520} height={400} />
              <PlaceholderTile src="/img/famille.jpeg" alt="Famille dans l'église" label="famille" className="aspect-square" />
              <PlaceholderTile src="/img/ancienne-eglise.jpeg" alt="Ancienne église" label="ancienne église" className="aspect-square" />
            </div>
          </section>

          {/* Le chantier */}
          <section className="space-y-8">
            <h2 className="font-display text-3xl sm:text-4xl">Le chantier</h2>
            <ProgressBar label="Avancement des travaux" percent={project.progressPercent} />
            <StepTracker steps={project.steps} />
            <SectionQuestion
              question="Vous voulez voir où nous en sommes aujourd'hui ?"
              href="/le-chantier"
              label="Voir le chantier"
            />
          </section>

          {/* Où en sommes-nous */}
          <section className="space-y-8 border-y border-stone/25 py-16">
            <h2 className="font-display text-3xl sm:text-4xl">Où en sommes-nous ?</h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <Statistic value="À confirmer" label="Avancement des travaux" />
              <Statistic value="À confirmer" label="Budget total" />
              <Statistic value="À confirmer" label="Déjà financé" />
              <Statistic value="À confirmer" label="Reste à financer" />
            </div>
          </section>

          {/* Chaque contribution compte */}
          <section className="space-y-8">
            <div className="max-w-lg">
              <h2 className="font-display text-3xl sm:text-4xl">
                Chaque contribution compte
              </h2>
              <p className="mt-3 text-ink/70">
                Cette histoire a commencé il y a 26 ans. Aujourd&rsquo;hui,
                nous avons besoin de vous pour écrire la suite.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {needs.map((need) => (
                <NeedCard key={need.id} need={need} />
              ))}
            </div>
          </section>

          {/* Participer autrement */}
          <section className="space-y-8">
            <h2 className="font-display text-3xl sm:text-4xl">
              Vous pouvez participer autrement
            </h2>
            <div className="grid gap-10 sm:grid-cols-3">
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
            </div>
          </section>

          {/* Madagascar / International */}
          {/* <section className="space-y-10">
            <h2 className="max-w-md font-display text-3xl sm:text-4xl">
              Deux pays. Une histoire. Une même mission.
            </h2>
            <MissionSplit />
            <p className="max-w-md text-ink/70">
              La distance géographique ne doit pas empêcher une communauté de
              construire ensemble.
            </p>
          </section> */}
        </div>

        <WhatsAppCTA />

        <div className="mx-auto max-w-content space-y-24 px-6 py-24">
          {/* Témoignages */}
          <section className="space-y-10">
            <h2 className="font-display text-3xl sm:text-4xl">
              Que représente Antsonjobe pour vous ?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
