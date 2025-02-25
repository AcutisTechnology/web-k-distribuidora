import { Stack } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "../../shared/components/button";

export function CatalogSection() {
  return (
    <div
      id="catalog-section"
      className="bg-background_secondary bg-[url('/images/catalog-background.png')] bg-no-repeat bg-cover bg-center"
    >
      <div className="container flex flex-col mx-auto px-4 py-10 md:px-6 md:py-14">
        {/* Seção superior: Texto e imagem dos celulares */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
          {/* Texto e botão */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="flex flex-row items-center gap-3">
              <Image
                width={69}
                height={69}
                alt="Icone de carrinho"
                src="/images/cart-catalog.png"
              />
              <p className="font-syne font-bold text-2xl md:text-3xl text-white">
                Catálogo completo
              </p>
            </div>
            <p className="mt-5 font-montserrat font-normal text-base md:text-lg text-white">
              Somos uma distribuidora de diversas marcas no ramo de cosméticos,
              atendendo exclusivamente profissionais do setor de beleza na
              Paraíba. Nosso catálogo reúne produtos de alta qualidade,
              cuidadosamente selecionados para atender às demandas do segmento e
              elevar o padrão dos seus serviços.
            </p>
            <Button className="mt-6">
              <p className="font-montserrat font-bold text-white text-sm">
                Ir para catálogo
              </p>
              <Stack className="text-white" size={24} />
            </Button>
          </div>

          {/* Imagem dos celulares */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <Image
              width={500} // Aumentei a largura para telas maiores
              height={500} // Aumentei a altura para telas maiores
              alt="celulares mostrando o catalogo"
              src="/images/smartphones.png"
              className="w-full max-w-[340px] lg:max-w-[500px] h-auto"
            />
          </div>
        </div>

        {/* Seção inferior: Marcas */}
        <div className="mt-10">
          <p className="font-syne font-medium text-base text-white">
            Marcas em nosso portfólio:
          </p>
          <div className="flex flex-row flex-wrap items-center gap-4 md:gap-6 lg:gap-10 mt-6">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl flex items-center justify-center w-full sm:w-[calc(50%-1rem)] md:w-44 h-[79px]"
              >
                <Image
                  width={index === 2 ? 69 : 99}
                  height={60}
                  alt={`Marca ${index + 1}`}
                  src={`/images/marcas/marca${index + 1}.png`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
