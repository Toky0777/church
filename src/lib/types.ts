// Structures de données du site Antsonjobe — La Suite.
// Tout contenu variable (chantier, finances, témoignages, actualités) passe
// par ces types plutôt que d'être codé en dur dans les composants, afin de
// permettre un futur branchement sur un CMS/backend.

export type StepStatus = "done" | "current" | "upcoming";

export interface ConstructionStep {
  id: string;
  name: string;
  status: StepStatus;
  order: number;
}

export interface ConstructionUpdate {
  id: string;
  day: number;
  date: string; // ISO 8601
  title: string;
  description: string;
  mediaUrls: string[];
  relatedStepId?: string;
}

export interface FinancialReport {
  id: string;
  period: string; // ex. "Août 2026"
  incomeAr: number | null; // null tant que la donnée réelle n'est pas fournie
  expensesAr: number | null;
  balanceAr: number | null;
  documentUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  photoUrl?: string;
}

export type NewsCategory =
  | "Chantier"
  | "Témoignages"
  | "Vie de l'église"
  | "International"
  | "Madagascar"
  | "Financement";

export interface NewsArticle {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string; // ISO 8601
  excerpt: string;
  body: string;
  coverUrl?: string;
}

export interface Need {
  id: string;
  icon: string; // nom d'icône ou emoji
  label: string;
  targetAmountAr: number | null;
  fundedAmountAr: number | null;
}

export interface Contact {
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export interface Project {
  title: string;
  vision: string;
  capacity?: string;
  steps: ConstructionStep[];
  progressPercent: number | null; // null tant que non confirmé
}
