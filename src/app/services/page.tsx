import HeroBanner from "../_components/heroBanner";

export default async function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-navy-950 dark:text-white">
      <HeroBanner
        title={
          <>
            Trouver le{" "}
            <span className="text-purple-300">service qui vous correspond</span>
          </>
        }
        text="Je vous accompagne pour augmenter votre visibilité en ligne."
      />
    </main>
  );
}
