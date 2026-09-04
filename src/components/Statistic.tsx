interface StatisticProps {
  value: string;
  label: string;
  variant?: "neutral" | "positive" | "highlight";
}

export function Statistic({ value, label, variant = "neutral" }: StatisticProps) {
  const valueStyles = {
    neutral: "text-ink",
    positive: "text-emerald-600",
    highlight: "text-orange-600",
  };

  return (
    <div>
      <p className={`font-display text-4xl sm:text-5xl ${valueStyles[variant]}`}>
        {value}
      </p>
      <p className="mt-1 text-sm text-ink/65">{label}</p>
    </div>
  );
}