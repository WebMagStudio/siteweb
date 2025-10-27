import type { ReactNode } from "react";

type Service = {
  id: number;
  title: string;
  description: string | ReactNode;
  cta: string | ReactNode;
  link: string;
  icon: string;
};

export const servicesList: Service[] = [
  {
    id: 1,
    title: "Sites vitrines, sites e-commerce, applications et landing pages",
    description: (
      <>
        Vous avez un projet web en tête ? Que ce soit pour créer ou refondre
        votre <strong> site vitrine, e-commerce ou landing page</strong>, je
        suis là pour transformer vos idées en réalité. Je développe également
        des <strong>applications web et mobiles</strong> sur mesure, adaptées à
        vos besoins.
      </>
    ),
    cta: "Explorer nos solutions",
    link: "/services/sites-web-et-app",
    icon: "/icons/code-bracket-square.svg",
  },
  {
    id: 2,
    title: "Stratégie digitale et création de contenus",
    description: (
      <>
        Boostez votre <strong> présence en ligne </strong> avec une stratégie
        digitale personnalisée. Je vous accompagne dans la gestion de votre
        communication sur les <strong>réseaux sociaux</strong>, la{" "}
        <strong>rédaction de contenus</strong> optimisés SEO et l&apos;amélioration
        de votre visibilité sur <strong>Google My Business</strong> pour attirer
        de nouveaux clients.
      </>
    ),
    cta: (
      <>
        Découvrez l&apos;accompagnement
      </>
    ),
    link: "/services/strategie-digitale",
    icon: "/icons/pencil.svg",
  },
  {
    id: 3,
    title: "Maintenance et sécurité",
    description:
      (
        <>
          Un site ou une application, ça nécessite une attention régulière. Pour vous, je m&apos;occupe des mises à jour, des sauvegardes et de la sécurité pour garantir leur bon fonctionnement et leur protection.
        </>
      ), cta: "Protégez votre site",
    link: "/services/maintenance",
    icon: "/icons/cog-6-tooth.svg",
  },
];
