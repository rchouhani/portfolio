import { ProjectCardProps } from "../needs/ProjectCardProps";

export const projects: ProjectCardProps[] = [
  {
    name: "ZeDeN",
    image: "/zeden.jpg",
    deployUrl: "https://www.zeden.net/",
    slug: "zeden",
  },
  {
    name: "Click & Cook",
    image: "/click&cook.jpg",
    githubFrontUrl: "https://github.com/Edwige08/click_and_cook_front",
    githubBackUrl: "https://github.com/rchouhani/click_and_cook_back",
    deployUrl: "https://click-and-cook.vercel.app/",
    slug: "click-and-cook",
    stack: ["Next.js", "Django", "PostgreSQL", "BDD Neon"],
    learning: "Gérer la communication front/back",
    improvements: "Améliorer l’UI et ajouter l’authentification",
  },
  {
    name: "Adaopte",
    image: "/adaopte.jpg",
    githubBackUrl: "https://github.com/rchouhani/adaopte_back_tsx",
    githubFrontUrl: "https://github.com/fatydm/adaopte_front-tsx",
    deployUrl: "https://adaopte-rofated.vercel.app/",
    slug: "adaopte",
    stack: ["Next.js", "Django", "PostgreSQL", "BDD Neon"],
    learning: `2️⃣ Apprentissages positifs que tu peux en tirer

Maîtrise d’un custom user model

Tu comprends profondément comment fonctionne l’authentification dans Django.

Tu es capable de personnaliser les modèles standards pour répondre à un besoin métier.

Sécurité et bonnes pratiques JWT

Compréhension de la sécurité côté frontend et backend.

Gestion des cookies sécurisés, httpOnly, sameSite, et des refresh tokens.

Expérience concrète de protection des données utilisateur.

Intégration frontend/backend

Coordination entre Next.js (TS) et Django REST API.

Typage et validation d’API, gestion des erreurs et des états d’authentification.

Compréhension du flux complet de login -> token -> accès aux routes protégées.

Déploiement et production

Gestion des variables d’environnement et secrets.

Résolution de problèmes liés à CORS, HTTPS et différences dev/prod.

Expérience réelle de mise en production sur Vercel.

UX et logique métier

Gestion des pages accessibles seulement si connecté.

Validation côté frontend pour améliorer l’expérience utilisateur.

Mise en place de redirections et feedbacks utilisateurs clairs.`,
    improvements: "Améliorer l’UI et ajouter l’authentification",
  },
  {
    name: "Surfin' Safari",
    image: "/surfinsafari.jpg",
    githubUrl:
      "https://github.com/adatechschool/projet-front-end-conception-de-base-de-donn-es-rchouhani", // deploiement après changement de thème ( vélo )
    deployUrl: "",
    slug: "surfin-safari",
    stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "BDD Neon"],
    learning: "Gérer la communication front/back",
    improvements: "Améliorer l’UI et ajouter l’authentification",
  },
];
