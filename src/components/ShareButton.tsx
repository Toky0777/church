"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.origin : "";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Antsonjobe — La Suite",
          text: "26 ans de foi. Une nouvelle maison. Découvrez le projet.",
          url,
        });
        return;
      } catch {
        // L'utilisateur a annulé le partage natif — on retombe sur la copie.
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-sm border border-ink/70 px-6 py-3.5 text-sm font-semibold tracking-wide hover:border-ink hover:bg-ink/5"
    >
      {copied ? <Check size={16} aria-hidden="true" /> : <LinkIcon size={16} aria-hidden="true" />}
      {copied ? "Lien copié" : "Copier le lien à partager"}
    </button>
  );
}
