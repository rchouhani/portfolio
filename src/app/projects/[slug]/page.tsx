import Navbar from "@/app/components/Navbar";
import { projects } from "@/app/data/projects";
import Image from "next/image";

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-center text-red-500 mt-10">Projet introuvable</div>;
  }

  return (
   <main className="mt-6 max-w-5xl mx-auto p-6 text-[#FFFF00] pb-24 sm:pb-32">
  <h1 className="text-3xl sm:text-4xl mb-6 text-center">{project.name}</h1>

  <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Image */}
    <div className="w-full md:w-96 h-80 md:h-120 relative">
      <Image
        src={project.image || "/placeholder.png"}
        alt={project.name}
        fill
        className="object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Texte */}
    <article className="flex-1 text-center md:text-left">
      {project.stack && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Stack utilisée</h2>
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-gray-700 rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.learning && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Ce que j&apos;ai appris</h2>
          <ul className="list-none whitespace-pre-wrap">
            {project.learning.split("\n").map((line, index) => (
              <li key={index} className="mb-2 before:content-['-'] before:mr-2">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  </section>
</main>
  )
}
