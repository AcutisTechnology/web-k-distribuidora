import { useState } from "react";
import { LinkHeader } from "@/shared/components/link-header";
import { User, Stack, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow">
      <div className="flex flex-row items-center justify-between container mx-auto px-6 py-4">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image src="/images/logo.png" width={80} height={80} alt="Logo" />
        </div>

        <div className="hidden lg:block">
          <LinkHeader />
        </div>

        <div className="hidden lg:flex flex-row items-center space-x-4">
          <div
            className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary cursor-pointer"
            onClick={() => router.push("/cadastro")}
          >
            <p className="font-montserrat font-medium">Cadastre-se</p>
            <User size={24} />
          </div>
          <div className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary bg-primary cursor-pointer">
            <p className="font-montserrat font-medium text-white">Catálogo</p>
            <Stack className="text-white" size={24} />
          </div>
        </div>

        <div className="lg:hidden flex flex-row items-center gap-3">
          <div
            className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary cursor-pointer"
            onClick={() => router.push("/cadastro")}
          >
            <p className="font-montserrat font-medium">Cadastre-se</p>
            <User size={24} />
          </div>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-start px-6 space-y-4 my-4">
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer"
            onClick={() => scrollToSection("about-section")}
          >
            Quem somos ?
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer"
            onClick={() => scrollToSection("catalog-section")}
          >
            Nosso catálogo
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer"
            onClick={() => scrollToSection("courses-section")}
          >
            Cursos
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer"
            onClick={() => scrollToSection("cadastre-section")}
          >
            Contato
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer"
            onClick={() => scrollToSection("diferenciais")}
          >
            Diferenciais
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer"
            onClick={() => scrollToSection("structure-section")}
          >
            Estrutura
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
        </div>
      )}
    </header>
  );
}
