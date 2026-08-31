import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ConstructionStep } from "@/lib/types";

interface StepTrackerProps {
  steps: ConstructionStep[];
}

export function StepTracker({ steps }: StepTrackerProps) {
  const sorted = [...steps].sort((a, b) => a.order - b.order);

  return (
    <ol className="flex flex-wrap gap-3">
      {sorted.map((step) => (
        <li
          key={step.id}
          className={cn(
            "flex items-center gap-2 rounded-full border px-4 py-2 text-sm",
            step.status === "done" &&
              "border-accent/60 bg-accent/10 text-accent-dark",
            step.status === "current" &&
              "border-wood bg-wood/10 font-semibold text-wood",
            step.status === "upcoming" && "border-stone/35 text-ink/55",
          )}
        >
          {step.status === "done" && <Check size={14} aria-hidden="true" />}
          <span>{step.name}</span>
          {step.status === "current" && (
            <span className="sr-only"> (étape en cours)</span>
          )}
        </li>
      ))}
    </ol>
  );
}
