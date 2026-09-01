// Données d'exemple pour le développement — À REMPLACER par les données réelles.
// Les montants et dates non confirmés restent à `null` : ne jamais inventer
// de chiffre. Les composants doivent afficher un placeholder visible
// (ex. "Montant à confirmer") lorsque la valeur est `null`.

import type {
  Contact,
  ConstructionStep,
  ConstructionUpdate,
  FinancialReport,
  Need,
  NewsArticle,
  Project,
  Testimonial,
} from "./types";

export const constructionSteps: ConstructionStep[] = [
  { id: "projet", name: "Projet", status: "done", order: 1 },
  { id: "autorisations", name: "Autorisations", status: "done", order: 2 },
  { id: "fondations", name: "Fondations", status: "done", order: 3 },
  { id: "structure", name: "Structure", status: "current", order: 4 },
  { id: "maconnerie", name: "Maçonnerie", status: "upcoming", order: 5 },
  { id: "toiture", name: "Toiture", status: "upcoming", order: 6 },
  { id: "electricite", name: "Électricité", status: "upcoming", order: 7 },
  { id: "finitions", name: "Finitions", status: "upcoming", order: 8 },
  { id: "mobilier", name: "Mobilier", status: "upcoming", order: 9 },
  { id: "inauguration", name: "Inauguration", status: "upcoming", order: 10 },
];

export const project: Project = {
  title: "Antsonjobe — La Suite",
  vision:
    "Après plus de 26 ans dans une église en bois, la communauté d'Antsonjobe construit une nouvelle maison pour les générations futures.",
  steps: constructionSteps,
  progressPercent: null, // à confirmer avant mise en ligne
};

// Montants volontairement à `null` : à renseigner avec les chiffres réels
// avant la mise en ligne. Voir §29 du brief — ne jamais inventer de montant.
export const needs: Need[] = [
  { id: "maconnerie", icon: "🧱", label: "Maçonnerie", targetAmountAr: null, fundedAmountAr: null },
  { id: "fenetres", icon: "🪟", label: "Fenêtres", targetAmountAr: null, fundedAmountAr: null },
  { id: "portes", icon: "🚪", label: "Portes", targetAmountAr: null, fundedAmountAr: null },
  { id: "electricite", icon: "⚡", label: "Électricité", targetAmountAr: null, fundedAmountAr: null },
  { id: "toiture", icon: "🏗️", label: "Toiture", targetAmountAr: null, fundedAmountAr: null },
  { id: "mobilier", icon: "🪑", label: "Mobilier", targetAmountAr: null, fundedAmountAr: null },
  { id: "sonorisation", icon: "🎤", label: "Sonorisation", targetAmountAr: null, fundedAmountAr: null },
];

// Témoignages types — à remplacer par de vraies contributions de membres.
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Prénom Nom",
    role: "Membre depuis 1999",
    quote:
      "Cette église en bois a vu grandir mes enfants. J'ai hâte de voir la nouvelle maison accueillir mes petits-enfants.",
  },
  {
    id: "2",
    name: "Prénom Nom",
    role: "Jeune de la communauté",
    quote:
      "Je n'ai connu que l'église en bois. Faire partie de la construction de la nouvelle, c'est écrire la suite de son histoire.",
  },
];

// Journal du chantier — exemples de structure éditoriale (jour, date, étape
// liée). À remplacer par les vraies entrées au fil de l'avancement réel.
export const constructionUpdates: ConstructionUpdate[] = [
  {
    id: "1",
    day: 82,
    date: "2026-08-24",
    title: "La toiture commence",
    description:
      "Après la structure porteuse, les premières charpentes sont posées.",
    mediaUrls: [],
    relatedStepId: "toiture",
  },
  {
    id: "2",
    day: 63,
    date: "2026-08-05",
    title: "Une nouvelle étape franchie",
    description:
      "La structure du bâtiment est désormais achevée sur l'ensemble de sa surface.",
    mediaUrls: [],
    relatedStepId: "structure",
  },
  {
    id: "3",
    day: 47,
    date: "2026-07-20",
    title: "Les murs prennent forme",
    description:
      "La structure porteuse est désormais visible sur l'ensemble du bâtiment.",
    mediaUrls: [],
    relatedStepId: "structure",
  },
];

// Rapports financiers — montants à `null` tant que les chiffres réels ne
// sont pas fournis. Ne jamais estimer ou arrondir à leur place.
export const financialReports: FinancialReport[] = [
  {
    id: "1",
    period: "Août 2026",
    incomeAr: null,
    expensesAr: null,
    balanceAr: null,
  },
];

// Responsables du projet — noms et coordonnées à confirmer avant mise en ligne.
export const contacts: Contact[] = [
  { name: "[Nom à confirmer]", role: "Responsable du projet" },
  { name: "[Nom à confirmer]", role: "Trésorerie" },
];

// Actualités — structure de démonstration. Les vrais articles remplaceront
// ces entrées ; ne pas publier ce contenu tel quel.
export const newsArticles: NewsArticle[] = [
  {
    slug: "premier-article-a-venir",
    title: "[Titre de l'article à venir]",
    category: "Chantier",
    date: "2026-08-24",
    excerpt: "[Résumé de l'article à venir]",
    body: "",
  },
  {
    slug: "deuxieme-article-a-venir",
    title: "[Titre de l'article à venir]",
    category: "International",
    date: "2026-08-10",
    excerpt: "[Résumé de l'article à venir]",
    body: "",
  },
  {
    slug: "troisieme-article-a-venir",
    title: "[Titre de l'article à venir]",
    category: "Témoignages",
    date: "2026-07-28",
    excerpt: "[Résumé de l'article à venir]",
    body: "",
  },
];
