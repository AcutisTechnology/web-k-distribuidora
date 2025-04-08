import Image from "next/image";

export function AboutSection() {
  return (
    <div
      id="about-section"
      className="container flex flex-col lg:flex-row mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-14 md:px-6 gap-6 sm:gap-8 lg:gap-16 justify-between w-full"
    >
      <Image
        src="/images/rectangle1.png"
        className="absolute left-0 z-0 hidden lg:block"
        width={250}
        height={100}
        alt="retangulo 1"
      />

      <Image
        src="/images/rectangle2.png"
        className="absolute right-0 z-0 hidden lg:block"
        width={450}
        height={100}
        alt="retangulo 2"
      />
      {/* Seção de texto e logo */}
      <div className="lg:w-1/2 z-10">
        <Image
          src="/images/logo.svg"
          width={90}
          height={90}
          alt="Logo"
          className="max-h-[50px] sm:max-h-[60px] md:max-h-[65px] lg:max-h-[80px]"
        />

        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <p className="text-title font-syne font-semibold text-xl sm:text-2xl md:text-3xl">
            Quem somos?
          </p>
          <p className="text-description font-montserrat font-normal text-sm sm:text-base md:text-lg mt-4 sm:mt-5 md:mt-6 lg:mt-8">
            São mais de 12 anos conectando as melhores marcas aos profissionais
            de beleza da Paraíba. Nossa missão vai além de distribuir produtos
            de qualidade, somos parceiros no crescimento do seu negócio. Com um
            portfólio amplo e selecionado das principais marcas do mundo,
            oferecemos atendimento especializado e condições exclusivas para
            transformar seu trabalho em uma experiência única para seus
            clientes.
          </p>
        </div>
      </div>

      {/* Seção de estatísticas */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-6 justify-end items-end mt-6 lg:mt-0">
        <StatCard
          value="12"
          label="Desde 2012 impulsionando profissionais da beleza na Paraíba"
        />
        <StatCard value="500" label="produtos premium no portfólio" />
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 lg:px-7 md:py-5 lg:py-6 rounded-2xl sm:rounded-3xl border-[1px] border-primary items-center flex flex-col w-full lg:max-w-[400px]">
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <Image
          src="/images/plus.png"
          width={40}
          height={40}
          alt="Simbolo de mais"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
        />
        <p className="font-montserrat font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-primary">
          {value}
        </p>
      </div>
      <p className="text-description text-xs sm:text-sm md:text-base font-montserrat font-normal mt-1 sm:mt-2 md:mt-3">
        {label}
      </p>
    </div>
  );
}
