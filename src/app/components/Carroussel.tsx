"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { ProjectCardProps } from "../needs/ProjectCardProps";

type CarouselProps = {
  projects: ProjectCardProps[];
};

export default function Carroussel({ projects }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300; // pixels à faire défiler
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-[900px] mx-auto">
      {/* Bouton gauche */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Container scrollable */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 px-10"
      >
        {projects.map((project, i) => (
          <div key={i} className="flex-shrink-0">
          <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Bouton droit */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
