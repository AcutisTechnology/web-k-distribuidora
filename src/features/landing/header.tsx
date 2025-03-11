import { useState, useEffect } from "react";
import { LinkHeader } from "@/shared/components/link-header";
import { User, Stack, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar tamanho da tela para ajustar o layout
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    // Detectar scroll para adicionar sombra
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Configurar os listeners
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Limpar os listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow'}`}>
      <div className="flex flex-row items-center justify-between container mx-auto px-2 sm:px-4 md:px-6 py-2 md:py-3 lg:py-4">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image 
            src="/images/logo.png" 
            width={isMediumScreen ? 80 : 90} 
            height={isMediumScreen ? 80 : 90} 
            alt="Logo"
            className="max-h-[50px] sm:max-h-[60px] md:max-h-[65px] lg:max-h-[80px]"
          />
        </div>

        {/* Menu para desktop */}
        <div className="hidden lg:block">
          <LinkHeader />
        </div>

        {/* Botões para desktop e tablet */}
        <div className="hidden md:flex flex-row items-center space-x-2 lg:space-x-4">
          <div
            className="flex flex-row items-center gap-2 lg:gap-3 rounded-full border-[1px] h-10 lg:h-12 px-3 lg:px-5 border-border_primary cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => router.push("/cadastro")}
          >
            <p className="font-montserrat font-medium text-xs md:text-xs lg:text-sm xl:text-base whitespace-nowrap">Cadastre-se</p>
            <User size={isMediumScreen ? 18 : 24} />
          </div>
          <div 
            className="flex flex-row items-center gap-2 lg:gap-3 rounded-full border-[1px] h-10 lg:h-12 px-3 lg:px-5 border-border_primary bg-primary cursor-pointer hover:bg-opacity-90 transition-colors"
            onClick={() => router.push("/catalogo")}
          >
            <p className="font-montserrat font-medium text-white text-xs md:text-xs lg:text-sm xl:text-base whitespace-nowrap">Catálogo</p>
            <Stack className="text-white" size={isMediumScreen ? 18 : 24} />
          </div>
        </div>

        {/* Botões para mobile */}
        <div className="md:hidden flex flex-row items-center gap-2">
          <div
            className="flex flex-row items-center gap-2 rounded-full border-[1px] h-9 px-3 border-border_primary cursor-pointer"
            onClick={() => router.push("/cadastro")}
          >
            <p className="font-montserrat font-medium text-xs sm:text-sm">Cadastre-se</p>
            <User size={18} />
          </div>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 space-y-4 my-4 animate-fadeIn">
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("about-section")}
          >
            Quem somos ?
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("catalog-section")}
          >
            Nosso catálogo
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("courses-section")}
          >
            Cursos
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("cadastre-section")}
          >
            Contato
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("diferenciais")}
          >
            Diferenciais
          </p>
          <div className="w-full h-[1px] bg-[#C2B8A6]" />
          <p
            className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
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
