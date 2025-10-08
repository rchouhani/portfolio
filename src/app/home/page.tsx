import Carroussel from "../components/Carroussel";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-col items-center">
        <h1 className="text-[#FFFF00] text-3xl mt-15 -mb-15 text-center colo">Mes Projets</h1>
        <Carroussel projects={projects} />
      </main>
      <Footer />
    </>
  );
}
