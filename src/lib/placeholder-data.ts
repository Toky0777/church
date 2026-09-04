import type {
  Budget,
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
  progressPercent: 18,
};

export const budget: Budget = {
  totalAr: 253_134_227,
  fundedAr: 47_026_376,
  documentUrl: "/devis/devis.pdf",
};

// Montants volontairement à `null` : à renseigner avec les chiffres réels
// avant la mise en ligne. Voir §29 du brief — ne jamais inventer de montant.
export const needs: Need[] = [
  // "Maçonnerie et ravalement" du devis (brique) — stade actuel du chantier.
  { id: "maconnerie", icon: "🧱", label: "Maçonnerie", targetAmountAr: 42_032_100, fundedAmountAr: null },
  // "Menuiserie en aluminium" (fenêtres) + "Menuiserie métallique" (grilles
  // de protection des fenêtres) du devis.
  { id: "fenetres", icon: "🪟", label: "Fenêtres", targetAmountAr: 15_086_500, fundedAmountAr: null },
  // "Menuiserie en bois" (portes) du devis.
  { id: "portes", icon: "🚪", label: "Portes", targetAmountAr: 3_942_000, fundedAmountAr: null },
  // "Électricité" du devis.
  { id: "electricite", icon: "⚡", label: "Électricité", targetAmountAr: 1_158_500, fundedAmountAr: null },
  // "Couverture du bâtiment" (charpente + tôle) du devis.
  { id: "toiture", icon: "🏗️", label: "Toiture", targetAmountAr: 29_093_444, fundedAmountAr: null },
  // Pas de ligne dédiée dans ce devis — à chiffrer séparément.
  { id: "mobilier", icon: "🪑", label: "Mobilier", targetAmountAr: null, fundedAmountAr: null },
  // Pas de ligne dédiée dans ce devis — à chiffrer séparément.
  { id: "sonorisation", icon: "🎤", label: "Sonorisation", targetAmountAr: null, fundedAmountAr: null },
];

// Témoignages types — à remplacer par de vraies contributions de membres.
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Toky Fitiavana Enoka RAMANANJARA",
    role: "Membre depuis l'enfance",
    photoUrl: "/img/toky.jpeg",
    quote:
      "Depuis mes 8 ans, cette église accompagne ma vie. C'est ici que j'ai été baptisé, que j'ai rencontré ma femme et que nous avons commencé notre famille. Aujourd'hui, nous bâtissons l'église où nos enfants grandiront à leur tour.",
  },
  {
    id: "2",
    name: "Priscilla Fifaliana RASOANAIVO",
    role: "Jeune de la communauté",
    photoUrl: "/img/priscilla.jpeg",
    quote:
      "Je suis née adventiste et cette église a accompagné toute mon enfance. Elle a entendu mes prières et vu grandir ma foi. Aujourd'hui, je veux participer à écrire le prochain chapitre de son histoire.",
  },
  {
    id: "3",
    name: "Manoa Fifaliana RAFANOMEZANTSOA",
    role: "Loholona",
    photoUrl: "/img/manoa.jpeg",
    quote:
      "Depuis mon enfance, j'ai beaucoup donné à cette église. Désigné Loholona à seulement 24 ans, j'y ai énormément appris. Aujourd'hui, nous construisons un héritage pour les générations qui viennent.",
  },
  {
    id: "4",
    name: "Harmella Raphaëlla",
    role: "Membre de la chorale",
    photoUrl: "/img/harmella.jpeg",
    quote:
      "C'était d'abord l'église de mon mari. Après notre mariage, les membres m'ont accueillie comme une famille. Aujourd'hui, avec notre fils, je suis heureuse de participer à la construction de notre nouvelle maison spirituelle.",
  },
];

// Journal du chantier — exemples de structure éditoriale (jour, date, étape
// liée). À remplacer par les vraies entrées au fil de l'avancement réel.
export const constructionUpdates: ConstructionUpdate[] = [
  {
    "id": "1",
    "day": 35,
    "date": "2026-09-04",
    "title": "La montée des murs",
    "description": "Les murs progressent rapidement et atteignent désormais 3 mètres de hauteur.",
    "mediaUrls": ["/img/murs2.jpeg"],
    "relatedStepId": "structure"
  },
  {
    id: "2",
    day: 22,
    date: "2026-08-18",
    title: "Les murs prennent forme",
    description: "La structure porteuse est désormais visible sur l'ensemble du bâtiment.",
    mediaUrls: ["/img/murs.jpeg"],
    relatedStepId: "structure"
  },
  {
    id: "3",
    day: 1,
    date: "2026-07-27",
    title: "Pose de la première pierre",
    description: "Lancement officiel des travaux avec la pose du premier élément de la structure.",
    mediaUrls: ["/img/premierPierre.jpeg"],
    relatedStepId: "structure"
  }
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
  { name: "Jeannie RASOARIVOLOLONA", role: "Loholona" },
  { name: "Mampionona RAKOTONDRAMANANA", role: "Trésorerie" },
];

// Actualités — structure de démonstration. Les vrais articles remplaceront
// ces entrées ; ne pas publier ce contenu tel quel.
export const newsArticles: NewsArticle[] = [
  {
    slug: "premier-concert",
    title: "Concert Feon'ny trompetra",
    category: "Concert",
    date: "2026-06-21",
    excerpt: "Concert de la chorale d'Antsonjobe pour collecter des fonds pour la construction de la nouvelle église.",
    coverUrl: "/img/chorale.jpg",
    body: "",
  },
  {
    slug: "Campaura",
    title: "Camp'aura FMC 2026",
    category: "Camp",
    date: "2026-08-22",
    excerpt: "Le Camp'aura FMC 2026 promet d'être une expérience enrichissante pour tous les participants.",
    coverUrl: "/img/camps.jpeg",
    body: "",
  },
  {
    slug: "Mandresy",
    title: "Mandresy : le petit aventurier d'Antsonjobe",
    category: "Témoignages",
    date: "2026-08-16",
    excerpt: "Découvrez l'histoire de Mandresy, un jeune aventurier qui a fait ses premiers pas dans l'église d'Antsonjobe.",
    coverUrl: "/img/mandresyy.jpeg",
    body: "",
  },
];
