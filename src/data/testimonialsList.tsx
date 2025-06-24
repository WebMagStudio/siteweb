// import { ReactNode } from "react";

type Testimonial = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  society: string;
  message: string;
//   image: string | null;
//   link: string | null;
};

export const testimonialsList: Testimonial[] = [
  {
    id: 1,
    firstName: "Mickaël",
    lastName: "Rigard",
    role:"Président d'",
    society: "Attractive Labs",
    message: "Marine est une personne volontaire et  méthodique. J’ai eu beaucoup de plaisir à travailler avec elle et le  regret que la situation économique ne nous permette pas de prolonger. Au cours de son année d’alternance à nos côtés, elle a révélé des  compétences en organisation, gestion de projet et en rédaction, en plus  de ses aptitudes en développement. Sérieuse dans sa formation, j’ai pu  mesurer l’évolution de ses acquis. C’est une personne de confiance que  je recommande vivement.",
    // image: "/img/lets-sport.png",
    // link: null,
  },
    {
    id: 2,
    firstName: "Géraldine",
    lastName: "Teyssier",
    role:"Co-gérante de l'",
    society: "Agence 89/92",
    message: "Marine est une personne volontaire et  méthodique. J’ai eu beaucoup de plaisir à travailler avec elle et le  regret que la situation économique ne nous permette pas de prolonger. Au cours de son année d’alternance à nos côtés, elle a révélé des  compétences en organisation, gestion de projet et en rédaction, en plus  de ses aptitudes en développement. Sérieuse dans sa formation, j’ai pu  mesurer l’évolution de ses acquis. C’est une personne de confiance que  je recommande vivement.",
    // image: "/img/lets-sport.png",
    // link: null,
  },
    {
    id: 3,
    firstName: "Ferréole",
    lastName: "Lespinasse",
    role:"Gérante de",
    society: "Cyclop éditorial",
    message: "Marine Magnin a effectué un stage au sein de Cyclop Éditorial. Elle possède toutes les compétences pour bien rédiger pour le web et créer  des modules pédagogiques : collecter des informations, les synthétiser  de manière pertinente, les structurer pour favoriser la compréhension du lecteur. Dotée d’une sens de la formule, ses textes sont fluides. Elle apprend vite et intègre les remarques avec justesse.",
    // image: "/img/lets-sport.png",
    // link: null,
  },
]