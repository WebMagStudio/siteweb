import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import HeroBanner from "./_components/heroBanner";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <HeroBanner
        title={
          <>
            <span className="text-purple-300">🚧 404 – Page introuvable</span>
          </>
        }
        text="Oups ! La page que vous cherchez n'existe pas ou a été déplacée."
        button={{
          text: "Retour à l’accueil",
          href: "/",
          iconLeft: <ArrowLeftIcon className="h-5 w-5" />,
        }}
      />
    </main>
  );
}
