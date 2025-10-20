import { ReactNode } from "react";

type Project = {
  id: number;
  title: string;
  description: ReactNode;
  category: string;
  image: string;
  liveDemo: string | null;
  sourceCode: string | null;
  sourceType?: "code" | "design" | "refonte";
  technologies: { name: string; logo: string }[];
};

export const projectsList: Project[] = [
  {
    id: 1,
    title: "Let's sport",
    description: "Conception d’une application mobile visant à favoriser le sport entre amis : création des parcours utilisateurs, réalisation des écrans et développement d’un prototype interactif sous Adobe XD.",
    category: "Design graphique",
    image: "/img/lets-sport.png",
    liveDemo: null,
    sourceCode: "https://www.behance.net/gallery/196270895/Lets-Sport",
    sourceType: "design",
    technologies: [
      { name: "Adobe XD", logo: "/iconsTech/adobexd.png" },
      { name: "Invision", logo: "/iconsTech/invision.png" },
      { name: "Flow Mapp", logo: "/iconsTech/flowmapp.png" },
    ],
  },
  {
    id: 2,
    title: "Booki",
    description: "Site permettant aux utilisateurs de rechercher des hébergements et des activités dans la ville de leur choix, avec des filtres pour affiner les résultats (budget, ambiance, thématique). Intégration responsive de la maquette avec HTML et CSS.",
    category: "Création site web",
    image: "/img/booki.png",
    liveDemo:
      "https://magma73.github.io/Projet-2-Transformez-une-maquette-en-site-web-avec-HTML-CSS-Booki/",
    sourceCode:
      "https://github.com/Magma73/Projet-2-Transformez-une-maquette-en-site-web-avec-HTML-CSS-Booki",
    sourceType: "code",
    technologies: [
      { name: "HTML", logo: "/iconsTech/react.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
      //   { name: "Flexbox", logo: "/iconsTech/flexbox.png" },
    ],
  },
  {
    id: 3,
    title: "GameOn",
    description: "Refonte d’une landing page et d’un formulaire d’inscription : simplification du parcours, ajout des fonctionnalités JavaScript, vérification du responsive et respect des maquettes pour améliorer l’expérience utilisateur.",
    category: "Création site web",
    image: "/img/gameon.png",
    liveDemo:
      "https://magma73.github.io/Projet-4-Creer-une-landing-page-avec-Javascript/",
    sourceCode:
      "https://github.com/Magma73/Projet-4-Creer-une-landing-page-avec-Javascript",
    sourceType: "code",
    technologies: [
      { name: "HTML", logo: "/iconsTech/react.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
      { name: "Javascript", logo: "/iconsTech/javascript.png" },
    ],
  },
  {
    id: 4,
    title: "OhMyFood",
    description: "Site 100% mobile permettant de consulter les menus de restaurants gastronomiques. Intégration d’animations CSS pour dynamiser l'interface.",
    category: "Création site web",
    image: "/img/oh-my-food-1.png",
    liveDemo:
      "https://magma73.github.io/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS/",
    sourceCode:
      "https://github.com/Magma73/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS",
    sourceType: "code",
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
    description: "Création d’un site accessible pour une plateforme de photographes freelance.",
    category: "App web",
    image: "/img/fisheye.png",
    liveDemo:
      "https://magma73.github.io/Projet-6-Plateforme-photographes-Fisheye/public/",
    sourceCode:
      "https://github.com/Magma73/Projet-6-Plateforme-photographes-Fisheye",
    sourceType: "code",
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
    description: "Site de recettes permettant aux utilisateurs de rechercher facilement des plats par ingrédients ou mots-clés, avec développement d’un moteur de recherche performant en JavaScript.",
    category: "App web",
    image: "/img/les-petits-plats.png",
    liveDemo:
      "https://magma73.github.io/Projet-7-Developpez-un-algorithme-de-recherche-en-JavaScript/public/",
    sourceCode:
      "https://github.com/Magma73/Projet-7-Developpez-un-algorithme-de-recherche-en-JavaScript",
    sourceType: "code",
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
    description: "Débogage et test d’une fonctionnalité de gestion de notes de frais pour une application SaaS RH afin de la rendre opérationnelle avant son lancement.",
    category: "App web",
    image: "/img/billed.png",
    liveDemo: null,
    sourceCode:
      "https://github.com/Magma73/Projet-9-Debuggez-et-testez-un-SaaS-RH/tree/main",
    sourceType: "code",
    technologies: [
      { name: "jQuery", logo: "/iconsTech/jquery.png" },
      { name: "Express", logo: "/iconsTech/express.png" },
      { name: "Jest", logo: "/iconsTech/jest.png" },
    ],
  },
  {
    id: 8,
    title: "Kasa",
    description: "Refonte d'une plateforme de location d’appartements entre particuliers.",
    category: "App web",
    image: "/img/kasa.png",
    liveDemo: "https://kasa-marine-magnin.netlify.app/",
    sourceCode:
      "https://github.com/Magma73/Projet-11-Developpez-une-application-web-avec-react-et-react-router",
    sourceType: "code",
    technologies: [
      { name: "React", logo: "/iconsTech/react.png" },
      { name: "React Router", logo: "/iconsTech/react-router.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
    ],
  },
  {
    id: 9,
    title: "Learn@Home",
    description: "Définition des besoins et conception d’une application web de soutien scolaire pour faciliter la communication entre élèves et tuteurs bénévoles : élaboration des cas d’usage, user stories et maquettes.",
    category: "Design graphique",
    image: "/img/learn-at-home.png",
    liveDemo: null,
    sourceCode:
      "https://github.com/Magma73/Projet-10-Definissez-les-besoins-pour-une-app-de-soutien-scolaire",
    sourceType: "design",
    technologies: [
      { name: "Figma", logo: "/iconsTech/figma.png" },
      { name: "Trello", logo: "/iconsTech/trello.png" },
      { name: "Flow Mapp", logo: "/iconsTech/flowmapp.png" },
    ],
  },
  {
    id: 10,
    title: "Sport See",
    description: "Développement d’un tableau de bord analytique, permettant aux utilisateurs de suivre leur activité sportive (séances réalisées, calories brûlées, poids, etc.).",
    category: "App web",
    image: "/img/sportsee.png",
    liveDemo: null,
    sourceCode:
      "https://github.com/Magma73/projet-12-developpez-un-tableau-de-bord-analytics-avec-react",
    sourceType: "code",
    technologies: [
      { name: "React", logo: "/iconsTech/react.png" },
      { name: "React Router", logo: "/iconsTech/react-router.png" },
    ],
  },
  {
    id: 11,
    title: "Argent Bank",
    description:
      "Développement d’une application web bancaire, permettant aux clients de se connecter, de gérer leurs comptes et leur profil en ligne.",
    category: "App web",
    image: "/img/argent-bank.png",
    liveDemo: null,
    sourceCode: "https://github.com/Magma73/Projet-13-argent-bank",
    sourceType: "code",
    technologies: [
      { name: "React", logo: "/iconsTech/react.png" },
      { name: "React Router", logo: "/iconsTech/react-router.png" },
      { name: "CSS", logo: "/iconsTech/css.png" },
      { name: "Redux", logo: "/iconsTech/redux.png" },
      { name: "Swagger", logo: "/iconsTech/swagger.png" },
    ],
  },
  {
    id: 12,
    title: "Ouisti'Tree",
    description:
      "Refonte du site pour améliorer la navigation, organiser le contenu selon les besoins des utilisateurs, valoriser l’expertise arboricole et renforcer la visibilité en ligne.",
    category: "Refonte site web",
    image: "/img/ouistitree.png",
    liveDemo: null,
    sourceCode: "https://www.ouistitree.com/",
    sourceType: "refonte",
    technologies: [
      { name: "Wix", logo: "/iconsTech/wix.png" },
    ],
  },
];
