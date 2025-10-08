import Navbar from "@/app/components/Navbar";
import { projects } from "@/app/data/projects";
import Image from "next/image";

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);
  console.log("slug reçu :", project);

  if (!project) {
    return <div className="text-center text-red-500">Projet introuvable</div>;
  }

  return (
      <main className="mt-6 max-w-5xl mx-auto p-6 text-[#FFFF00]">
        {/* titre centré */}
        <h1 className="text-3xl mb-8 text-center w-full">
          {project.name}
        </h1>

        {/* zone en deux colonnes */}
        <section className="flex gap-8 items-start">
          {/* Colonne gauche = textes */}
          <div className="relative w-96 h-120">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Colonne droite = image */}
          <article className="flex-1 w-96">
            <h2 className="text-xl font-semibold mb-2">Stack Utilisée</h2>
            <ul className="mb-4">
              {project.stack?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2">
              Ce que j&apos;en ai appris
            </h2>
            <ul className="mb-4 list-none whitespace-pre-wrap overflow-y-auto">
              {project.learning?.split("\n").map((line, index) => (
                <li key={index} className="before:content-['-'] before:mr-2">
                  {line}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
  );
}
