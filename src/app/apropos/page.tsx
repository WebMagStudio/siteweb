import HeroBanner from "../_components/heroBanner";

export default async function Apropos() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-navy-950 dark:text-white">
      <HeroBanner
        title={
          <>
            Présentation de <span className="text-purple-300">M&M</span>
          </>
        }
        text={
          <>
            C’est le moment des présentations 🙂.
            <br />
            Je suis Marine Magnin, développeuse conceptrice web et entrepreneuse
            passionnée.
            <br />
            Je vous aide à créer des solutions digitales adaptées à vos besoins.
          </>
        }
      />
    </main>
  );
}
