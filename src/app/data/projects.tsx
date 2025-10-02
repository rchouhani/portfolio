import { ProjectCardProps } from "../needs/ProjectCardProps";

export const projects: ProjectCardProps[] = [
  {
    name: "ZeDeN",
    image: "/zeden.jpg",
    deployUrl: "https://www.zeden.net/",
  },
  {
    name: "Click & Cook",
    image: "/click&cook.jpg",
    githubFrontUrl: "https://github.com/Edwige08/click_and_cook_front",
    githubBackUrl: "https://github.com/rchouhani/click_and_cook_back",
    deployUrl: "https://click-and-cook.vercel.app/",
    slug: "click-and-cook",
  },
  {
    name: "Adaopte",
    image: "/adaopte.jpg",
    githubBackUrl: "https://github.com/rchouhani/adaopte_back_tsx",
    githubFrontUrl: "https://github.com/fatydm/adaopte_front-tsx",
    deployUrl: "https://adaopte-rofated.vercel.app/",
    slug: "adaopte",
  },
  {
    name: "Surfin' Safari",
    image: "/surfinsafari.jpg",
    githubUrl:
      "https://github.com/adatechschool/projet-front-end-conception-de-base-de-donn-es-rchouhani", // deploiement après changement de thème ( vélo )
    deployUrl: "",
    slug: "surfin-safari",
  },
];
