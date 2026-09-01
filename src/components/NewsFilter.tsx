"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { NewsCard } from "./NewsCard";
import type { NewsArticle, NewsCategory } from "@/lib/types";

interface NewsFilterProps {
  articles: NewsArticle[];
}

const categories: NewsCategory[] = [
  "Chantier",
  "Témoignages",
  "Vie de l'église",
  "International",
  "Madagascar",
  "Financement",
];

export function NewsFilter({ articles }: NewsFilterProps) {
  const [active, setActive] = useState<NewsCategory | "Toutes">("Toutes");

  const filtered =
    active === "Toutes" ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrer les actualités par catégorie"
      >
        <button
          type="button"
          onClick={() => setActive("Toutes")}
          aria-pressed={active === "Toutes"}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm transition-colors",
            active === "Toutes"
              ? "border-ink bg-ink text-bone"
              : "border-stone/40 text-ink/70 hover:border-ink/60",
          )}
        >
          Toutes
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              active === category
                ? "border-ink bg-ink text-bone"
                : "border-stone/40 text-ink/70 hover:border-ink/60",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-3">
          {filtered.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-ink/60">Aucun article dans cette catégorie pour le moment.</p>
      )}
    </div>
  );
}
