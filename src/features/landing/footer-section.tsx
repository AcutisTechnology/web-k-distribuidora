import BrandCard from "@/shared/components/card-brand";
import {
  CheckCircle,
  CurrencyDollar,
  Sparkle,
  Gift
} from "@phosphor-icons/react";
import Image from "next/image";

export function FooterSection() {
  return (
    <footer>
      {/* Seção de diferenciais */}
      <div
        id="diferenciais"
        className="bg-black bg-[url('/images/footer-background.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="container flex flex-col mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-10 lg:gap-14">
            <div className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[437px]">
              <Image
                src="/images/kchannels.png"
                alt="Estrutura"
                width={437}
                height={430}
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 w-full">
              <div>
                <button className="flex flex-row items-center gap-2 md:gap-3 border border-white p-3 md:p-4 rounded-full">
                  <p className="text-white font-syne font-bold text-xs sm:text-sm">
                    Diferenciais
                  </p>
                  <Sparkle size={20} color="white" />
                </button>
              </div>

              <div className="flex flex-col gap-3 md:gap-5">
                <h2 className="font-syne font-bold text-white text-xl sm:text-2xl lg:text-3xl">
                O que torna a K Distribuidora sua maior aliada?
                </h2>
                <p className="font-montserrat font-normal text-sm sm:text-base lg:text-lg text-white">
                Produtos de alta performance, marcas renomadas e preços que fazem a diferença no seu negócio.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
                <BrandCard
                  icon={<CheckCircle color="white" size={20} className="sm:size-[24px]" />}
                  text="Melhores marcas"
                  className="transform-gpu"
                />
                <BrandCard
                  icon={<CurrencyDollar color="white" size={20} className="sm:size-[24px]" />}
                  text="Preços Exclusivos"
                  className="transform-gpu"
                />
                <BrandCard
                  icon={<Gift color="white" size={20} className="sm:size-[24px]" />}
                  text="Atendimento Especializado"
                  className="transform-gpu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
