import BrandCard from "@/shared/components/card-brand";
import {
  CheckCircle,
  CurrencyDollar,
  Sparkle,
  Gift,
  InstagramLogo,
  WhatsappLogo,
  EnvelopeSimple,
  MapPin
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

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
                  Por que escolher a K Distribuidora?
                </h2>
                <p className="font-montserrat font-normal text-sm sm:text-base lg:text-lg text-white">
                  Diferenciais que fazem da K Distribuidora a melhor opção para
                  você, profissional de beleza da Paraíba.
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
                  text="Melhores preços"
                  className="transform-gpu"
                />
                <BrandCard
                  icon={<Gift color="white" size={20} className="sm:size-[24px]" />}
                  text="Entrega rápida"
                  className="transform-gpu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de informações de contato e copyright */}
      <div className="bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo e descrição */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/logo.png"
                alt="K Distribuidora"
                width={100}
                height={100}
                className="w-[80px] h-auto"
              />
              <p className="font-montserrat text-sm text-gray-300 max-w-xs">
                Distribuidora exclusiva para profissionais de beleza na Paraíba, oferecendo as melhores marcas com preços competitivos.
              </p>
            </div>

            {/* Links rápidos */}
            <div className="flex flex-col gap-4">
              <h3 className="font-syne font-bold text-lg">Links Rápidos</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#about-section" className="font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  Quem somos
                </Link>
                <Link href="#catalog-section" className="font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  Catálogo
                </Link>
                <Link href="#courses-section" className="font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  Cursos
                </Link>
                <Link href="#cadastre-section" className="font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
                <Link href="#diferenciais" className="font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  Diferenciais
                </Link>
                <Link href="#structure-section" className="font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  Estrutura
                </Link>
              </div>
            </div>

            {/* Contato */}
            <div className="flex flex-col gap-4">
              <h3 className="font-syne font-bold text-lg">Contato</h3>
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com/kdistribuidora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  <InstagramLogo size={20} />
                  @kdistribuidora
                </a>
                <a href="https://wa.me/5583999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  <WhatsappLogo size={20} />
                  (83) 99999-9999
                </a>
                <a href="mailto:contato@kdistribuidora.com.br" className="flex items-center gap-2 font-montserrat text-sm text-gray-300 hover:text-white transition-colors">
                  <EnvelopeSimple size={20} />
                  contato@kdistribuidora.com.br
                </a>
                <div className="flex items-start gap-2 font-montserrat text-sm text-gray-300">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <span>Av. Exemplo, 123, Bairro, João Pessoa - PB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="h-[1px] bg-gray-800 my-6"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-montserrat text-xs text-gray-400">
              © {new Date().getFullYear()} K Distribuidora. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="/politica-de-privacidade" className="font-montserrat text-xs text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="font-montserrat text-xs text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
