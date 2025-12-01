import Carroussel from "../components/Carroussel";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-col items-center w-full">
        <h1 className="text-[#FFFF00] text-3xl sm:text-4xl md:text-5xl mt-32 text-center">
          Mes Projets
        </h1>
        <Carroussel projects={projects} />
      </main>
    </>
  );
}
