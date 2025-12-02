import "~/styles/globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";
import CookieBanner from "./_components/cookieBanner";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

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
      <Head>
        {/* Meta SEO global */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WebMagStudio - Création/refonte de site web" />
        <meta property="og:description" content="Sites web, applications et stratégie digitale pour une présence en ligne qui vous ressemble" />
        <meta property="og:image" content="https://webmagstudio.fr/logo-reseaux.png" />
        <meta property="og:url" content="https://webmagstudio.fr" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebMagStudio - Création/refonte de site web" />
        <meta name="twitter:description" content="Sites web, applications et stratégie digitale pour une présence en ligne qui vous ressemble" />
        <meta name="twitter:image" content="https://webmagstudio.fr/logo-reseaux.png" />
      </Head>
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
