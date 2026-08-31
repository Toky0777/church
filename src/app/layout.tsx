import type { Metadata } from "next";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/400-italic.css";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Antsonjobe — La Suite",
    template: "%s | Antsonjobe — La Suite",
  },
  description:
    "26 ans de foi. Une nouvelle maison. Suivez la construction de la nouvelle église d'Antsonjobe, à Madagascar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bone text-ink font-body">
        {children}
      </body>
    </html>
  );
}
