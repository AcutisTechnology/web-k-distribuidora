import { BuildingOffice } from "@phosphor-icons/react";
import Image from "next/image";

export function StuctureSection() {
  return (
    <div id="structure-section" className="relative overflow-hidden">
      <div className="container flex flex-col mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 z-10">
          <div className="flex flex-col gap-5 lg:w-2/3">
            <div>
              <button className="bg-[#EBE6DF] rounded-full h-12 px-6 items-center justify-center gap-3 flex flex-row border border-border_primary">
                <p className="font-syne font-bold text-sm text-[#A99878]">
                  Pensando para você
                </p>
                <BuildingOffice size={24} className="text-[#A99878]" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-3xl text-black font-syne font-bold">
                Nossa estrutura
              </h2>
              <p className="font-montserrat text-[#33333] text-base lg:text-xl font-normal">
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
              />
            </div>
          </div>

          <Image
            src="/images/estrutura.png"
            width={590}
            height={549}
            alt="Nossa estrutura"
            className="mx-auto lg:mx-0"
          />
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
