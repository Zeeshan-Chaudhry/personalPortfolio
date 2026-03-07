import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duel Portfolio",
  description: "Yu-Gi-Oh inspired interactive portfolio experience",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
