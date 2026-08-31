import { Download } from "lucide-react";
import { formatAr } from "@/lib/format";
import type { FinancialReport } from "@/lib/types";

interface FinancialReportCardProps {
  report: FinancialReport;
}

export function FinancialReportCard({ report }: FinancialReportCardProps) {
  return (
    <div className="flex flex-col justify-between gap-6 border border-stone/30 p-6 sm:flex-row sm:items-center">
      <div>
        <p className="font-display text-lg">Rapport — {report.period}</p>
        <dl className="mt-3 grid grid-cols-3 gap-6 text-sm">
          <div>
            <dt className="text-ink/55">Entrées</dt>
            <dd className="mt-0.5">{formatAr(report.incomeAr)}</dd>
          </div>
          <div>
            <dt className="text-ink/55">Dépenses</dt>
            <dd className="mt-0.5">{formatAr(report.expensesAr)}</dd>
          </div>
          <div>
            <dt className="text-ink/55">Solde</dt>
            <dd className="mt-0.5">{formatAr(report.balanceAr)}</dd>
          </div>
        </dl>
      </div>

      {report.documentUrl ? (
        <a
          href={report.documentUrl}
          className="inline-flex shrink-0 items-center gap-2 border border-ink/70 px-4 py-2.5 text-sm font-medium hover:border-ink"
        >
          <Download size={16} aria-hidden="true" />
          Télécharger le rapport
        </a>
      ) : (
        <p className="shrink-0 text-sm text-ink/45">Document à venir</p>
      )}
    </div>
  );
}
