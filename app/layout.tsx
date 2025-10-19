import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SVGFilters } from "@/components/SVGFilters";
import { createClient } from "@/prismicio";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-bowlby"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono"
});

export async function metadata(): Promise<Metadata> {
  const client = createClient();
  const siteSettings = await client.getSingle("settings");
  return {
    title: siteSettings.data.site_title,
    description: siteSettings.data.meta_description,
    openGraph: {
      images: siteSettings.data.fallback_og_image.url ?? undefined
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.variable} ${bowlby.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>
          {children}
        </main>
        <SVGFilters />
      </body>
    </html>
  );
}
