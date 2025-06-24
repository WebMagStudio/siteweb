import Link from "next/link";
import Image from "next/image";
// import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
// import CTAButton from "./_components/ctaButton";
import HeroBanner from "./_components/heroBanner";
import HeadingBlock from "./_components/headingBlock";
import ServiceCard from "./_components/serviceCard";
import { servicesList } from "../data/servicesList";
// import ProjectCard from "./_components/projectCard";
// import { projectsList } from "~/data/projectsList";
import ProjectsGrid from "./_components/projectsGrid";
import CTABanner from "./_components/ctaBanner";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="mx-auto flex min-h-screen max-w-[1240px] flex-col items-center justify-center px-4 text-white">
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
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10">
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
          <ProjectsGrid />
          {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            {[...projectsList]
              .sort((a, b) => b.id - a.id) // tri décroissant par id
              .slice(0, visibleCount)
              .map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </div>
          <div className="my-10 w-full sm:max-w-3xl mx-auto lg:mx-0">
            <button onClick={() => setVisibleCount(visibleCount + 4)} className="flex gap-2 rounded-lg border border-stroke-article bg-gradient-to-r from-nocture to-eclipse p-4 text-sm font-medium transition duration-200 hover:shadow-md hover:shadow-stroke-article">
              <Image src="/icons/addmore.svg" width={19} height={19} alt="" />
              Afficher plus
            </button>
          </div> */}
        </section>
        <section className="relative w-full">
          {/* <div
        className="absolute inset-0 -z-20"
                  style={{
          backgroundColor: "#05041f",
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "92px 92px",
          opacity: 0.3,
        }}
      />

      {/* Tâches lumineuses */}
          {/* <div className="absolute top-[20%] left-[15%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
      <div className="absolute top-[10%] left-[50%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
      <div className="absolute top-[35%] left-[35%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
      <div className="absolute top-[50%] left-[65%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" />
      <div className="absolute top-[65%] left-[30%] w-12 h-20 bg-gradient-to-b from-white/70 to-transparent opacity-20 -z-10" /> */}

          {/* <div className="w-full absolute top-130 -left-43 inset-0 -z-10 bg-[url('/img/Container.png')] bg-no-repeat bg-cover bg-center" /> */}

          {/* <div
    className="w-full aspect-[1/1] absolute -left-[40px] -top-[346px] -z-10 bg-[url('/img/Container.png')] bg-no-repeat bg-cover bg-center"
  /> */}

          <div className="absolute -left-[40px] -z-10 aspect-[1/1] w-full -translate-y-1/3 bg-[url('/img/Container.png')] bg-cover bg-center bg-no-repeat" />

          <CTABanner
            title={
              <>
                Parlons de votre{" "}
                <span className="text-purple-300">projet !</span>
              </>
            }
            textBanner={
              <>
                N'attendez plus pour booster votre visibilité en ligne ! <br />
                Contactez-moi dès maintenant et ensemble, donnons vie à vos
                idées.
              </>
            }
            href="#"
            text="Je réserve ma consultation gratuite"
          />
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
