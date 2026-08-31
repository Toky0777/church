interface StatisticProps {
  value: string;
  label: string;
}

export function Statistic({ value, label }: StatisticProps) {
  return (
    <div>
      <p className="font-display text-4xl text-ink sm:text-5xl">{value}</p>
      <p className="mt-1 text-sm text-ink/65">{label}</p>
    </div>
  );
}
