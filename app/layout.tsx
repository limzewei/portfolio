import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://limzewei.vercel.app"),
  title: "Lim Ze Wei — Software Engineer",
  description:
    "Software Engineer focused on backend systems, full-stack applications, API integrations, Linux infrastructure, and AI-assisted engineering.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Lim Ze Wei — Software Engineer",
    description:
      "Backend & full-stack systems, integrations, Linux infrastructure, and AI/LLM engineering.",
    url: "https://limzewei.vercel.app",
    siteName: "Lim Ze Wei — Software Engineer",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lim Ze Wei — Software Engineer",
    description:
      "Backend & full-stack systems, integrations, Linux infrastructure, and AI/LLM engineering."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
