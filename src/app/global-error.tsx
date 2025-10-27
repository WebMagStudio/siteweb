"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
          <div className="container flex max-w-[990px] flex-col items-center justify-center gap-12 py-16">
            <h1 className="text-7xl font-bold tracking-tight text-purple-300 sm:text-[5rem]">
              Une erreur est survenue
            </h1>
            <p>{error.message}</p>
            <p className="text-left text-2xl text-slate-200">
              Désolé, quelque chose s&apos;est mal passé.
            </p>
            <button
              className="mt-4 bg-purple-300 px-4 py-2 text-navy-950"
              onClick={() => reset()}
            >
              Réessayer
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-base font-semibold text-navy-950 transition-colors hover:bg-slate-100"
            >
              <ArrowLeftIcon className="size-5" />
              Retour à l&apos;accueil
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
