import { formatAr } from "@/lib/format";
import type { Need } from "@/lib/types";

interface NeedCardProps {
  need: Need;
}

export function NeedCard({ need }: NeedCardProps) {
  const hasAmounts = need.targetAmountAr !== null && need.fundedAmountAr !== null;
  const percent =
    hasAmounts && need.targetAmountAr
      ? Math.min(100, Math.round(((need.fundedAmountAr as number) / need.targetAmountAr) * 100))
      : null;

  return (
    <div className="border border-stone/30 bg-bone p-6">
      <p className="text-2xl" aria-hidden="true">
        {need.icon}
      </p>
      <p className="mt-3 font-display text-lg">{need.label}</p>

      <dl className="mt-4 space-y-1 text-sm text-ink/70">
        <div className="flex justify-between">
          <dt className="font-semibold">Objectif</dt>
          <dd className="font-semibold text-green-600">{formatAr(need.targetAmountAr)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-semibold">Déjà financé</dt>
          <dd className="">{formatAr(need.fundedAmountAr)}</dd>
        </div>
      </dl>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-stone/25">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${percent ?? 0}%` }}
        />
      </div>
    </div>
  );
}
