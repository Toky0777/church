import type { Metadata } from "next";
import { HandHeart, Megaphone, HeartHandshake, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { ShareButton } from "@/components/ShareButton";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Participer",
  description:
    "Priez, partagez ou soutenez la construction de la nouvelle église d'Antsonjobe — chaque forme de participation compte.",
};

export default function ParticiperPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-20 px-6 py-16">
          <div className="max-w-2xl space-y-6">
            <Breadcrumbs items={[{ href: "/participer", label: "Participer" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">
              Vous pouvez faire partie de l&rsquo;histoire.
            </h1>
            <p className="text-lg text-ink/70">
              Chaque forme de participation compte, avec ou sans capacité
              financière.
            </p>
          </div>

          <section className="grid gap-14 sm:grid-cols-2">
            {/* Prière */}
            <div className="border-l-2 border-wood/60 pl-6">
              <HandHeart size={24} className="text-wood" aria-hidden="true" />
              <h2 className="mt-3 font-display text-2xl">Prier</h2>
              <p className="mt-2 text-ink/70">
                Priez pour les travaux, les ouvriers, les finances et la
                mission future de cette église.
              </p>
            </div>

            {/* Partage */}
            <div className="border-l-2 border-wood/60 pl-6">
              <Megaphone size={24} className="text-wood" aria-hidden="true" />
              <h2 className="mt-3 font-display text-2xl">Partager</h2>
              <p className="mt-2 text-ink/70">
                Faites connaître l&rsquo;histoire d&rsquo;Antsonjobe autour de
                vous.
              </p>
              <div className="mt-4">
                <ShareButton />
              </div>
            </div>

            {/* Soutien */}
            <div className="border-l-2 border-wood/60 pl-6">
              <HeartHandshake size={24} className="text-wood" aria-hidden="true" />
              <h2 className="mt-3 font-display text-2xl">Soutenir</h2>
              <p className="mt-2 text-ink/70">
                Contribuez au projet selon vos possibilités.
              </p>
              <p className="mt-4 text-sm text-ink/45">
                Lien de contribution officiel à venir.
              </p>
            </div>

            {/* Contact */}
            <div className="border-l-2 border-wood/60 pl-6">
              <Mail size={24} className="text-wood" aria-hidden="true" />
              <h2 className="mt-3 font-display text-2xl">Contact</h2>
              <p className="mt-2 text-ink/70">
                Une question, une proposition d&rsquo;aide ? Écrivez-nous.
              </p>
              <div className="mt-4">
                <CTA href="/contact" variant="quiet">
                  Nous contacter
                </CTA>
              </div>
            </div>
          </section>
        </div>

        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  );
}
