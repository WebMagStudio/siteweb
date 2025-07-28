import "~/styles/globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";

import { Inter } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Site web Marine Magnin",
  description: "Je crée des sites web pour les auto entrepreneurs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-bg-light dark:bg-slate-950">
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
