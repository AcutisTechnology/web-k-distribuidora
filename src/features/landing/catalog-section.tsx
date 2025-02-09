import { Stack } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "../../shared/components/button";

export function CatalogSection() {
  return (
    <div className="bg-background_secondary">
      <div className="container flex flex-col mx-auto px-6 py-14 justify-around">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col items-start w-1/2">
            <div className="flex flex-row items-center gap-3">
              <Image
                width={69}
                height={69}
                alt="Icone de carrinho"
                src="/images/cart-catalog.png"
              />
              <p className="font-syne font-bold text-3xl text-white">
                Catálogo completo
              </p>
            </div>
            <p className="mt-5 font-montserrat font-normal text-lg text-white">
              Somos uma distribuidora de diversas marcas no ramo de cosméticos,
              atendendo exclusivamente profissionais do setor de beleza na
              Paraíba. Nosso catálogo reúne produtos de alta qualidade,
              cuidadosamente selecionados para atender às demandas do segmento e
              elevar o padrão dos seus serviços.
            </p>
            <Button>
              Ir para catálogo
              <Stack className="text-white" size={24} />
            </Button>
          </div>

          <div>
            <Image
              width={340}
              height={340}
              alt="celulares mostrando o catalogo"
              src="/images/smartphones.png"
            />
          </div>
        </div>

        <div>
          <p className="font-syne font-medium text-base text-white">
            Marcas em nosso portfólio:
          </p>
          <div className="flex flex-row items-center gap-10 mt-6">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl flex items-center justify-center w-44 h-[79px]"
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
