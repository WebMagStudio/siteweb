import { HydrateClient } from "~/trpc/server";
import HeroBanner from "./_components/heroBanner";
import HeadingBlock from "./_components/headingBlock";
import ProjectsGrid from "./_components/projectsGrid";
// import CTABanner from "./_components/ctaBanner";
import TestimonialsCarousel from "./_components/testimonialsCarousel";
import CVDownloadCard from "./_components/CVDownloadCard";
import Image from "next/image";
import CardInfo from "./_components/cardInfo";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default async function Home() {
  const emailParts = ['contact', 'webmagstudio.fr'];
  const email = emailParts.join('@');

  const phone = '06 70 45 59 84'; // À remplacer
  const phoneHref = '+33670455984'; // Format international

  return (
    <HydrateClient>
      <main className="flex flex-col items-center justify-center">
        <div className="w-full">
          <section className="mx-3 rounded-b-3xl bg-gradient-to-r from-accent-light via-accent to-accent-dark text-white">
            <div className="mx-auto max-w-[1240px] px-4 pb-12 pt-10">
              <HeroBanner
                title={
                  <>
                    Sites web, applications <br />
                    & <br />
                    stratégie digitale <br />{" "}
                    <span className="text-primary">
                      une présence en ligne qui vous ressemble
                    </span>
                  </>
                }
                text={
                  <>
                    Parce que votre savoir-faire mérite d&apos;être vu ! <br />
                    {/* Parce que votre temps est précieux ! <br />
                    Parce que votre futur se dessine sur le web ! <br /> <br /> */}
                    Laissez-moi vous accompagner et, ensemble, créons une
                    application, un site qui vous ressemble.
                  </>
                }
                button={{
                  text: "Lancez votre projet",
                  href: "#contact",
                }}
              />
            </div>
          </section>
        </div>
        <section id="services" className="my-12 w-full rounded-xl bg-white">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-8 py-16">
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

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
              {/* Bento 1 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 max-lg:rounded-t-3xl lg:col-span-3 lg:rounded-tl-3xl">
                <div className="relative shrink-0 h-96">
                  <div className="h-96 bg-[url(/img/mockup-ouistitree.png)] bg-contain bg-center bg-no-repeat"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Création ou refonte de site : vitrine, e-commerce et landing
                    page
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Montrez votre valeur au premier coup d&apos;œil
                  </p>
                  <p className="mt-2 max-w-[600px] sm:max-w-full text-sm/6 text-primary">
                    Vous n&apos;avez pas encore de site ou le vôtre ne vous
                    correspond plus ?
                    Je construis pas à pas un site moderne, rapide et simple à
                    utiliser. Un site pensé pour vos clients, conçu
                    avec vous.
                  </p>
                </div>
              </div>

              {/* Bento 2 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-3 lg:rounded-tr-3xl">
                <div className="relative h-96 shrink-0">
                  <div className="h-96 bg-[url(/img/app-web.png)] bg-cover bg-center"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Application web sur mesure
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Une application web taillée pour vos usages
                  </p>
                  <p className="mt-2 max-w-[600px] sm:max-w-full text-sm/6 text-primary">
                    Une application web pensée pour vos clients, votre métier et vos outils internes.
                  </p>
                </div>
              </div>

              {/* Bento 3 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-2 lg:rounded-bl-3xl">
                <div className="relative h-80 shrink-0">
                  <div className="h-80 bg-[url(/img/google.jpg)] bg-cover bg-center"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Rédaction web et référencement
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Des contenus qui parlent à vos clients... et aux moteurs de
                    recherche
                  </p>
                  <p className="mt-2 max-w-[600px] sm:max-w-full text-sm/6 text-primary">
                    Le bon ton, les bons mots, au bon endroit. Je prends le
                    temps de comprendre votre activité et votre ton, pour écrire
                    des textes clairs, engageants, et bien référencés.
                  </p>
                </div>
              </div>

              {/* Bento 4 */}
              <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-2">
                <div className="relative h-80 shrink-0">
                  <div className="h-80 bg-[url(/img/cadenas.jpg)] bg-cover bg-[center_top_80%]"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Maintenance et sécurité
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Restez concentré sur votre métier
                  </p>
                  <p className="mt-2 max-w-[600px] sm:max-w-full text-sm/6 text-primary">
                    Un site ou une application, ça nécessite une attention
                    régulière. Pour vous, je m&apos;occupe : des sauvegardes, des
                    mises à jour, de l&apos;hébergement et de la sécurité.
                  </p>
                </div>
              </div>

              {/* Bento 5 */}
              <div className="lg:rounded-br-4xl shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 max-lg:rounded-b-3xl lg:col-span-2">
                <div className="flex h-80 items-center justify-center bg-[url(/bg/bg-card.png)] bg-cover bg-left">
                  {/* Cercle d'icônes en fond */}
                  <div className="flex flex-wrap items-center justify-center gap-6 p-4">

                    {/* LinkedIn */}
                    <div className="flex size-20 items-center justify-center rounded-full border border-gray-300 bg-white shadow transition hover:scale-105">
                      <Image
                        width={60}
                        height={60}
                        src="/icons/linkedin.svg"
                        alt="LinkedIn"
                      // className="h-20 w-20"
                      />
                    </div>

                    {/* Instagram */}
                    <div className="flex size-20 items-center justify-center rounded-full border border-gray-300 bg-white shadow transition hover:scale-105">
                      <Image
                        width={45}
                        height={45}
                        src="/icons/instagram.svg"
                        alt="Instagram"
                      // className="h-14 w-14"
                      />
                    </div>

                    {/* Facebook */}
                    <div className="flex size-20 items-center justify-center rounded-full border border-gray-300 bg-white shadow transition hover:scale-105">
                      <Image
                        width={45}
                        height={45}
                        src="/icons/facebook.svg"
                        alt="Facebook"
                      // className="h-14 w-14"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Accompagnement digital
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Bien communiquer sur les réseaux sociaux
                  </p>
                  <p className="mt-2 max-w-[600px] sm:max-w-full text-sm/6 text-primary">
                    LinkedIn, Instagram, Facebook : je vous accompagne pour structurer
                    votre présence en ligne, pour trouver le bon ton, et, pour publier
                    avec régularité.
                  </p>
                </div>
              </div>

              {/* Bento 6 */}
              {/* <div className="shadow-xs group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 lg:col-span-2">
                <div className="relative h-80 shrink-0">
                  <div className="h-80 bg-[url(/img/cadenas.jpg)] bg-cover bg-[center_top_80%]"></div>
                </div>
                <div className="relative p-10">
                  <h3 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-base/70">
                    Maintenance et sécurité
                  </h3>
                  <p className="mt-1 text-2xl/8 font-medium tracking-tight text-primary">
                    Restez concentré sur votre métier
                  </p>
                  <p className="mt-2 max-w-[600px] sm:max-w-full text-sm/6 text-primary">
                    Un site ou une application, ça nécessite une attention
                    régulière. Pour vous, je m&apos;occupe : des sauvegardes, des
                    mises à jour, de l&apos;hébergement et de la sécurité.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section id="realisations" className="my-12 w-full">
          <div className="mx-auto max-w-[1240px] px-4 py-16">
            <HeadingBlock
              className="text-primary"
              preTitle="Réalisations"
              title={
                <>
                  Focus sur{" "}
                  <span className="text-accent-dark">mes réalisations</span>
                </>
              }
            />
            <ProjectsGrid />
          </div>
        </section>

        <div className="w-full">
          <section id="temoignages" className="mx-3 my-12 rounded-3xl bg-base">
            <div className="mx-auto max-w-[1240px] px-4 py-16">
              <HeadingBlock
                className="text-white"
                preTitle="Témoignages"
                title={
                  <>
                    Ce qu&apos;ils{" "}
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

        <section id="apropos" className="my-12 w-full">
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
              C&apos;est le moment des présentations 🙂 ! <br />
              Je m&apos;appelle Marine Magnin, et, je crée des sites web et des solutions digitales pour les indépendants, les artisans et les petites
              structures. <br />
              Pas besoin de jargon technique : je prends le temps de comprendre
              votre métier, vos priorités et vos clients. <br /> Ensemble, on
              avance pas à pas vers un outil clair, moderne, efficace — et qui
              vous ressemble. <br />
              <br /> Mon objectif ? Que vous soyez fière de votre présence en
              ligne, qu&apos;elle fasse vraiment une différence pour vous, et qu&apos;elle soit utile au quotidien.
            </p>
          </div>
        </section>

        <div className="mb-12 w-full">
          {/* <section
            id="contact"
            className="mx-3 mb-12 rounded-3xl bg-gradient-to-r from-accent-light via-accent to-accent-dark py-12 text-white"
          >
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
                  N&apos;attendez plus pour booster votre visibilité en ligne !{" "}
                  <br />
                  Prenez rendez-vous dès maintenant et ensemble, donnons vie à vos
                  idées.
                </>
              }
              href="/calendly"
              text="Prendre rendez-vous"
            />
          </section> */}

          <section
            id="contact"
            className="mt-3 w-full bg-gradient-to-r from-accent-light via-accent to-accent-dark py-3"
          >
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
                      Pour toute question ou collaboration,
                      vous pouvez me joindre directement par email.
                      <br /> Je serais ravie d’échanger avec vous !
                    </>
                  }
                </p>
                <div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <div className="mx-auto flex w-full max-w-[600px] flex-col justify-between gap-6">
                    {/* <CardInfo
                      icon={<MapPinIcon className="h-8 w-8" />}
                      content={
                        <>
                          Savoie, Isère, Haute-Savoie, Rhône <br /> + <br />{" "}
                          En distanciel
                        </>
                      }
                    /> */}
                    <CardInfo
                      icon={<PhoneIcon className="h-8 w-8" />}
                      content={
                        <a
                          href={`tel:${phoneHref}`}
                          className="hover:underline"
                        >
                          {phone}
                        </a>
                      }
                    />
                    <CardInfo
                      icon={<EnvelopeIcon className="h-8 w-8" />}
                      content={
                        <a
                          href={`mailto:${email}`}
                          className="hover:underline"
                        >
                          {email}
                        </a>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </HydrateClient>
  );
}
