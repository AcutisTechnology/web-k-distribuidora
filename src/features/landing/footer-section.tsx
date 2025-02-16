import BrandCard from "@/shared/components/card-brand";
import {
  CheckCircle,
  CurrencyDollar,
  Sparkle,
  Gift,
} from "@phosphor-icons/react";
import Image from "next/image";

export function FooterSection() {
  return (
    <div className="bg-black bg-[url('/images/footer-background.png')] bg-cover bg-center bg-no-repeat">
      <div className="container flex flex-col mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-14">
          <div className="flex-shrink-0">
            <Image
              src="/images/kchannels.png"
              alt="Estrutura"
              width={437}
              height={430}
            />
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <button className="flex flex-row items-center gap-3 border border-white p-4 rounded-full">
                <p className="text-white font-syne font-bold text-sm">
                  Diferenciais
                </p>
                <Sparkle size={24} color="white" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="font-syne font-bold text-white text-2xl lg:text-3xl">
                Por que escolher a K Distribuidora?
              </h2>
              <p className="font-montserrat font-normal text-base lg:text-lg text-white">
                Diferenciais que fazem da K Distribuidora a melhor opção para
                você,
                <br /> profissional de beleza da Paraíba.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <BrandCard
                icon={<CheckCircle color="white" size={24} />}
                text="Melhores marcas"
              />
              <BrandCard
                icon={<CurrencyDollar color="white" size={24} />}
                text="Melhores preços"
              />
              <BrandCard
                icon={<Gift color="white" size={24} />}
                text="Entrega rápida"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
