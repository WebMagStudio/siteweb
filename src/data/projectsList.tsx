import { ReactNode } from "react";

type Project = {
  id: number;
  title: string;
  description: ReactNode;
  category: string;
  image: string;
  liveDemo: string | null;
  sourceCode: string | null;
  technologies: { name: string; logo: string }[];
};

export const projectsList : Project[] = [
  {
    id: 1,
    title: "Let's sport",
    description:
      "Concevoir une app mobile permettant aux particuliers de faire du sport avec leurs amis ou des personnes membres du service",
    category: "Design graphique",
    image: "/img/lets-sport.png",
    liveDemo: null,
    sourceCode: "https://www.behance.net/gallery/196270895/Lets-Sport",
    technologies: [
        { name: "Adobe XD", logo: "/iconsTech/adobexd.png" },
        { name: "Invision", logo: "/iconsTech/invision.png" },
      { name: "Flow Mapp", logo: "/iconsTech/flowmapp.png" },
    ],
  },
  {
    id: 2,
    title: "Booki",
    description: "Transformer une maquette en site web avec HTML et CSS",
    category: "Site web",
    image: "/img/booki.png",
    liveDemo:
      "https://magma73.github.io/Projet-2-Transformez-une-maquette-en-site-web-avec-HTML-CSS-Booki/",
    sourceCode:
      "https://github.com/Magma73/Projet-2-Transformez-une-maquette-en-site-web-avec-HTML-CSS-Booki",
    technologies: [
      { name: "HTML", logo: "/iconsTech/react.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
      //   { name: "Flexbox", logo: "/iconsTech/flexbox.png" },
    ],
  },
  {
    id: 3,
    title: "GameOn",
    description: "Créer une landing page avec Javascript",
    category: "Site web",
    image: "/img/gameon.png",
    liveDemo:
      "https://magma73.github.io/Projet-4-Creer-une-landing-page-avec-Javascript/",
    sourceCode:
      "https://github.com/Magma73/Projet-4-Creer-une-landing-page-avec-Javascript",
    technologies: [
      { name: "HTML", logo: "/iconsTech/react.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
        { name: "Javascript", logo: "/iconsTech/javascript.png" },
    ],
  },
  {
    id: 4,
    title: "OhMyFood",
    description: "Dynamiser une page web avec des animations CSS",
    category: "Site web",
    image: "/img/oh-my-food-1.png",
    liveDemo:
      "https://magma73.github.io/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS/",
    sourceCode:
      "https://github.com/Magma73/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS",
    technologies: [
      { name: "HTML", logo: "/iconsTech/react.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
        { name: "SASS", logo: "/iconsTech/sass.png" },
      //   { name: "Flexbox", logo: "/iconsTech/flexbox.png" },
    ],
  },
  {
    id: 5,
    title: "FishEye",
    description: "Créer un site accessible pour une plateforme de photographes",
    category: "App web",
    image: "/img/fisheye.png",
    liveDemo:
      "https://magma73.github.io/Projet-6-Plateforme-photographes-Fisheye/public/",
    sourceCode:
      "https://github.com/Magma73/Projet-6-Plateforme-photographes-Fisheye",
    technologies: [
      { name: "HTML", logo: "/iconsTech/react.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
        { name: "SASS", logo: "/iconsTech/sass.png" },
      //   { name: "Flexbox", logo: "/iconsTech/flexbox.png" },
    ],
  },
  {
    id: 6,
    title: "Les petits plats",
    description: "Développer un algorithme de recherche en JavaScript",
    category: "App web",
    image: "/img/les-petits-plats.png",
    liveDemo:
      "https://magma73.github.io/Projet-7-Developpez-un-algorithme-de-recherche-en-JavaScript/public/",
    sourceCode:
      "https://github.com/Magma73/Projet-7-Developpez-un-algorithme-de-recherche-en-JavaScript",
    technologies: [
      { name: "HTML", logo: "/iconsTech/react.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
        { name: "Bootstrap", logo: "/iconsTech/bootstrap.png" },
        { name: "SASS", logo: "/iconsTech/sass.png" },
        // { name: "Flexbox", logo: "/iconsTech/flexbox.png" },
    ],
  },
  {
    id: 7,
    title: "Billed",
    description: "Débugger et tester un SaaS RH",
    category: "App web",
    image: "/img/billed.png",
    liveDemo: null,
    sourceCode:
      "https://github.com/Magma73/Projet-9-Debuggez-et-testez-un-SaaS-RH/tree/main",
    technologies: [
        { name: "jQuery", logo: "/iconsTech/jquery.png" },
        { name: "Express", logo: "/iconsTech/express.png" },
        { name: "Jest", logo: "/iconsTech/jest.png" },
    ],
  },
  {
    id: 8,
    title: "Kasa",
    description: "Développer une application web avec React et React Router",
    category: "App web",
    image: "/img/kasa.png",
    liveDemo: "https://kasa-marine-magnin.netlify.app/",
    sourceCode:
      "https://github.com/Magma73/Projet-11-Developpez-une-application-web-avec-react-et-react-router",
    technologies: [
      { name: "React", logo: "/iconsTech/react.png" },
      { name: "React Router", logo: "/iconsTech/react-router.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
    ],
  },
  {
    id: 9,
    title: "Learn@Home",
    description: "Définir les besoins pour une app de soutien scolaire",
    category: "Design graphique",
    image: "/img/learn-at-home.png",
    liveDemo: null,
    sourceCode:
      "https://github.com/Magma73/Projet-10-Definissez-les-besoins-pour-une-app-de-soutien-scolaire",
    technologies: [
      { name: "Figma", logo: "/iconsTech/figma.png" },
      { name: "Trello", logo: "/iconsTech/trello.png" },
      { name: "Flow Mapp", logo: "/iconsTech/flowmapp.png" },
    ],
  },
  {
    id: 10,
    title: "Sport See",
    description: "Développer un tableau de bord analytique avec React",
    category: "App web",
    image: "/img/sportsee.png",
    liveDemo: null,
    sourceCode:
      "https://github.com/Magma73/projet-12-developpez-un-tableau-de-bord-analytics-avec-react",
    technologies: [
      { name: "React", logo: "/iconsTech/react.png" },
      { name: "React Router", logo: "/iconsTech/react-router.png" },
    ],
  },
  {
    id: 11,
    title: "Argent Bank",
    description:
      "Utiliser le state manager Redux pour gérer l'état de l'application",
    category: "App web",
    image: "/img/argent-bank.png",
    liveDemo: null,
    sourceCode: "https://github.com/Magma73/Projet-13-argent-bank",
    technologies: [
      { name: "React", logo: "/iconsTech/react.png" },
      { name: "React Router", logo: "/iconsTech/react-router.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
      { name: "Redux", logo: "/iconsTech/redux.png" },
      { name: "Swagger", logo: "/iconsTech/swagger.png" },
    ],
  },
];
