import { InstagramLogo, Stack, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "../../shared/components/button";
import { MapPin } from "lucide-react";

export function CatalogSection() {
  return (
    <div
      id="catalog-section"
      className="bg-background_secondary bg-[url('/images/catalog-background.png')] bg-no-repeat bg-cover bg-center"
    >
      <div className="container flex flex-col mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-14 md:px-6">
        {/* Seção superior: Texto e imagem dos celulares */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16">
          {/* Texto e botão */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <Image
                width={100}
                height={100}
                alt="Icone de carrinho"
                src="/images/cart-catalog.png"
                className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px]"
              />
              <p className="font-syne font-bold text-xl sm:text-2xl md:text-3xl text-white">
                PRODUTOS PARA PROFISSIONAIS
              </p>
            </div>
            <p className="mt-3 sm:mt-4 md:mt-5 font-montserrat font-normal text-sm sm:text-base md:text-lg text-white">
              Nosso catálogo exclusivo foi feito para quem busca qualidade,
              tendência e condições diferenciadas. São mais de 500 produtos das
              melhores marcas, com preços que só profissionais têm acesso.
            </p>
            <Button
              className="mt-4 sm:mt-5 md:mt-6"
              onClick={() =>
                window.open("https://loja.kdistribuidora.com.br/", "_blank")
              }
            >
              <p className="font-montserrat font-bold text-white text-xs sm:text-sm">
                Acesse o Catálogo
              </p>
              <Stack className="text-white" size={20} />
            </Button>
          </div>

          {/* Imagem dos celulares */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div>
              <Image
                width={400}
                height={400}
                alt="celulares mostrando o catalogo"
                src="/images/smartphones.png"
                priority
                className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Seção inferior: Marcas */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          <p className="font-syne font-medium text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-8">
            Marcas em nosso portfólio:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl flex items-center justify-center h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  width={index === 2 ? 85 : 120}
                  height={70}
                  alt={`Marca ${index + 1}`}
                  src={`/images/marcas/marca${index + 1}.png`}
                  className="p-2 max-h-[50px] sm:max-h-[60px] md:max-h-[70px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de informações de contato e copyright */}
      <div className="bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo e descrição */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/logo.svg"
                alt="K Distribuidora"
                width={100}
                height={100}
                className="w-[80px] h-auto"
              />
              <p className="font-montserrat text-sm text-gray-300 max-w-xs">
                Distribuidora exclusiva para profissionais de beleza na Paraíba,
                oferecendo as melhores marcas com preços competitivos.
              </p>
            </div>

            {/* Contato */}
            <div className="flex flex-col gap-4">
              <h3 className="font-syne font-bold text-lg">Contato</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/kicheirodistribuidora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-montserrat text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <InstagramLogo size={20} />
                  @kicheirodistribuidora
                </a>
                <a
                  href="https://wa.me/83994188454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-montserrat text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <WhatsappLogo size={20} />
                  (83) 99418-8454
                </a>
                <div className="flex items-start gap-2 font-montserrat text-sm text-gray-300">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <span>
                    Rua Juvenal Mário da Silva, 805 , Manaíra – João Pessoa –
                    Paraíba. CEP 58038-480
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="h-[1px] bg-gray-800 my-6"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-montserrat text-xs text-gray-400">
              © {new Date().getFullYear()} K Distribuidora. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/politica-de-privacidade"
                className="font-montserrat text-xs text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-de-uso"
                className="font-montserrat text-xs text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
