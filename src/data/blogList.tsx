type Blog = {
  id: number;
  image: string;
  title: string;
  author: string;
  date: string;
  category: string;
  message: string;
  cta: string;
  //   image: string | null;
  //   link: string | null;
};

export const blogList: Blog[] = [
  {
    id: 1,
    image: "/img/ouistitree.png",
    title:
      "Refonte éditoriale d’un site vitrine pour une présence en ligne plus impactante : Ouisti’Tree, expert arboricole",
    author: "Marine Magnin",
    date: "15/10/2024",
    category: "Développement",
    message:
      "Découvrez les étapes clés de la refonte éditoriale du site vitrine de Ouisti’Tree, expert arboricole, et comment ces actions ont permis de créer une présence en ligne plus impactante. Plongez dans le processus de transformation et les résultats obtenus.",
    cta: "Lire la suite",
  },
  {
    id: 2,
    image: "/img/portfolio.jpg",
    title: "Top 10 des alternatives (zéro déchet) au sapin naturel",
    author: "Marine Magnin",
    date: "25/04/2024",
    category: "Rédaction web",
    message:
      "Marre du traditionnel sapin de noël ? On vous propose 10 alternatives faciles, zéro déchet et originales à faire soi-même.",
    cta: "Lire la suite",
  },
  {
    id: 3,
    image: "/img/portfolio.jpg",
    title: "Les 10 films écolos à (re)voir",
    author: "Marine Magnin",
    date: "26/04/2024",
    category: "Rédaction web",
    message:
      "Vous le sentez ? L’hiver arrive. Et avec lui le froid et l’envie de rester au chaud sous la couette. Installez-vous bien confortablement, on vous présente notre sélection de films sur l’environnement, à voir ou à revoir, et surtout à déguster avec une bonne tasse de chocolat chaud (avec du lait d’amande pour une version végane et gourmande).",
    cta: "Lire la suite",
  },
  {
    id: 4,
    image: "/img/portfolio.jpg",
    title:
      "Le match : sapin naturel ou artificiel ? Lequel choisir cette année ?",
    author: "Marine Magnin",
    date: "25/04/2024",
    category: "Rédaction web",
    message:
      "Que vous soyez plutôt pro-Amish et pour le retour des lampes à huile (à bon entendeur bien sûr), ou à l'inverse, pro-5G et très heureux de savoir que bientôt vous pourrez payer vos courses avec votre paume de main, on a eu envie de vous parler du fameux sapin de Noël.",
    cta: "Lire la suite",
  },
];
