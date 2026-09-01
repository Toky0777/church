import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { contacts } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe du projet Antsonjobe — La Suite : coordonnées officielles et formulaire de contact.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-16 px-6 py-16">
          <div className="max-w-2xl space-y-6">
            <Breadcrumbs items={[{ href: "/contact", label: "Contact" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">Contact</h1>
            <p className="text-lg text-ink/70">
              Une question sur le projet ou envie d&rsquo;aider autrement ?
              Écrivez-nous.
            </p>
          </div>

          <div className="grid gap-16 sm:grid-cols-[1fr_1.2fr]">
            <section className="space-y-8">
              <div>
                <h2 className="font-display text-2xl">Coordonnées</h2>
                <dl className="mt-4 space-y-2 text-ink/70">
                  {/* <div className="flex gap-2">
                    <dt className="text-ink/50">Email :</dt>
                    <dd>[Email officiel à confirmer]</dd>
                  </div> */}
                  <div className="flex gap-2">
                    <dt className="text-ink/50">WhatsApp :</dt>
                    <dd>+261 34 01 450 52</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-ink/50">Lieu :</dt>
                    <dd>Antsonjobe, Madagascar</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="font-display text-2xl">Responsables</h2>
                <ul className="mt-4 space-y-3">
                  {contacts.map((contact) => (
                    <li key={contact.name}>
                      <p className="font-medium text-ink/85">{contact.name}</p>
                      <p className="text-sm text-ink/55">{contact.role}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
