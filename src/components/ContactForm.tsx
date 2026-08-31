"use client";

import { useState, type FormEvent } from "react";

/**
 * Formulaire prêt à être connecté à un service d'envoi réel (API route,
 * service tiers…). Pour l'instant, la soumission est gérée côté client
 * uniquement — aucun envoi n'est simulé comme fonctionnel tant que le
 * back-end n'est pas branché.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // Honeypot anti-spam : ce champ doit rester vide pour un humain.
    if (formData.get("site_web")) {
      return;
    }

    // TODO : brancher sur le service d'envoi réel une fois disponible.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="border border-accent/40 bg-accent/10 p-6 text-accent-dark">
        Merci pour votre message. Nous reviendrons vers vous dès que
        possible.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="site_web"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink/80">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full border border-stone/40 bg-bone px-4 py-2.5 focus:border-ink"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full border border-stone/40 bg-bone px-4 py-2.5 focus:border-ink"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-ink/80">
          Pays
        </label>
        <input
          id="country"
          name="country"
          type="text"
          className="mt-1.5 w-full border border-stone/40 bg-bone px-4 py-2.5 focus:border-ink"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full border border-stone/40 bg-bone px-4 py-2.5 focus:border-ink"
        />
      </div>

      <button
        type="submit"
        className="rounded-sm bg-ink px-6 py-3.5 text-sm font-semibold tracking-wide text-bone hover:bg-accent-dark"
      >
        Envoyer le message
      </button>
    </form>
  );
}
