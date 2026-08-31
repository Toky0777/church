interface TimelineItem {
  label: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-stone/35 pl-8">
      {items.map((item, index) => (
        <li key={item.label} className={index === 0 ? "" : "mt-10"}>
          <span
            className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent"
            aria-hidden="true"
          />
          <p className="font-display text-xl">{item.label}</p>
          <p className="mt-1 text-ink/70">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
