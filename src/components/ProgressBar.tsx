import { formatPercent } from "@/lib/format";

interface ProgressBarProps {
  label: string;
  percent: number | null;
}

export function ProgressBar({ label, percent }: ProgressBarProps) {
  const value = percent ?? 0;

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <p className="text-sm text-ink/70">{label}</p>
        <p className="font-display text-2xl">{formatPercent(percent)}</p>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent ?? undefined}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-full bg-stone/25"
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
