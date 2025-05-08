export default async function Apropos() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <div className="container flex max-w-[938px] flex-col items-center justify-center gap-12 py-16">
        <h1 className="text-7xl font-bold tracking-tight sm:text-[5rem]">
          Présentation de <span className="text-purple-300">M&M</span>
        </h1>
        <p className="text-left text-2xl">
          C’est le moment des présentations 🙂 Je suis Marine Magnin,
          développeuse conceptrice web et entrepreneuse passionnée. Je vous aide
          à créer des solutions digitales adaptées à vos besoins.
        </p>
      </div>
    </main>
  );
}
