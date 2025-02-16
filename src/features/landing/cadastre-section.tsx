import { LinkSimple, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";

export function CadastreSection() {
  return (
    <div className="container flex flex-col mx-auto px-6 py-14 justify-around">
      <div className="bg-[#141414] p-6 md:p-12 rounded-3xl relative bg-[url('/images/background-contact.png')] bg-cover bg-center">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col gap-5">
            <h3 className="font-syne font-bold text-white text-2xl lg:text-3xl">
              Cadastre-se no nosso canal ou entre em contato
            </h3>
            <p className="font-montserrat text-normal text-white text-base lg:text-xl">
              Nossa venda é exclusiva para profissionais da beleza no estado da
              Paraíba, caso você se enquadre e tenha interesse de compra de
              nossos produtos, preencha o formulário a seguir ou então fale
              conosco através do WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-16">
            <button className="flex flex-row gap-2 bg-[#ffffff] px-6 py-5 rounded-full">
              <p className="font-montserrat font-bold text-[#A99878] text-base">
                Cadastre-se no nosso canal
              </p>
              <LinkSimple size={24} className="text-[#A99878]" />
            </button>
            <button className="flex flex-row gap-2 bg-white bg-opacity-25 px-6 py-5 rounded-full border border-border_primary">
              <p className="font-montserrat font-bold text-white text-base">
                Contato por WhatsApp
              </p>
              <WhatsappLogo size={24} color="white" />
            </button>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-40 h-40 lg:w-72 lg:h-72 hidden lg:block">
          <Image
            src="/images/mao-whatsapp.png"
            layout="fill"
            objectFit="contain"
            alt="Mão segurando celular com WhatsApp aberto"
          />
        </div>
      </div>
    </div>
  );
}
