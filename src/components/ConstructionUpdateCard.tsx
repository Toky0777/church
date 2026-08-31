import Image from "next/image";
import { formatDate } from "@/lib/format";
import { PlaceholderTile } from "./PlaceholderTile";
import type { ConstructionUpdate } from "@/lib/types";

interface ConstructionUpdateCardProps {
  update: ConstructionUpdate;
}

export function ConstructionUpdateCard({ update }: ConstructionUpdateCardProps) {
  const cover = update.mediaUrls[0];

  return (
    <article className="grid gap-5 border-t border-stone/25 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[220px_1fr]">
      <div className="aspect-[4/3] overflow-hidden bg-sand">
        {cover ? (
          <Image
            src={cover}
            alt=""
            width={440}
            height={330}
            className="h-full w-full object-cover"
          />
        ) : (
          <PlaceholderTile label={update.title} className="h-full w-full" />
        )}
      </div>

      <div>
        <p className="text-sm text-ink/55">
          Jour {update.day} · {formatDate(update.date)}
        </p>
        <h3 className="mt-1 font-display text-2xl">{update.title}</h3>
        <p className="mt-2 text-ink/75">{update.description}</p>
      </div>
    </article>
  );
}
