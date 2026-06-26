import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center w-full">
        <h1 className="text-[#FFFF00] text-3xl sm:text-4xl md:text-5xl mt-32 text-center">
          Mes Projets
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-10 px-6 w-full max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </main>
    </>
  );
}
