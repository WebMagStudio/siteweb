import HeroBanner from "../_components/heroBanner";

export default async function Realisations() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-navy-950 dark:text-white">
      <HeroBanner
        title={
          <>
            Focus sur <span className="text-purple-300">nos réalisations</span>
          </>
        }
        text="Consulter nos réalisations."
      />
    </main>
  );
}
