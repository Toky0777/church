import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsFilter } from "@/components/NewsFilter";
import { newsArticles } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Toutes les actualités du projet Antsonjobe — La Suite : chantier, témoignages, vie de l'église, International et Madagascar.",
};

export default function ActualitesPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-content space-y-12 px-6 py-16">
          <div className="max-w-2xl space-y-6">
            <Breadcrumbs items={[{ href: "/actualites", label: "Actualités" }]} />
            <h1 className="font-display text-4xl sm:text-5xl">Actualités</h1>
            <p className="text-lg text-ink/70">
              Le chantier, la vie de la communauté, la mobilisation en
              International et à Madagascar — tout ce qui fait avancer cette
              histoire.
            </p>
          </div>

          <NewsFilter articles={newsArticles} />
        </div>
      </main>

      <Footer />
    </>
  );
}
