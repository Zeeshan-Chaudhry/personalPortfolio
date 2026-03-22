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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
