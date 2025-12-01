"use client";

import Link from "next/link";
import { Projector, Info, Linkedin, Github, AtSign } from "lucide-react";
import { JSX, useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  mailto?: string;
  icon: JSX.Element;
  external?: boolean;
};

export default function Navbar() {
  const [active, setActive] = useState("projets");

  const navItems: NavItem[] = [
    { label: "Projets", href: "/home", icon: <Projector size={28} className ="w-7 h-7 md:w-12 md:h-12"/> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/romain-chouhani-334b1586/", icon: <Linkedin size={28} className ="w-7 h-7 md:w-12 md:h-12"/>, external: true },
    { label: "GitHub", href: "https://github.com/rchouhani", icon: <Github size={28} className ="w-7 h-7 md:w-12 md:h-12"/>, external: true },
    { label: "À propos", href: "/#about", icon: <Info size={28} className ="w-7 h-7 md:w-12 md:h-12"/> },
    { label: "Mail", mailto: "rchouhani@me.com", icon: <AtSign size={28} className ="w-7 h-7 md:w-12 md:h-12" />, external: true },
  ];

  return (
    <>
      {/* Navbar desktop - icônes noires + tooltip */}
      <nav className="hidden md:flex justify-center gap-25 bg-gray-900 py-4 sticky top-0 z-50">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href || `mailto:${item.mailto}`}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label} // tooltip visible sur desktop
              className="text-black hover:text-yellow-400 transition"
            >
              {item.icon}
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href || "/"}
              title={item.label} // tooltip visible sur desktop
              className="text-black hover:text-yellow-400 transition"
            >
              {item.icon}
            </Link>
          )
        )}
      </nav>

      {/* TabBar mobile - icônes noires seulement */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-900 border-t border-gray-700 flex justify-around py-2 z-50">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActive(item.label.toLowerCase());
              if (typeof window === "undefined") return;

              if (item.external) {
                if (item.mailto) {
                  window.open(`mailto:${item.mailto}`, "_blank");
                } else if (item.href) {
                  window.open(item.href, "_blank");
                }
              } else if (item.href) {
                window.location.href = item.href;
              }
            }}
            className={`flex flex-col items-center transition mt-4 ${
              active === item.label.toLowerCase() ? "text-yellow-400" : "text-black"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </>
  );
}
