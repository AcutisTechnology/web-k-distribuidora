import {
  FlowerLotus,
  CheckCircle,
  ShoppingCart,
  ArrowDownRight,
  Stack,
} from "@phosphor-icons/react";
import Image from "next/image";
import { HighlightButton } from "../../shared/components/highlight-button";
import { Button } from "../../shared/components/button";

export function HeroSection() {
  return (
    <div className="relative flex flex-row justify-around mx-auto px-6 py-14 bg-[url('/images/background-white.png')] bg-cover bg-center">
      <div className="flex flex-row gap-14">
        <div className="mr-40 justify-end items-start flex flex-col">
          <p className="font-syne font-bold text-5xl">
            Beleza premium,
            <br /> preço acessível.
          </p>
          <Button>
            Ir para catálogo
            <Stack className="text-white" size={24} />
          </Button>
        </div>

        {/* Botoes de destaque */}
        <div className="z-20 flex flex-col gap-14">
          <HighlightButton
            icon={<FlowerLotus className="text-[#B794F4]" size={24} />}
          >
            Distribuidora de cosméticos
          </HighlightButton>
          <HighlightButton
            icon={<CheckCircle className="text-[#4FD1C5]" size={24} />}
            className="ml-12"
          >
            As melhores marcas
          </HighlightButton>
          <HighlightButton
            icon={<ShoppingCart className="text-[#FC8181]" size={24} />}
            className="ml-8"
          >
            Catálogo completo
          </HighlightButton>
          <HighlightButton
            icon={<ArrowDownRight className="text-[#68D391]" size={24} />}
          >
            Menor preço garantido
          </HighlightButton>
        </div>
      </div>

      <div className="z-10 absolute bottom-0 right-4">
        <Image src="/images/mulher.png" width={400} height={400} alt="Modelo" />
      </div>
      <div className="z-0 absolute right-0 top-0">
        <Image
          src="/images/framer-black.png"
          width={357}
          height={350}
          alt="Framer-black"
        />
      </div>
    </div>
  );
}
