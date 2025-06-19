import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
// import CTAButton from "./_components/ctaButton";
import HeroBanner from "./_components/heroBanner";
import HeadingBlock from "./_components/headingBlock";
import ServiceCard from "./_components/serviceCard";
import { servicesList } from "../data/servicesList";
import ProjectCard from "./_components/projectCard";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center text-white">
        <HeroBanner
          title={
            <>
              Sites web, applications & stratégie digitale :{" "}
              <span className="text-purple-300">
                une présence en ligne qui vous ressemble
              </span>
            </>
          }
          text="Je conçois des sites web et des applications sur mesure, accompagnés
            d’une stratégie digitale efficace pour renforcer votre présence en
            ligne."
          button={{ text: "Lancez votre projet", href: "/contact" }}
        />
        <section className="my-12">
          <HeadingBlock
            preTitle="Des services sur mesure"
            title={
              <>
                Trouvez le{" "}
                <span className="text-purple-300">
                  service qui vous correspond
                </span>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            {servicesList.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </section>

        <section className="my-12 w-full">
          <HeadingBlock
            preTitle="Réalisations"
            title={
              <>
                Focus sur{" "}
                <span className="text-purple-300">nos réalisations</span>
              </>
            }
          />
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <ProjectCard
              title="Argent bank"
              description="Utiliser le state manager Redux pour gérer l'état de l'application"
              category="App web"
              image="/img/argent-bank.png"
              liveDemo="https://www.behance.net/gallery/196270895/Lets-Sport"
              sourceCode="https://github.com/Magma73/Projet-2-Transformez-une-maquette-en-site-web-avec-HTML-CSS-Booki"
              technologies={[
                { name: "Adobe XD", logo: "/iconsTech/adobexd.png" },
                { name: "Invision", logo: "/iconsTech/invision.png" },
                { name: "Flow Mapp", logo: "/iconsTech/flowmapp.png" },
              ]}
            />
            <ProjectCard
              title="Let's sport"
              description="Concevoir une app mobile pour favoriser le sport entre amis"
              category="Design graphique"
              image="/img/lets-sport.png"
              liveDemo="null"
              sourceCode="https://www.behance.net/gallery/196270895/Lets-Sport"
              technologies={[
                { name: "Adobe XD", logo: "/iconsTech/adobexd.png" },
                { name: "Invision", logo: "/iconsTech/invision.png" },
                { name: "Flow Mapp", logo: "/iconsTech/flowmapp.png" },
              ]}
            />
            <ProjectCard
              title="GameOn"
              description="Créer une landing page avec Javascript"
              category="Site web"
              image="/img/gameon.png"
              liveDemo="https://magma73.github.io/Projet-4-Creer-une-landing-page-avec-Javascript/"
              sourceCode="https://github.com/Magma73/Projet-4-Creer-une-landing-page-avec-Javascript"
              technologies={[
                { name: "HTML", logo: "/iconsTech/react.png" },
                { name: "CSS", logo: "/iconsTech/css.png" },
                { name: "Bootstrap", logo: "/iconsTech/bootstrap.png" },
                { name: "SASS", logo: "/iconsTech/sass.png" },
              ]}
            />
          </div>
        </section>
        {/* <CTAButton href="/contact" text="Lancez votre projet" /> */}
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div> */}

        {/* <LatestPost /> */}
        {/* </div> */}
      </main>
    </HydrateClient>
  );
}
