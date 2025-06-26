import { api, HydrateClient } from "~/trpc/server";
import HeroBanner from "./_components/heroBanner";
import HeadingBlock from "./_components/headingBlock";
import ServiceCard from "./_components/serviceCard";
import { servicesList } from "../data/servicesList";
import ProjectsGrid from "./_components/projectsGrid";
import CTABanner from "./_components/ctaBanner";
// import TestimonialCard from "./_components/testimonialCard";
// import { testimonialsList } from "~/data/testimonialsList";
import TestimonialsCarousel from "./_components/testimonialsCarousel";

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
        </section>

        <section className="my-12 w-full">
          <HeadingBlock
            preTitle="Témoignages"
            title={
              <>
                Ce qu'ils <span className="text-purple-300">disent de moi</span>
              </>
            }
          />
          <div className="mt-8">
            <TestimonialsCarousel />
          </div>
        </section>

        <section className="relative w-full">
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
