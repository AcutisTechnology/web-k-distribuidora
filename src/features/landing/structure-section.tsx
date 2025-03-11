import { BuildingOffice } from "@phosphor-icons/react";
import Image from "next/image";

export function StuctureSection() {
  return (
    <div id="structure-section" className="relative overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="container flex flex-col mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 lg:gap-16 z-10 relative">
          <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-2/3">
            <div>
              <button className="bg-[#EBE6DF] rounded-full h-10 sm:h-12 px-4 sm:px-6 items-center justify-center gap-2 sm:gap-3 flex flex-row border border-border_primary">
                <p className="font-syne font-bold text-xs sm:text-sm text-[#A99878]">
                  Pensando para você
                </p>
                <BuildingOffice size={20} className="text-[#A99878] sm:size-[24px]" />
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-syne font-bold">
                Nossa estrutura
              </h2>
              <p className="font-montserrat text-[#333333] text-sm sm:text-base lg:text-lg font-normal">
                Nossa distribuidora está localizada em João Pessoa - PB, no
                bairro de Manaíra. Oferecemos um espaço com 245 m² com sala de
                atendimento, treinamento, reunião e um estoque bem estruturado.
                Será um prazer recebê-lo em nossa casa! Agende a sua visita e
                venha nos conhecer de perto.
              </p>
              <Image
                src="/images/line-structure.png"
                width={356}
                height={7}
                alt="linha"
                className="w-full max-w-[356px]"
              />
            </div>
          </div>

          <div className="w-full max-w-[450px] lg:max-w-none lg:w-1/3 mt-6 lg:mt-0">
            <Image
              src="/images/estrutura.png"
              width={590}
              height={549}
              alt="Nossa estrutura"
              className="w-full h-auto mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      <Image
        src="/images/rectangle1.png"
        className="absolute left-0 right-0 top-0 z-0 hidden lg:block"
        width={250}
        height={100}
        alt="retangulo 1"
      />
    </div>
  );
}
