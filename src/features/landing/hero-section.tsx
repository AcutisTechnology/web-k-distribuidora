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
    <div className="relative flex flex-col justify-between mx-auto px-4 py-8 bg-[url('/images/hero-background.png')] bg-cover bg-center">
      <div className="container flex flex-col mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col text-left">
            <div className="w-32 h-1 bg-[#141414] mb-6" />
            <h1 className="font-syne font-bold text-2xl lg:text-5xl text-[#141414] mb-2">
              Escolha de quem
            </h1>
            <div className="relative">
              <h1 className="font-syne font-bold text-2xl lg:text-5xl text-[#141414] mb-4">
                valoriza qualidade.
              </h1>
            </div>
            <p className="text-[#606060] font-montserrat text-sm mb-6">
              Condições exclusivas para cabeleireiros, barbearias e salões.
            </p>
            {/* Botão personalizado */}
            <div
              onClick={() => scrollToSection("diferenciais")}
              className="flex items-center justify-center px-6 py-3 mb-8 bg-[#a89777] text-white rounded-lg cursor-pointer hover:bg-[#97876a] transition-colors w-fit"
            >
              <span className="font-montserrat font-medium text-sm">
                Veja nossos diferenciais
              </span>
            </div>

            {/* Imagem dos produtos para mobile */}
            <div className="relative w-full h-[300px] mb-8 lg:hidden -right-10">
              <Image
                src="/images/wella-product.png"
                alt="Produtos Wella"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Cards de benefícios */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 md:w-1/2">
              <div className="bg-white md:p-8 p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
                <ShieldCheck className="text-[#141414] mb-2" size={24} />
                <p className="font-montserrat text-sm">
                  Distribuidor oficial Wella Professionals na Paraíba
                </p>
              </div>
              <div className="bg-white md:p-8 p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
                <Target className="text-[#141414] mb-2" size={24} />
                <p className="font-montserrat text-sm">Suporte e treinamento</p>
              </div>
              <div className="bg-white md:p-8 p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
                <Stack className="text-[#141414] mb-2" size={24} />
                <p className="font-montserrat text-sm">
                  Entrega rápida e segura
                </p>
              </div>
              <div className="md:mt-5">
                <Image
                  src="/images/logo-marrom.svg"
                  width={90}
                  height={90}
                  alt="Logo K Distribuidora"
                />
              </div>
            </div>
          </div>

          {/* Background e imagem para desktop */}
          <div className="absolute right-0 top-0 bottom-0 w-[500px] bg-[#a89777] rounded-l-full opacity-90 -z-10 hidden lg:block" />
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <Image
              src="/images/wella-product.png"
              width={780}
              height={700}
              alt="Produtos Wella"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
