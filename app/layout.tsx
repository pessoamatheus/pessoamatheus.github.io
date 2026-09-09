import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matheus Pessôa — Nanofluidics & Single-Molecule Biophysics",
    template: "%s — Matheus Pessôa",
  },
  description:
    "Research website of Matheus Pessôa, a physicist working on nanofluidics, single-molecule biophysics, and reversible electrokinetic confinement.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
