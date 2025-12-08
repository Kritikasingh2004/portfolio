import type { Metadata } from "next";
import "./globals.css";

import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Great Portfolio",
    template: "%s | Kritika Singh",
  },
  description: "This portfolio belongs to Kritika Singh.",
  keywords: [
    "Kritika Singh",
    "Software Developer",
    "Web Developer",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Kritika Singh" }],
  creator: "Kritika Singh",
  publisher: "Kritika Singh",
  metadataBase: new URL("https://kritika.is-a.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kritika.is-a.dev",
    title: "Kritika Singh | Developer Portfolio",
    description: "Portfolio of Kritika Singh - Developer and Superhero.",
    siteName: "Kritika Singh Portfolio",
    images: [
      {
        url: "/assets/me.webp",
        width: 1200,
        height: 630,
        alt: "Kritika Singh - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kritika Singh | Software Developer Portfolio",
    description:
      "Portfolio of Kritika - A Great Software Developer and Superhero.",
    images: ["/assets/me.webp"],
    creator: "@TheKriticizm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
