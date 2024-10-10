import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Great Portfolio",
  description: "This portfolio belongs to Kritika Singh."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
