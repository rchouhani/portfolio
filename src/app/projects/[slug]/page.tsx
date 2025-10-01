import { projects } from "@/app/data/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  console.log("slug reçu :", params.slug);
  const project = projects.find((p) => p.slug === params.slug);
  console.log("slug reçu :", params.slug);

  if (!project) {
    return <div className="text-center text-red-500">Projet introuvable</div>;
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* titre centré */}
      <h1 className="text-6xl font-bold mb-8 text-center w-full">
        {project.name}
      </h1>

      {/* zone en deux colonnes */}
      <section className="flex gap-8 items-start">
        {/* Colonne gauche = textes */}
        <img
          src={project.image}
          alt={project.name}
          className="w-96 rounded-lg shadow-lg"
        />

        {/* Colonne droite = image */}
        <article className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Stack Utilisée</h2>
          <p className="mb-4">( à voir pour chaque projet 112 )</p>

          <h2 className="text-xl font-semibold mb-2">
            Difficultés rencontrées
          </h2>
          <p className="mb-4">( à voir pour chaque projet 112 )</p>

          <h2 className="text-xl font-semibold mb-2">Améliorations à venir</h2>
          <p>( à voir pour chaque projet 112 )</p>
        </article>
      </section>
    </main>
  );
}
