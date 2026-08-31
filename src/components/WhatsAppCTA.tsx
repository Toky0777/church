import { MessageCircle } from "lucide-react";
import { CTA } from "./CTA";

interface WhatsAppCTAProps {
  /** À renseigner dès que le canal officiel est créé. */
  href?: string;
}

export function WhatsAppCTA({ href }: WhatsAppCTAProps) {
  const link = href ?? "#lien-whatsapp-officiel-a-venir";

  return (
    <div className="flex flex-col items-start gap-6 bg-wood px-8 py-12 text-bone sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <MessageCircle size={28} className="mt-1 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-display text-2xl">Restez connecté au projet</p>
          <p className="mt-1 text-bone/85">
            Recevez les nouvelles du chantier directement sur WhatsApp.
          </p>
        </div>
      </div>
      <CTA href={link} variant="onDark" className="shrink-0">
        Rejoindre le canal WhatsApp
      </CTA>
    </div>
  );
}
