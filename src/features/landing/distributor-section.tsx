import Image from "next/image";

export function DistributorSection() {
  return (
    <div
      className="w-full bg-white py-16 md:py-14 relative overflow-hidden"
      id="distributor-section"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Lado esquerdo - Conteúdo textual */}
          <div className="w-full md:w-1/2 flex flex-col relative">
            {/* Badge/Logo de distribuidor oficial */}
            <div className="absolute -top-8 md:-top-16 left-0 w-20 h-20 md:w-28 md:h-28">
              <Image
                src="/images/logo_wella.svg"
                alt="Distribuidor Oficial Wella"
                width={164}
                height={162}
                className="object-contain"
                priority
              />
            </div>

            <div className="pt-16 md:pt-20 mb-6">
              {/* Título com sublinhado */}
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#141414] mb-2 mt-2">
                Somos distribuidor{" "}
                <span className="relative inline-block">
                  oficial da Wella
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#141414]"></div>
                </span>
              </h2>
            </div>

            <p className="font-montserrat text-[#606060] text-base md:text-lg mb-8 max-w-lg">
              Somos os distribuidores exclusivos da Wella na Paraíba, garantindo
              acesso direto aos produtos da marca, incluindo lançamentos em
              primeira mão e condições exclusivas. Leve o melhor da coloração e
              tratamento para seus clientes!
            </p>

            {/* Linha decorativa - mais longa e visível */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-full h-[5px] rounded-full bg-[#C2B8A6] my-4 md:my-10"></div>
              <div className="w-full h-[5px] rounded-full bg-[#C2B8A6] my-4 md:my-10"></div>
              <div className="w-full h-[5px] rounded-full bg-[#C2B8A6] my-4 md:my-10"></div>
            </div>
          </div>

          <Image
            src="/images/wella_conditions.svg"
            alt="Condições e benefícios Wella"
            width={650}
            height={320}
            className="w-full max-w-[650px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
