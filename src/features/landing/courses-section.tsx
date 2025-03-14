import { Books, Play } from "@phosphor-icons/react";
import Image from "next/image";

export function CoursesSection() {
  return (
    <div
      id="courses-section"
      className="container flex flex-col mx-auto px-6 py-14 justify-around relative"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <Image
          src="/images/celular-mao.png"
          width={326}
          height={398}
          alt="Celular na mao"
          className="mx-auto lg:mx-0"
        />
        <div className="flex flex-col gap-5 justify-between max-w-full lg:max-w-lg">
          <div>
            <button className="bg-[#EBE6DF] rounded-full h-12 px-6 items-center justify-center gap-3 flex flex-row border border-border_primary">
              <p className="font-syne font-bold text-sm text-[#A99878]">
                Aprendizado
              </p>
              <Books size={24} className="text-[#A99878]" />
            </button>
            <h2 className="font-syne font-bold text-black text-2xl lg:text-[32px] mt-5">
              Cursos
            </h2>
            <p className="text-[#33333] text-base lg:text-xl font-montserrat font-normal mt-5">
              Oferecemos treinamentos personalizados, que podem ser realizados
              de forma presencial, por agendamento com nossos educadores ou em
              seminários virtuais, garantindo todo o suporte necessário para o
              sucesso do seu trabalho.
            </p>
          </div>

          <div className="flex justify-start lg:justify-start">
            <button 
              className="bg-black rounded-full h-12 px-6 items-center justify-center gap-3 flex flex-row w-auto"
              onClick={() => window.open("https://wellaedu.com.br/", "_blank")}
            >
              <p className="font-syne font-bold text-sm text-white">
                Ir para cursos
              </p>
              <Play size={24} className="text-white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 absolute top-0 right-0">
          <div className="relative w-auto h-auto">
            <Image
              src="/images/linha.png"
              alt="linha"
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          </div>
          <div className="relative w-auto h-auto mt-2">
            <Image
              src="/images/cursos.png"
              alt="cursos"
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
