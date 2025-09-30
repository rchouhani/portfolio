import { AtSign, Github, Home, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center items-center space-x-70">
      <a href="/" aria-label="Revenir à la page d'accueil"><Home stroke="black" strokeWidth={2} height={50} width={50} /></a>
      <a href="https://www.linkedin.com/in/romain-chouhani-334b1586/" aria-label="Page Linked In de Romain Chouhani"><Linkedin stroke="black" strokeWidth={2} height={50} width={50} /></a>
      <a href="https://github.com/rchouhani" aria-label="Profil Github de Romain Chouhani"><Github stroke="black" strokeWidth={2} height={50} width={50} /></a>
      <a href="mailto:rchouhani@me.com" aria-label="Envoyer un mail à Romain Chouhani"><AtSign stroke="black" strokeWidth={2} height={50} width={50} /></a>
    </nav>
  );
}