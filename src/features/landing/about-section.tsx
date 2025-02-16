import Image from "next/image";

export function AboutSection() {
  return (
    <div className="container flex flex-col lg:flex-row mx-auto px-4 py-10 md:px-6 md:py-14 gap-8 lg:gap-16 justify-between w-full">
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
          src="/images/logo.png"
          width={110}
          height={100}
          className="h-auto w-auto"
          alt="Logo"
        />

        <div className="mt-8 md:mt-16">
          <p className="text-title font-syne font-semibold text-2xl md:text-3xl">
            Quem somos?
          </p>
          <p className="text-description font-montserrat font-normal text-base md:text-lg mt-6 md:mt-8">
            Mais que uma distribuidora, somos parceiros do segmento. Oferecemos
            produtos com preços competitivos, suporte técnico e a garantia do
            melhor. A K Distribuidora nasceu para transformar o mercado de
            beleza profissional na Paraíba. Com mais de 30 anos de tradição da
            Kicheiro Cosméticos, conectamos marcas de alta qualidade a
            profissionais que buscam excelência.
          </p>
        </div>
      </div>

      {/* Seção de estatísticas */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 justify-end items-end">
        <StatCard value="30" label="Anos no mercado" />
        <StatCard value="500" label="Produtos no catálogo" />
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white px-5 py-4 md:px-7 md:py-6 rounded-3xl border-[1px] border-primary items-center flex flex-col w-full lg:max-w-[400px]">
      <div className="flex flex-row items-center gap-3">
        <Image
          src="/images/plus.png"
          width={40}
          height={40}
          alt="Simbolo de mais"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <p className="font-montserrat font-medium text-3xl md:text-5xl italic text-primary">
          {value}
        </p>
      </div>
      <p className="text-description text-sm md:text-base font-montserrat font-normal mt-2 md:mt-3">
        {label}
      </p>
    </div>
  );
}
