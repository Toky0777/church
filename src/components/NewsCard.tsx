import Image from "next/image";
import { PlaceholderTile } from "./PlaceholderTile";
import { formatDate } from "@/lib/format";
import type { NewsArticle } from "@/lib/types";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group">
      <div className="aspect-[4/3] overflow-hidden">
        {article.coverUrl ? (
          <Image
            src={article.coverUrl}
            alt=""
            width={480}
            height={360}
            className="h-full w-full object-cover"
          />
        ) : (
          <PlaceholderTile label={article.title} className="h-full w-full" />
        )}
      </div>
      <p className="mt-3 text-xs uppercase tracking-wide text-accent-dark">
        {article.category}
      </p>
      <h3 className="mt-1 font-display text-xl group-hover:underline">
        {article.title}
      </h3>
      <p className="mt-1 text-sm text-ink/55">{formatDate(article.date)}</p>
      <p className="mt-2 text-ink/70">{article.excerpt}</p>
    </article>
  );
}
