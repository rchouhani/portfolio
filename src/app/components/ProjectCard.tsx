"use client";

import Link from "next/link";
import { ProjectCardProps } from "../needs/ProjectCardProps";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  name,
  image,
  projectUrl,
  githubBackUrl,
  githubFrontUrl,
  githubUrl,
  deployUrl,
}: ProjectCardProps) {

  function GithubButton({ url, isBack }: { url?: string; isBack?: boolean }) {
    if (!url) return null;

    const handleClick = () => {
      if (Array.isArray(url)) {
        url.forEach((u) => window.open(u, "_blank"));
      } else {
        window.open(url, "_blank");
      }
    };
    return (
      <button
        onClick={handleClick}
        className={`transition hover:opacity-80 cursor-pointer ${
          isBack ? "text-blue-700" : "text-white"
        }`}
      >
        <Github size={28} />
      </button>
    );
  }

  return (
    <div className="relative group border-2 border-yellow-500 h-96 w-72 rounded-lg mt-30 mb-30 mx-20 bg-gray-800">
      <Link href={projectUrl || "#"} target="_blank">
        <Image
          src={image}
          alt={name}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 rounded-lg"
        />
      </Link>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-4">
        <h3 className="text-white text-xl font-semibold">{name}</h3>

        <div className="flex gap-6">
          {/* Repo Github simple*/}
          {githubUrl && (
            <Link
              href={githubUrl || "#"}
              target="_blank"
              className="text-white hover:text-gray-300 transition"
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
              className="text-white hover:test-gray-300 transition"
            >
              <ExternalLink size={28} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
