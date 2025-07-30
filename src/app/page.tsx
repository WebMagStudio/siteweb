import { api, HydrateClient } from "~/trpc/server";
import HeroBanner from "./_components/heroBanner";
import HeadingBlock from "./_components/headingBlock";
import ServiceCard from "./_components/serviceCard";
import { servicesList } from "../data/servicesList";
import ProjectsGrid from "./_components/projectsGrid";
import CTABanner from "./_components/ctaBanner";
import TestimonialsCarousel from "./_components/testimonialsCarousel";
import BlogCarousel from "./_components/blogCarousel";
import CVDownloadCard from "./_components/CVDownloadCard";
import ContactForm from "./_components/contactForm";
import CardInfo from "./_components/cardInfo";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      {/* <main className="mx-auto flex min-h-screen max-w-[1240px] flex-col items-center justify-center px-4 text-white"> */}
      <main className="flex flex-col items-center justify-center">
        <div className="w-full">
          <section className="mx-3 rounded-b-3xl bg-gradient-to-r from-accent-light via-accent to-accent-dark text-white">
            <div className="mx-auto max-w-[1240px] px-4 pt-10 pb-12">
              <HeroBanner
                title={
                  <>
                    Sites web, applications <br />
                    &  <br />
                    stratégie digitale <br /> {" "} 
                    <span className="text-primary">
                      une présence en ligne qui vous ressemble
                    </span>
                  </>
                }
                text={
                  <>
                    Parce que votre savoir-faire mérite d’être vu ! <br />
                    Parce que votre temps est précieux ! <br />
                    Parce que votre futur se dessine sur le web ! <br /> <br />
                    Laissez-moi vous accompagner et, ensemble, créons une application, un site qui vous ressemble.
                  </>
                }
              />
            </div>
          </section>
        </div>
        <section className="my-12 w-full rounded-xl bg-white">
          <div className="mx-auto max-w-[1240px] px-4 py-16">
            <HeadingBlock
              className="text-primary"
              preTitle="Des services sur mesure"
              title={
                <>
                  Trouvez le{" "}
                  <span className="text-accent-dark">
                    service qui vous correspond
                  </span>
                </>
              }
            />

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
              {/* Bento 1 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 max-lg:rounded-t-3xl lg:col-span-3 lg:rounded-tl-3xl">
                <div className="relative shrink-0">
                  <div className="h-96 bg-[url(/img/ouistitree.png)] bg-cover bg-top"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Création et refonte de site : vitrine, e-commerce, landing
                    page
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Montrez votre valeur au premier coup d’œil
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Un site moderne et efficace pour mettre en avant votre
                    savoir-faire. Pensé pour vos clients et facile à prendre en
                    main. Nous construirons pas à pas. Votre site ne vous correspond plus, vous souhaitez le faire évoluer, adapter aux nouvelles technologies. Ensemble nous le reconstruirons pas à pas.
                  </p>
                </div>
              </div>

              {/* Bento 2 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-3 lg:rounded-tr-3xl">
                <div className="relative h-96 shrink-0">
                  <div className="h-96 bg-[url(/img/kasa.png)] bg-cover bg-top"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Application web sur mesure
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Une appli web taillée pour vos usages
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Une appli web pensée pour vos outils internes, votre métier
                    ou vos clients
                  </p>
                </div>
              </div>

              {/* Bento 3 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-2 lg:rounded-bl-3xl">
                <div className="relative h-80 shrink-0">
                  <div className="flex size-full pl-10 pt-10">
                    <div className="h-96 bg-[url(/img/kasa.png)] bg-cover bg-top"></div>
                  </div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Rédaction
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Des contenus qui parlent à vos clients
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Le bon ton, les bons mots, au bon endroit. Je prends soin d'écrire des textes en fonction du profil de vos clients.
                  </p>
                </div>
              </div>

              {/* Bento 3 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-2 lg:rounded-bl-3xl">
                <div className="relative h-80 shrink-0">
                  <div className="flex size-full pl-10 pt-10">
                    <div className="h-96 bg-[url(/img/kasa.png)] bg-cover bg-top"></div>
                  </div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Référencement et SEO
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Un référencement optimisé afin que vous soyez visible sur le net
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Grâce à des mots clés et balises pertinents, je fais en sorte que votre référencement soit le meilleur possible dans les principaux moteurs de recherche.
                  </p>
                </div>
              </div>

              {/* Bento 4 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-2">
                <div className="relative h-80 shrink-0">
                  <div className="flex size-full pl-10 pt-10">
                    <div className="h-96 bg-[url(/img/kasa.png)] bg-cover bg-top"></div>
                  </div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Maintenance et sécurité
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Restez concentré sur votre métier, je m'occupe du reste
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Un site ou une application, ça nécessite une attention
                    régulière. Pour vous, je m’occupe : des sauvegardes, des
                    mises à jour, de l'hébergement, de la sécurité.
                  </p>
                </div>
              </div>

              {/* Bento 5 */}
              <div className="lg:rounded-br-4xl shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 max-lg:rounded-b-3xl lg:col-span-2">
                <div className="relative h-80 shrink-0">
                  <div className="flex size-full pl-10 pt-10">
                    <div className="h-96 bg-[url(/img/kasa.png)] bg-cover bg-top"></div>
                  </div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Stratégie et accompagnement
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Bien communiquer sur les réseaux sociaux
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Je vous propose de gérer votre communication sur vos réseaux sociaux : Linkedin, Facebook et Instagram.
                  </p>
                </div>
              </div>

              {/* Bento 5 */}
              <div className="lg:rounded-br-4xl shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 max-lg:rounded-b-3xl lg:col-span-2">
                <div className="relative h-80 shrink-0">
                  <div className="flex size-full pl-10 pt-10">
                    <div className="h-96 bg-[url(/img/kasa.png)] bg-cover bg-top"></div>
                  </div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Design
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Un design personnalisé 
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Vous pourrez choisir parmi un éventail de looks pour votre site. Pour un design plus personnalisé, je travaille en partenariat avec des graphistes talentueux.
                  </p>
                </div>
              </div>

           {/* Bento 5 */}
              <div className="lg:rounded-br-4xl shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 max-lg:rounded-b-3xl lg:col-span-2">
                <div className="relative h-80 shrink-0">
                  <div className="flex size-full pl-10 pt-10">
                    <div className="h-96 bg-[url(/img/kasa.png)] bg-cover bg-top"></div>
                  </div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Évolution
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Vous évoluez, votre site aussi 
                  </p>
                  <p className="mt-2 max-w-[600px] text-sm/6 text-primary">
                    Vous vous développez, vous avez d'autres besoins : je vous accompagne pour adapter votre site.
                  </p>
                </div>
              </div>


            </div>

            {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10">
              {servicesList.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div> */}
          </div>
        </section>

        <section className="my-12 w-full">
          <div className="mx-auto max-w-[1240px] px-4 py-16">
            <HeadingBlock
              className="text-primary"
              preTitle="Réalisations"
              title={
                <>
                  Focus sur{" "}
                  <span className="text-accent-dark">nos réalisations</span>
                </>
              }
            />
            <ProjectsGrid />
          </div>
        </section>

        <div className="w-full">
          <section className="mx-3 my-12 rounded-3xl bg-base">
            <div className="mx-auto max-w-[1240px] px-4 py-16">
              <HeadingBlock
                className="text-white"
                preTitle="Témoignages"
                title={
                  <>
                    Ce qu'ils{" "}
                    <span className="text-accent-dark">disent de moi</span>
                  </>
                }
              />
              <div className="mt-8">
                <TestimonialsCarousel />
              </div>
            </div>
          </section>
        </div>

        <section className="my-12 w-full">
          <div className="mx-auto max-w-[1240px] px-4 py-16">
            <HeadingBlock
              className="text-primary"
              preTitle="Blog"
              title={
                <>
                  Nouveautés du <span className="text-accent-dark">blog</span>
                </>
              }
            />

            <div className="mt-8">
              <BlogCarousel />
            </div>
          </div>
        </section>

        <section className="my-12 w-full">
          <div className="mx-auto max-w-[1240px] px-4 py-16">
            <HeadingBlock
              className="text-primary"
              preTitle="À propos"
              title={
                <>
                  À propos de <span className="text-accent-dark">moi</span>
                </>
              }
            />
            <CVDownloadCard />
            <p className="mx-10 my-12 max-w-5xl">
              C’est le moment des présentations 🙂 ! <br />
              Je suis Marine Magnin, développeuse front-end. <br />
              Ce que j’aime dans mon métier ? Transformer des idées en sites
              clairs, efficaces et agréables à utiliser. Issue d’une formation
              full-stack, j’ai choisi de me concentrer sur le front pour allier
              sens du détail, créativité et souci de l’expérience utilisateur.
              Mon objectif : créer des sites sur mesure qui font vraiment la
              différence pour mes clients.
            </p>
          </div>
        </section>

        <div className="mb-12 w-full">
          <section className="mx-3 rounded-3xl bg-gradient-to-r from-accent-light via-accent to-accent-dark py-12 text-white">
            <CTABanner
              className="text-white"
              title={
                <>
                  Parlons de votre{" "}
                  <span className="text-primary">projet !</span>
                </>
              }
              textBanner={
                <>
                  N'attendez plus pour booster votre visibilité en ligne !{" "}
                  <br />
                  Contactez-moi dès maintenant et ensemble, donnons vie à vos
                  idées.
                </>
              }
              href="#"
              text="Je réserve ma consultation gratuite"
            />
          </section>
        </div>

        <section className="mt-3 w-full bg-gradient-to-r from-accent-light via-accent to-accent-dark py-3">
          <div className="mx-3 rounded-3xl bg-white/60 px-4 py-12">
            <div className="mx-auto max-w-[1240px]">
              <HeadingBlock
                className="text-primary"
                preTitle="Contact"
                title={
                  <>
                    <span className="text-accent-dark">Contactez - moi</span>
                  </>
                }
              />
              <p className="mb-12 text-center">
                {
                  <>
                    Je suis ravie que vous ayez pris le temps de visiter mon
                    portfolio !<br />
                    Vous pouvez me joindre en utilisant le formulaire de contact
                    ci-dessous. <br />
                    Je suis impatiente d’échanger avec vous !
                  </>
                }
              </p>
              {/* <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start">
                <div className="flex w-full h-full max-w-[600px] flex-col justify-between gap-6"> */}

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
                <div className="mx-auto flex w-full max-w-[600px] flex-col justify-between gap-6 lg:max-w-none">
                  <CardInfo
                    icon={<MapPinIcon className="h-8 w-8" />}
                    content={
                      <>
                        Savoie, Isère, Haute-Savoie, Rhône <br /> + <br />{" "}
                        Télétravail
                      </>
                    }
                    className="flex-1"
                  />
                  <CardInfo
                    icon={<PhoneIcon className="h-8 w-8" />}
                    content="06.70.45.59.84"
                    className="flex-1"
                  />
                  <CardInfo
                    icon={<EnvelopeIcon className="h-8 w-8" />}
                    content="marine.magnin73@gmail.com"
                    className="flex-1"
                  />
                </div>

                {/* <div className="w-full max-w-[600px] flex-1 h-full"> */}
                <div className="flex items-stretch">
                  <ContactForm />
                </div>
              </div>
            </div>
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
