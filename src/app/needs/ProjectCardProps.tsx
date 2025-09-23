export type ProjectCardProps = {
    name: string;
    image: string;
    projectUrl?: string; // explication pour les détails des projets.
    githubUrl?: string;
    githubFrontUrl?: string;
    githubBackUrl?: string;
    deployUrl?: string;
    className?: string;
}