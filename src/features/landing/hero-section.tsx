import { Button } from "@/shared/components/button";
import { HighlightButton } from "@/shared/components/highlight-button";
import {
  FlowerLotus,
  Stack,
  CheckCircle,
  ShoppingCart,
  ArrowDownRight,
} from "@phosphor-icons/react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative flex flex-col lg:flex-row justify-around mx-auto px-6 py-14 bg-[url('/images/background-white.png')] bg-cover bg-center">
      <div className="flex flex-col lg:flex-row gap-14">
        <div className="lg:mr-40 justify-end items-start flex flex-col text-center lg:text-left">
          <p className="font-syne font-bold text-3xl lg:text-5xl">
            Beleza premium,
            <br /> preço acessível.
          </p>
          <Button className="mt-4 lg:mt-7">
            Ir para catálogo
            <Stack className="text-white" size={24} />
          </Button>
        </div>

        {/* Botoes de destaque */}
        <div className="z-20 flex flex-col gap-6 lg:gap-14 mt-8 lg:mt-0">
          <HighlightButton
            icon={<FlowerLotus className="text-[#B794F4]" size={24} />}
          >
            Distribuidora de cosméticos
          </HighlightButton>
          <HighlightButton
            icon={<CheckCircle className="text-[#4FD1C5]" size={24} />}
            className="lg:ml-12"
          >
            As melhores marcas
          </HighlightButton>
          <HighlightButton
            icon={<ShoppingCart className="text-[#FC8181]" size={24} />}
            className="lg:ml-8"
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

      {/* Imagens */}
      <div className="absolute bottom-0 right-4 hidden lg:block z-10">
        <Image src="/images/mulher.png" width={400} height={400} alt="Modelo" />
      </div>
      <div className="absolute right-0 top-0 hidden lg:block z-0">
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
