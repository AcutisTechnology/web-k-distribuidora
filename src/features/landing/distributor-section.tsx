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
            <div className="absolute -top-8 md:-top-16 left-0">
              <Image
                src="/images/logo-wella.png"
                alt="Distribuidor Oficial Wella"
                width={250}
                height={250}
                className="object-contain"
                priority
              />
            </div>

            <div className="pt-16 md:pt-20 mb-6">
              {/* Título com sublinhado */}
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#141414] mb-2 mt-2">
                Parceiros Exclusivos{" "}
                <span className="relative inline-block">
                  Wella na Paraíba
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#141414]"></div>
                </span>
              </h2>
            </div>

            <p className="font-montserrat text-[#606060] text-base md:text-lg mb-8 max-w-lg">
              Somos os únicos representantes da Wella no estado, o que garante
              acesso direto aos melhores produtos da marca, incluindo
              lançamentos em primeira mão e condições exclusivas. Leve para seus
              clientes o que há de mais avançado em coloração e tratamento
              capilar.
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
