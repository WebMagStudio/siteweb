import HeroBanner from "../_components/heroBanner";

export default async function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-navy-950 dark:text-white">
      <HeroBanner title="Blog" text="Consulter nos articles." />
    </main>
  );
}
