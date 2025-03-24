"use client";

import { useState, useEffect } from "react";

export const LinkHeader = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Detectar a seção ativa durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about-section",
        "catalog-section",
        "courses-section",
        "cadastre-section",
        "diferenciais",
        "structure-section"
      ];
      
      const scrollPosition = window.scrollY + 100; // Offset para melhor detecção
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const getLinkClass = (sectionId: string) => {
    return `font-montserrat text-xs md:text-xs lg:text-sm xl:text-base cursor-pointer transition-colors duration-200 hover:text-primary ${
      activeSection === sectionId ? "font-medium text-primary" : "font-regular text-gray-800"
    }`;
  };

  return (
    <div className="flex flex-row items-center space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-4">
      <p
        className={getLinkClass("about-section")}
        onClick={() => scrollToSection("about-section")}
      >
        Quem somos?
      </p>
      <div className="w-[3px] h-[3px] md:w-[3px] md:h-[3px] lg:w-[4px] lg:h-[4px] xl:w-[6px] xl:h-[6px] rounded-full bg-primary" />
      <p
        className={getLinkClass("courses-section")}
        onClick={() => window.open("https://wellaedu.com.br/", "_blank")}
      >
        Parceria Wella
      </p>
      <div className="w-[3px] h-[3px] md:w-[3px] md:h-[3px] lg:w-[4px] lg:h-[4px] xl:w-[6px] xl:h-[6px] rounded-full bg-primary" />
      <p
        className={getLinkClass("catalog-section")}
        onClick={() => window.open("https://loja.kdistribuidora.com.br/", "_blank")}
      >
        Catálogo
      </p>
      <div className="w-[3px] h-[3px] md:w-[3px] md:h-[3px] lg:w-[4px] lg:h-[4px] xl:w-[6px] xl:h-[6px] rounded-full bg-primary" />
      <p
        className={getLinkClass("courses-section")}
        onClick={() => window.open("https://wellaedu.com.br/", "_blank")}
      >
        Cursos & Capacitação
      </p>
      <div className="w-[3px] h-[3px] md:w-[3px] md:h-[3px] lg:w-[4px] lg:h-[4px] xl:w-[6px] xl:h-[6px] rounded-full bg-primary" />
      <p
        className={getLinkClass("structure-section")}
        onClick={() => scrollToSection("structure-section")}
      >
        Nossa Estrutura
      </p>
      <div className="w-[3px] h-[3px] md:w-[3px] md:h-[3px] lg:w-[4px] lg:h-[4px] xl:w-[6px] xl:h-[6px] rounded-full bg-primary" />
      <p
        className={getLinkClass("footer-section")}
        onClick={() => scrollToSection("footer-section")}
      >
        Fale conosco
      </p>
    </div>
  );
};
