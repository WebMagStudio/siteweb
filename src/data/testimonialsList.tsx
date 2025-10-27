import type { ReactNode } from "react";

type Testimonial = {
  id: number;
  firstName: string;
  lastName: string;
  role: string | ReactNode;
  society: string;
  message: string | ReactNode;
  //   image: string | null;
  //   link: string | null;
};

export const testimonialsList: Testimonial[] = [
  {
    id: 1,
    firstName: "Mickaël",
    lastName: "Rigard",
    role:
      (
        <>
          Président d&apos;
        </>
      ),
    society: "Attractive Labs",
    message:
      (
        <>
          Marine est une personne volontaire et méthodique. J&apos; ai eu beaucoup de plaisir à travailler avec elle et le regret que la situation économique ne nous permette pas de prolonger. Au cours de son année d&apos;alternance à nos côtés, elle a révélé des compétences en organisation, gestion de projet et en rédaction, en plus  de ses aptitudes en développement. Sérieuse dans sa formation, j&apos;ai pu  mesurer l&apos;évolution de ses acquis. C&apos;est une personne de confiance que je recommande vivement.

        </>
      ),
    // image: "/img/lets-sport.png",
    // link: null,
  },
  {
    id: 2,
    firstName: "Géraldine",
    lastName: "Teyssier",
    role:
      (
        <>
          Co-gérante de l&apos;
        </>
      ),
    society: "Agence 89/92",
    message:
      (
        <>
          Marine Magnin présente des qualités et compétences professionnelles qui font d&apos; elle un membre précieux au sein d&apos; une équipe.
          Forte de son savoir-faire et mettant à profit les apprentissages de sa formation dans notre entreprise, Marine a pu mener à bien sa mission de stage en travaillant sur un projet complexe d&apos;optimisation et de développement de nouvelles fonctionnalités pour une extension Wordpress communiquant avec des applications extérieures. Sa maîtrise des différents langages de programmation utilisés et sa capacité à faire des recherches de solutions efficaces lui ont permis d&apos;atteindre des objectifs dépassant nos attentes.
          Grâce à ses compétences rédactionnelles et son esprit de synthèse, Marine Magnin a rédigé l&apos; entièreté de la documentation technique du projet auquel elle participait. Elle a ainsi produit un résultat exhaustif et d&apos;une grande qualité.
        </>
      ),
    // image: "/img/lets-sport.png",
    // link: null,
  },
  {
    id: 3,
    firstName: "Ferréole",
    lastName: "Lespinasse",
    role: "Gérante de",
    society: "Cyclop éditorial",
    message:
      (
        <>
          Marine Magnin a effectué un stage au sein de Cyclop Éditorial. Elle possède toutes les compétences pour bien rédiger pour le web et créer des modules pédagogiques : collecter des informations, les synthétiser de manière pertinente, les structurer pour favoriser la compréhension du lecteur. Dotée d&apos;une sens de la formule, ses textes sont fluides. Elle apprend vite et intègre les remarques avec justesse.
        </>
      ),
    // image: "/img/lets-sport.png",
    // link: null,
  },
];
