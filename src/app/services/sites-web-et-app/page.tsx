import HeroBanner from "~/app/_components/heroBanner";

export default async function SitesWeb() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <HeroBanner
        title={
          <>
            <span className="text-purple-300">Site web</span>
          </>
        }
        text="Je construis votre site web."
      />
    </main>
  );
}
