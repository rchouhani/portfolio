'use client'

import { ArrowRightCircleIcon } from "lucide-react";
import Link from "next/link";

export default function Presentation() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl mb-10 text-[#FFFF00]">Romain Chouhani</h1>
      <div className="border-1 max-w-120 w-9/10 p-5 text-[#FFFF00] text-xl font-sans leading-relaxed">
        <p>
          Passionné de développement web depuis l’adolescence, j’ai décidé après
          20 ans de carrière dans la vente et le management de concrétiser cette
          vocation. Aujourd’hui en formation chez Ada Tech School, je suis à la
          recherche d’une alternance de 12 mois en tant que développeur pour
          continuer à apprendre en contribuant activement à des projets d’équipe
          ainsi qu’au développement de projets personnels. Ada Tech School est
          une école qui prône la diversité, l’inclusion et l’accessibilité.
        </p>
      </div>
      <Link href="/home"><ArrowRightCircleIcon className="mt-10" color="#FFFF00" width={100} height={100}/></Link> 
    </main>
  );
}
