import Image from "next/image";

export function AboutSection() {
  return (
    <div className="container flex flex-row mx-auto px-6 py-14 justify-around">
      <div className="w-1/2">
        <Image src="/images/logo.png" width={110} height={100} alt="Logo" />

        <div className="mt-16">
          <p className="text-title font-syne font-semibold text-3xl">
            Quem somos?
          </p>
          <p className="text-description font-montserrat font-normal text-lg mt-8">
            Mais que uma distribuidora, somos parceiros do segmento. Oferecemos
            produtos com preços competitivos, suporte técnico e a garantia do
            melhor. A K Distribuidora nasceu para transformar o mercado de
            beleza profissional na Paraíba. Com mais de 30 anos de tradição da
            Kicheiro Cosméticos, conectamos marcas de alta qualidade a
            profissionais que buscam excelência.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-end">
        <StatCard value="30" label="Anos no mercado" />
        <StatCard value="500" label="Produtos no catálogo" />
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white px-7 py-6 rounded-3xl border-[1px] border-primary items-center flex flex-col">
      <div className="flex flex-row items-center gap-3">
        <Image
          src="/images/plus.png"
          width={50}
          height={50}
          alt="Simbolo de mais"
        />
        <p className="font-montserrat font-medium text-5xl italic text-primary">
          {value}
        </p>
      </div>
      <p className="text-description text-base font-montserrat font-normal mt-3">
        {label}
      </p>
    </div>
  );
}
