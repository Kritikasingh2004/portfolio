import type { Metadata } from "next";
import "./globals.css";

import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Great Portfolio",
  description: "This portfolio belongs to Kritika Singh.",
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
