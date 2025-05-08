import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <div className="container flex max-w-[990px] flex-col items-center justify-center gap-12 py-16">
        <h1 className="text-7xl font-bold tracking-tight text-purple-300 sm:text-[5rem]">
          🚧 404 – Page introuvable
        </h1>
        <p className="text-left text-2xl text-slate-200">
          Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-base font-semibold text-navy-950 transition-colors hover:bg-slate-100"
        >
          <ArrowLeftIcon className="size-5" />
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
