interface CountryColumnProps {
  flag: string;
  country: string;
  items: string[];
}

function CountryColumn({ flag, country, items }: CountryColumnProps) {
  return (
    <div>
      <p className="text-3xl" aria-hidden="true">
        {flag}
      </p>
      <p className="mt-2 font-display text-2xl">{country}</p>
      <ul className="mt-4 space-y-1.5 text-ink/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function MissionSplit() {
  return (
    <div className="grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <CountryColumn
        flag="🇲🇬"
        country="Madagascar"
        items={["Construction", "Suivi du chantier", "Photos", "Témoignages"]}
      />

      <div
        className="hidden h-full w-px bg-stone/30 sm:block"
        aria-hidden="true"
      />

      <CountryColumn
        flag="🇫🇷"
        country="International"
        items={["Mobilisation", "Communication", "Réseau", "Soutien"]}
      />
    </div>
  );
}
