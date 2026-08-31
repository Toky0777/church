import Link from "next/link";
import { cn } from "@/lib/cn";

type CTAVariant = "primary" | "secondary" | "quiet" | "onDark" | "onDarkOutline";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: CTAVariant;
  className?: string;
}

const variantStyles: Record<CTAVariant, string> = {
  primary:
    "bg-ink text-bone hover:bg-accent-dark focus-visible:bg-accent-dark",
  secondary:
    "border border-ink/70 text-ink hover:border-ink hover:bg-ink/5",
  quiet: "text-accent-dark underline underline-offset-4 hover:text-ink",
  onDark: "bg-bone text-ink hover:bg-sand",
  onDarkOutline:
    "border border-bone/70 text-bone hover:border-bone hover:bg-bone/10",
};

export function CTA({ href, children, variant = "primary", className }: CTAProps) {
  const isQuiet: boolean = variant === "quiet";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center transition-colors duration-200",
        isQuiet
          ? "text-base font-medium"
          : "rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
