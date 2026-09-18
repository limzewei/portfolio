import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lim Ze Wei — Software Engineer",
  description:
    "Software Engineer focused on backend systems, full-stack applications, API integrations, Linux infrastructure, and AI-assisted engineering.",
  openGraph: {
    title: "Lim Ze Wei — Software Engineer",
    description:
      "Backend & full-stack systems, integrations, Linux infrastructure, and AI/LLM engineering.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
