import { Stack, Target, ShieldCheck } from "@phosphor-icons/react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between mx-auto px-6 py-8 bg-[url('/images/hero-background.png')] bg-cover bg-center">
      <div className="container flex flex-col lg:flex-row justify-between mx-auto px-6 py-14 w-full">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:max-w-xl justify-start items-start flex flex-col text-left">
            <div className="w-32 h-1 bg-[#141414] mb-6" />
            <h1 className="font-syne font-bold text-3xl lg:text-5xl text-[#141414] mb-2">
              Feitos para
            </h1>
            <div className="relative">
              <h1 className="font-syne font-bold text-3xl lg:text-5xl text-[#141414] mb-4">
                Especialistas em Beleza
              </h1>
            </div>
            <p className="text-[#606060] font-montserrat mb-8">
              Escolha de quem valoriza qualidade.
            </p>
            {/* Botão personalizado */}
            <div
              onClick={() => scrollToSection("diferenciais")}
              className="flex items-center justify-center px-8 py-3 mb-12 bg-[#a89777] text-white rounded-lg cursor-pointer hover:bg-[#97876a] transition-colors"
            >
              <span className="font-montserrat font-medium text-sm">
                Saiba mais sobre nossos diferenciais
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center shadow-sm">
                <ShieldCheck className="text-[#141414] mb-2" size={24} />
                <p className="font-montserrat text-sm">
                  Distribuidor oficial Wella Professionals na Paraíba
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center shadow-sm">
                <Target className="text-[#141414] mb-2" size={24} />
                <p className="font-montserrat text-sm">Suporte e treinamento</p>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center shadow-sm">
                <Stack className="text-[#141414] mb-2" size={24} />
                <p className="font-montserrat text-sm">
                  Entrega rápida e segura
                </p>
              </div>
            </div>
            {/* Logo
            <Image
              src="/images/logo-marrom.svg"
              width={90}
              height={90}
              alt="Logo K Distribuidora"
              className="max-h-[50px] sm:max-h-[60px] md:max-h-[65px] lg:max-h-[80px] mt-2"
            /> */}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-[500px] bg-[#a89777] rounded-l-full opacity-90 -z-10" />
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <Image
              src="/images/wella-product.png"
              width={780}
              height={700}
              alt="Produtos Wella"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
