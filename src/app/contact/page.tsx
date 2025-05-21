import HeroBanner from "../_components/heroBanner";

export default async function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-navy-950 dark:text-white">
      <HeroBanner
        title={
          <>
            <span className="text-purple-300">Contactez-moi !</span>
          </>
        }
        text="Discutons ensemble de vos besoins et de la manière dont je peux vous
          aider à concrétiser votre projet web. Que vous soyez en Savoie, Isère,
          Haute-Savoie, ou ailleurs en France, je suis disponible pour
          travailler avec vous, en personne ou à distance. Vous avez un projet
          en tête ?N'hésitez pas à me contacter via le formulaire ci-dessous,
          par mail ou téléphone."
      />
    </main>
  );
}
