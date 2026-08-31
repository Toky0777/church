import type { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProjectCard({ icon: Icon, title, description }: ProjectCardProps) {
  return (
    <div className="border-l-2 border-wood/60 pl-5">
      <Icon size={22} className="text-wood" aria-hidden="true" />
      <p className="mt-3 font-display text-lg">{title}</p>
      <p className="mt-1.5 text-sm text-ink/70">{description}</p>
    </div>
  );
}
