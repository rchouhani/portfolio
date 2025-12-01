import { ArrowRightCircleIcon } from "lucide-react";
import Link from "next/link";

export default function Presentation() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen p-6 text-center">
      <h1 className="text-3xl sm:text-4xl mb-8 text-[#FFFF00]">
        Romain Chouhani
      </h1>

      <div className="max-w-xl w-full p-5 text-[#FFFF00] text-lg sm:text-xl leading-relaxed border border-yellow-300/50 rounded-md">
        <p>
          Passionné de développement web depuis l’adolescence, j’ai décidé après
          20 ans de carrière dans la vente et le management de concrétiser cette
          vocation...
        </p>
      </div>

      <Link href="/home">
        <ArrowRightCircleIcon
          className="mt-10 w-16 h-16 sm:w-20 sm:h-20"
          color="#FFFF00"
        />
      </Link>
    </main>
  );
}
