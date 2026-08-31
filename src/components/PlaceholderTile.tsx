interface PlaceholderTileProps {
  label: string;
  className?: string;
}

/**
 * §39 du brief : privilégier les vraies photographies d'Antsonjobe et ne
 * jamais les remplacer par des images stock. Tant qu'une photo réelle n'est
 * pas fournie, on affiche un repère honnête plutôt qu'un visuel trompeur.
 */
export function PlaceholderTile({ label, className }: PlaceholderTileProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-stone/50 bg-sand/60 p-4 text-center text-xs text-ink/45 ${className ?? ""}`}
    >
      Photo à venir — {label}
    </div>
  );
}
