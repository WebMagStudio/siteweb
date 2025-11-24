import "~/styles/globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";
import CookieBanner from "./_components/cookieBanner";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebMagStudio - Création/refonte de site web",
  description: "Sites web, applications et stratégie digitale pour une présence en ligne qui vous ressemble",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
         <CookieBanner />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
