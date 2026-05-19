import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { USE_CASES } from "@/lib/data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090B14",
};

export const metadata: Metadata = {
  title: "Sintra Tesseract — AI Use Case Library",
  description: `A curated library of ${USE_CASES.length} AI use cases mapped across every way to think with a machine.`,
  keywords: ["AI prompts", "ChatGPT", "Claude", "AI use cases", "prompt engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
