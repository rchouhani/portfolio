import { ProjectCardProps } from "../needs/ProjectCardProps";

export const projects: ProjectCardProps[] = [
  {
    name: "ZeDeN",
    image: "/zeden.jpg",
    deployUrl: "https://www.zeden.net/",
    slug: "zeden",
    learning: ` Pour le moment, en Septembre 2025, j'apprends à connecter une machine hôte à une machine virtuelle.
    A appréhender les différents concepts concernant la communication entre les deux machines.
    Vérifier et modifier les droits d'écriture, de lecture et de modification d'un fichier
    La gestion d'ouverture des ports ainsi que les redirections éventuelles
    Les différents protocoles de communication comme UDP, TCP
    La mise en place d'un fichier de configuration Apache ainsi que sa mise en route`
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
    githubUrl:
      "https://github.com/adatechschool/projet-mobile-surf-rchouhani",
    deployUrl: "",
    slug: "surfin-safari",
    stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "BDD Neon"],
    learning: `    Clean Code pour avoir une fonction, un fichier réutilisable
    Compréhension fine du cycle de vie d’un contexte React et de l’importance du loading pour différer les actions jusqu’à ce que l’état soit stabilisé.
    Maîtrise du pattern useAuth avec contexte pour centraliser l’état de l’utilisateur.
    Expérience pratique sur la sécurité côté front et back, notamment comment protéger les routes en Next.js avec JWT et cookies.`,
  },
];
