import { useState } from "react";
import { LinkHeader } from "@/shared/components/link-header";
import { User, Stack, List, X } from "@phosphor-icons/react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow">
      <div className="flex flex-row items-center justify-between container mx-auto px-6 py-4">
        <Image src="/images/logo.png" width={80} height={80} alt="Logo" />

        <div className="hidden lg:block">
          <LinkHeader />
        </div>

        <div className="hidden lg:flex flex-row items-center space-x-4">
          <div className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary">
            <p className="font-montserrat font-medium">Cadastre-se</p>
            <User size={24} />
          </div>
          <div className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary bg-primary">
            <p className="font-montserrat font-medium text-white">Catálogo</p>
            <Stack className="text-white" size={24} />
          </div>
        </div>

        <div className="lg:hidden flex flex-row items-center gap-3">
          <div className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary">
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
          <p className="font-montserrat font-normal text-base text-black">
            Quem somos ?
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p className="font-montserrat font-normal text-base text-black">
            Nosso catálogo
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p className="font-montserrat font-normal text-base text-black">
            Cursos
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p className="font-montserrat font-normal text-base text-black">
            Contato
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p className="font-montserrat font-normal text-base text-black">
            Diferenciais
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p className="font-montserrat font-normal text-base text-black">
            Estrutura
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
        </div>
      )}
    </header>
  );
}
