export default async function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 text-white">
      <div className="container flex max-w-[938px] flex-col items-center justify-center gap-12 py-16">
        <h1 className="text-7xl font-bold tracking-tight text-purple-300 sm:text-[5rem]">
          Contactez-moi !
        </h1>
        <p className="text-2xl">
          Discutons ensemble de vos besoins et de la manière dont je peux vous
          aider à concrétiser votre projet web. Que vous soyez en Savoie, Isère,
          Haute-Savoie, ou ailleurs en France, je suis disponible pour
          travailler avec vous, en personne ou à distance. Vous avez un projet
          en tête ?N'hésitez pas à me contacter via le formulaire ci-dessous,
          par mail ou téléphone.
        </p>
      </div>
    </main>
  );
}
