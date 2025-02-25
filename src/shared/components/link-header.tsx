"use client";

export const LinkHeader = () => {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex flex-row items-center space-x-4">
      <p
        className="font-montserrat font-regular cursor-pointer"
        onClick={() => scrollToSection("about-section")}
      >
        Quem somos ?
      </p>
      <div className="w-[6px] h-[6px] rounded-full bg-primary" />
      <p
        className="font-montserrat font-regular cursor-pointer"
        onClick={() => scrollToSection("catalog-section")}
      >
        Nosso catálogo
      </p>
      <div className="w-[6px] h-[6px] rounded-full bg-primary" />
      <p
        className="font-montserrat font-regular cursor-pointer"
        onClick={() => scrollToSection("courses-section")}
      >
        Cursos
      </p>
      <div className="w-[6px] h-[6px] rounded-full bg-primary" />
      <p
        className="font-montserrat font-regular cursor-pointer"
        onClick={() => scrollToSection("cadastre-section")}
      >
        Contato
      </p>
      <div className="w-[6px] h-[6px] rounded-full bg-primary" />
      <p
        className="font-montserrat font-regular cursor-pointer"
        onClick={() => scrollToSection("diferenciais")}
      >
        Diferenciais
      </p>
      <div className="w-[6px] h-[6px] rounded-full bg-primary" />
      <p
        className="font-montserrat font-regular cursor-pointer"
        onClick={() => scrollToSection("structure-section")}
      >
        Estrutura
      </p>
    </div>
  );
};
