"use client";

import Link from "next/link";
import { ProjectCardProps } from "../needs/ProjectCardProps";
import Image from "next/image";
import { ExternalLink, Github, Info } from "lucide-react";

export default function ProjectCard({
  name,
  slug,
  image,
  githubBackUrl,
  githubFrontUrl,
  githubUrl,
  deployUrl,
}: ProjectCardProps) {
  function GithubButton({
    url,
    isBack,
    ariaLabel,
  }: {
    url?: string;
    isBack?: boolean;
    ariaLabel?: string;
  }) {
    if (!url) return null;

    const handleClick = () => {
      window.open(url, "_blank");
    };

    return (
      <button
        onClick={handleClick}
        title={ariaLabel}
        aria-label={ariaLabel}
        className={`transition hover:opacity-80 cursor-pointer ${
          isBack ? "text-blue-700" : "text-white"
        }`}
      >
        <Github size={28} />
      </button>
    );
  }

  return (
<div className="relative border-2 border-yellow-500 rounded-lg mt-10 mb-10 mx-5 
                w-72 sm:w-80 md:w-96 
                h-96 sm:h-[28rem] md:h-[32rem] 
                bg-gray-800 hover:scale-105 transition-transform duration-300">      {/* Image cliquable */}
      {slug ? (
        <Link
          href={`/projects/${slug}`}
          title={`Voir le projet ${name}`}
          aria-label={`Voir le projet ${name}`}
          className="block w-full h-full"
        >
          <Image
            src={image || "/placeholder.png"}
            alt={name}
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-lg"
          />
        </Link>
      ) : (
        <div className="block w-full h-full">
          <Image
            src={image || "/placeholder.png"}
            alt={name}
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}

      {/* Footer avec liens */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 bg-black/60 p-6">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            title="Voir le repository GitHub"
            aria-label="Voir le repository GitHub"
            className="text-white hover:text-gray-300 transition"
          >
            <Github size={28} />
          </Link>
        )}

        <GithubButton url={githubFrontUrl} isBack={false} ariaLabel="Voir le repository Front" />
        <GithubButton url={githubBackUrl} isBack={true} ariaLabel="Voir le repository Back" />

        {deployUrl && (
          <Link
            href={deployUrl}
            target="_blank"
            title="Voir le site déployé"
            aria-label="Voir le site déployé"
            className="text-white hover:text-gray-300 transition"
          >
            <ExternalLink size={28} />
          </Link>
        )}

        {slug ? (
          <Link
            href={`/projects/${slug}`}
            title="Voir les détails du projet"
            aria-label="Voir les détails du projet"
            className="text-white hover:text-gray-300 transition"
          >
            <Info size={28} />
          </Link>
        ) : (
          <span className="text-gray-500 cursor-not-allowed" title="Page non disponible">
            <Info size={28} />
          </span>
        )}
      </div>
    </div>
  );
}
