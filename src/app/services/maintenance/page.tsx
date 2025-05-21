import HeroBanner from "~/app/_components/heroBanner";

export default async function Maitenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <HeroBanner
        title={
          <>
            <span className="text-purple-300">Maintenance</span>
          </>
        }
        text="Je gère votre maintenance."
      />
    </main>
  );
}
