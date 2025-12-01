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
// const scrollAmount = 350; // pixels à défiler, un peu plus que la largeur de la carte

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth; // largeur visible = une carte
      containerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Bouton gauche */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
        aria-label="Projet précédent"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Container scrollable */}
      <div
        ref={containerRef}
  className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 pt-4"
      >
        {projects.map((project, i) => (
          <div key={i} className="flex-shrink-0 w-full snap-center px-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Bouton droit */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
        aria-label="Projet suivant"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
