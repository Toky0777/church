import Image from "next/image";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-sand">
        {testimonial.photoUrl && (
          <Image
            src={testimonial.photoUrl}
            alt={testimonial.name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div>
        <blockquote className="font-display text-lg italic leading-snug text-ink/90">
          « {testimonial.quote} »
        </blockquote>
        <figcaption className="mt-2 text-sm text-ink/60">
          {testimonial.name}
          {testimonial.role && <span> · {testimonial.role}</span>}
        </figcaption>
      </div>
    </figure>
  );
}
