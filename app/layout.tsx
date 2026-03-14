import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeeshan's Portfolio",
  description: "Yu-Gi-Oh inspired interactive portfolio experience",
  icons: {
    icon: [{ url: "/signature-card.png", type: "image/png" }],
    shortcut: ["/signature-card.png"],
    apple: [{ url: "/signature-card.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
