import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agro-afrik.com"),
  title: {
    default: "AGRO-AFRIK | Africa's Digital Livestock Infrastructure",
    template: "%s | AGRO-AFRIK",
  },
  description:
    "AGRO-AFRIK is building Africa's trusted digital infrastructure for livestock farming, trade, traceability, verification, and food security.",
  keywords: [
    "Livestock marketplace Africa",
    "Livestock technology Africa",
    "Smart farming Africa",
    "Livestock traceability",
    "Livestock verification",
    "Digital livestock passport",
    "AgriTech Africa",
  ],
  openGraph: {
    title: "AGRO-AFRIK | Africa's Digital Livestock Infrastructure",
    description:
      "Digital livestock passports, verified marketplaces, AI farm support, and trusted supply chains for African livestock commerce.",
    url: "https://agro-afrik.com",
    siteName: "AGRO-AFRIK",
    images: [
      {
        url: "https://www.shutterstock.com/image-photo/african-farmer-using-smartphone-cattle-farm-600nw-2174697863.jpg",
        width: 1200,
        height: 630,
        alt: "Livestock farmer with healthy cattle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGRO-AFRIK",
    description: "Africa's digital livestock infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
