import Image from "next/image";
import { CTA } from "./CTA";

interface HeroProps {
  imageSrc?: string;
  imageAlt: string;
  eyebrow?: string;
  title: string[];
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
}

/**
 * En l'absence de photo réelle du chantier, la section retombe sur un fond
 * texturé sobre (terre / bois) plutôt qu'une image de banque. À remplacer
 * par `imageSrc` dès qu'une vraie photographie est disponible — voir §39
 * du brief : l'authenticité prime sur la perfection visuelle.
 */
export function Hero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #7a5c3e 0%, #5c4530 55%, #2b2118 100%)",
          }}
          role="img"
          aria-label={imageAlt}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

      <div className="relative mx-auto w-full max-w-content px-6 pb-16 pt-32 text-bone">
        <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="hidden sm:block mt-6 max-w-lg text-base text-bone/90 sm:text-lg">
          {subtitle}
        </p>


        <div className="mt-9 flex flex-wrap gap-4">
          <CTA href={primaryCta.href} variant="onDark">
            {primaryCta.label}
          </CTA>
          <CTA href={secondaryCta.href} variant="onDarkOutline">
            {secondaryCta.label}
          </CTA>
        </div>

        <p className="mt-10 text-sm text-bone/70">Madagascar · International</p>
      </div>
    </section>
  );
}
