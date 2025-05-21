import HeroBanner from "~/app/_components/heroBanner";

export default async function StrategieDigitale() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <HeroBanner
        title={
          <>
            <span className="text-purple-300">Stratégie digitale</span>
          </>
        }
        text="Je vous accompagne dans votre stratégie digitale."
      />
    </main>
  );
}
