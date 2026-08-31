import { CTA } from "./CTA";

interface SectionQuestionProps {
  question: string;
  href: string;
  label: string;
}

export function SectionQuestion({ question, href, label }: SectionQuestionProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-stone/25 pt-6">
      <p className="text-ink/70">{question}</p>
      <CTA href={href} variant="quiet">
        {label}
      </CTA>
    </div>
  );
}
