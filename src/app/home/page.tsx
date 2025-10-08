import Carroussel from "../components/Carroussel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <h1 className="text-3xl mt-15 -mb-15 text-center">Mes Projets</h1>
        <Carroussel projects={projects} />
      </main>
      <Footer />
    </>
  );
}
