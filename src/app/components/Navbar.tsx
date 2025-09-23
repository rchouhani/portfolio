import { AtSign, Github, Home, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center items-center space-x-70">
      <Home stroke="black" strokeWidth={2} height={50} width={50} />
      <Linkedin stroke="black" strokeWidth={2} height={50} width={50} />
      <Github stroke="black" strokeWidth={2} height={50} width={50} />
      <AtSign stroke="black" strokeWidth={2} height={50} width={50} />
    </nav>
  );
}
