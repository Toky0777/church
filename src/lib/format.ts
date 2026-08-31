/**
 * Formate un montant en Ariary. Retourne un texte de substitution explicite
 * lorsque la donnée n'est pas encore confirmée, plutôt que d'afficher 0 ou
 * une valeur inventée.
 */
export function formatAr(amount: number | null): string {
  if (amount === null) return "Montant à confirmer";
  return `${new Intl.NumberFormat("fr-FR").format(amount)} Ar`;
}

/**
 * Formate un pourcentage de progression, avec le même principe de
 * transparence sur les données manquantes.
 */
export function formatPercent(percent: number | null): string {
  if (percent === null) return "À confirmer";
  return `${Math.round(percent)} %`;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
