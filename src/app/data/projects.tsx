import { ProjectCardProps } from "../needs/ProjectCardProps";

export const projects: ProjectCardProps[] = [
  {
    name: "ZeDeN",
    image: "/zeden.jpg",
    deployUrl: "https://www.zeden.net/",
    slug: "zeden",
    learning: ` Membre depuis Octobre 2024, j'apprends à connecter une machine hôte à une machine virtuelle.
    A appréhender les différents concepts concernant la communication entre les deux machines.
    Vérifier et modifier les droits d'écriture, de lecture et de modification d'un fichier
    La gestion d'ouverture des ports ainsi que les redirections éventuelles
    Les différents protocoles de communication comme UDP, TCP
    La mise en place d'un fichier de configuration Apache ainsi que sa mise en route
    Le correctif de bug au quotidien afin de consolider l'existant`,
  },
  {
     name: "flm-consult",
     image: "/flm-consult.webp",
     githubUrl: "https://github.com/rchouhani/flm-consult",
     deployUrl: "https://flm-consult.vercel.app",
     slug: "flm-consult",
     stack: ["ReactJS", "NextJS", "Typescript", "Javascript", "CSS"],
     learning: `J'ai eu la chance d'être recommandé auprès de cette société naissante afin de réaliser son site vitrine et rendre son expertise présente sur le web. Après avoir penser le design du site, je me suis attelé à organiser l'architecture du site afin de me faire gagner du temps sur l'implémentation du contenu. J'ai ensuite pu me concnentrer sur la compréhension des besoins du client et de ce qui est important pour lui, de la visite du client à l'acte d'achat. D'autres aspects plus légaux se sont aussi révélés. En effet, la règlementation sur l'accessibilité des sites internet doit être pris en compte ainsi que toutes les obligations telles que : - La conformité RGPD - L'accessibilité du site - L'affichage de CGU - l'affichage des CGV -  L'hébergement - L'affichage des mentions légales (SIRET, RCS, Numéro de TVA, Siège social, Capital social, Forme juridique, Dénomination sociale)`,
   },
  {
    name: "Click & Cook",
    image: "/click&cook.jpg",
    githubFrontUrl: "https://github.com/Edwige08/click_and_cook_front",
    githubBackUrl: "https://github.com/rchouhani/click_and_cook_back",
    deployUrl: "https://click-and-cook.vercel.app/",
    slug: "click-and-cook",
    stack: ["Next.js", "Django", "PostgreSQL", "BDD Neon"],
    learning: `    Expérience concrète d’utilisation de Notion pour organiser les tâches, suivre l’avancement et centraliser les informations.
    Mise en place de stand-ups et d’objectifs quotidiens clairs.
    Utilisation d'un support pour visualiser les priorités et planifier les journées.
    Définition claire des tâches individuelles pour nous permettre d'avancer sans blocage.
    Avoir une meilleure priorisation des tâches.
    Savoir se concentrer sur la qualité des features plutôt que la quantité.`,
  },
  {
    name: "Adaopte",
    image: "/adaopte.jpg",
    githubBackUrl: "https://github.com/rchouhani/adaopte_back_tsx",
    githubFrontUrl: "https://github.com/fatydm/adaopte_front-tsx",
    deployUrl: "https://adaopte-rofated.vercel.app/",
    slug: "adaopte",
    stack: ["Next.js", "Django", "PostgreSQL", "BDD Neon"],
    learning: `Compréhension du fonctionnement de l’authentification dans Django.
    Maîtrise d’un custom user model
    Personnalisation des modèles standards pour répondre à un besoin métier.
    Sécurité et bonnes pratiques JWT.
    Compréhension de la sécurité côté frontend et backend.
    Gestion des cookies sécurisés, httpOnly, sameSite, et des refresh tokens.
    Expérience concrète de protection des données utilisateur.
    Intégration frontend/backend
    Typage et validation d’API, gestion des erreurs et des états d’authentification.
    Compréhension du flux complet de login -> token -> accès aux routes protégées.
    Déploiement et production
    Gestion des variables d’environnement et secrets.
    Résolution de problèmes liés à CORS, HTTPS et différences dev/prod.
    Expérience réelle de mise en production sur Vercel.
    Gestion des pages accessibles seulement si connecté.
    Mise en place de redirections et feedbacks utilisateurs clairs.`,
  },
  {
    name: "Surfin' Safari",
    image: "/surfinsafari.jpg",
    githubUrl: "https://github.com/adatechschool/projet-mobile-surf-rchouhani",
    deployUrl: "",
    slug: "surfin-safari",
    stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "BDD Neon"],
    learning: `    Clean Code pour avoir une fonction, un fichier réutilisable
    Compréhension fine du cycle de vie d’un contexte React et de l’importance du loading pour différer les actions jusqu’à ce que l’état soit stabilisé.
    Maîtrise du pattern useAuth avec contexte pour centraliser l’état de l’utilisateur.
    Expérience pratique sur la sécurité côté front et back, notamment comment protéger les routes en Next.js avec JWT et cookies.`,
  },
  // {
  //   name: "Genealogy 3D",
  //   image: "",
  //   githubUrl:
  //     "https://github.com/rchouhani/rchouhani-genealogy-three-d",
  //   deployUrl: "",
  //   slug: "genealogy-3d",
  //   stack: ["Next.js", "Typescript", "Tailwind", "ThreeJS", "PostgreSQL", "BDD Supabase"],
  //   learning: ` La gestion d'un scène 3d avec la librairie Three JS
  //   La gestion de donnée complexe avec les différentes générations et les personnes de références
  //   La gestion des différents états d'une variable qui passe d'un composant à un autre`,
  // },
  //   {
  //   name: "Bike Arena",
  //   image: "",
  //   githubUrl:
  //     "https://github.com/rchouhani/bikeArena",
  //   deployUrl: "",
  //   slug: "bike-arena",
  //   stack: ["Next.js", "React Native", "Typescript", "Styles JS", "Expo", "PostgreSQL", "BDD Supabase"],
  //   learning: ` Appréhender un nouveau langage, orienté mobile avec de nouvelles fonctionnalités comme le tactile par exemple
  //   `,
  // },
    {
    name: "Dog and Tof",
    image: "/dogandtof.png",
    githubUrl:
      "https://github.com/rchouhani/dogAndTof",
    deployUrl: "https://www.dogandtof.fr/",
    slug: "dog-and-tof",
    stack: ["HTML", "CSS"],
    learning: `L'objectif principal de ce projet n'était pas le code mais comprendre le besoin client pour un site vitrine simple et efficace. 
    Le but premier étant d'avoir une visibilité sur le web en relai des réseaux sociaux. J'ai fait le déploiement sur OVH par connaissance. 
    J'ai pu y voir une manière totalement différente de déployer que sur Vercel, qui est un hébergeur serverless principalement. 
    La formule que j'avais préconisé à mon client ne prenait en compte que le HTML, CSS et ne pouvait héberger d'application Node JS ou Next JS, ce avec quoi je travaille habituellement.
    Je n'ai vu cette spécificité qu'à la fin de mon développement, ce qui m'a donné un petit coup de stress. J'ai donc modifié mon approche et ai cherché d'abord une solution adapté pour le déploiement en fonction de la techno que j'utilise.`,
  },
];
