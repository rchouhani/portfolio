"use client";

import Link from "next/link";
import { ProjectCardProps } from "../needs/ProjectCardProps";
import Image from "next/image";
import { ExternalLink, Github, Projector } from "lucide-react";

export default function ProjectCard({
  name,
  slug,
  image,
  githubBackUrl,
  githubFrontUrl,
  githubUrl,
  deployUrl,
}: ProjectCardProps) {

  function GithubButton({ url, isBack }: { url?: string; isBack?: boolean }) {
    if (!url) return null;

    const handleClick = () => {
        window.open(url, "_blank");
    };
    return (
      <button
        onClick={handleClick}
        className={`transition hover:opacity-80 cursor-pointer pointer-events-auto ${
          isBack ? "text-blue-700" : "text-white"
        }`}
      >
        <Github size={28} />
      </button>
    );
  }

  return (
    <div className="relative group border-2 border-yellow-500 h-96 w-72 rounded-lg mt-30 mb-30 mx-20 bg-gray-800">
       {slug ? (
        <Link href={`/projects/${slug}`} onClick={() => console.log("clicked", slug)}> 
          <Image
            src={image || "/placeholder.png"} // fallback si image vide
            alt={name}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 rounded-lg cursor-pointer"
          />
          <Projector />
        </Link>
      ) : (
        <div>
          <Image
            src={image || "/placeholder.png"}
            alt={name}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 rounded-lg"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-4 pointer-events-none group-hover:pointer-events-auto">
        <h3 className="text-white text-xl font-semibold">{name}</h3>

        <div className="flex gap-6">
          {/* Repo Github simple*/}
          {githubUrl && (
            <Link
              href={githubUrl || "#"}
              target="_blank"
              className="text-white hover:text-gray-300 transition cursor-pointer pointer-events-auto"
            >
              <Github size={28} />
            </Link>
          )}

          <GithubButton url={githubFrontUrl} isBack={false}/>
          <GithubButton url={githubBackUrl} isBack={true}/>

          {deployUrl && (
            <Link
              href={deployUrl}
              target="_blank"
              className="text-white hover:text-gray-300 transition cursor-pointer pointer-events-auto"
            >
              <ExternalLink size={28} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
