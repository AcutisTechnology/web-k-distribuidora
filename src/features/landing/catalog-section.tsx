import { Stack } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "../../shared/components/button";
import { AnimatedSection, staggerContainer } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

export function CatalogSection() {
  // Variante para animação dos cards de marcas
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

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
                Catálogo completo
              </p>
            </div>
            <p className="mt-3 sm:mt-4 md:mt-5 font-montserrat font-normal text-sm sm:text-base md:text-lg text-white">
              Somos uma distribuidora de diversas marcas no ramo de cosméticos,
              atendendo exclusivamente profissionais do setor de beleza na
              Paraíba. Nosso catálogo reúne produtos de alta qualidade,
              cuidadosamente selecionados para atender às demandas do segmento e
              elevar o padrão dos seus serviços.
            </p>
            <Button 
              className="mt-4 sm:mt-5 md:mt-6"
              onClick={() => window.open("https://loja.kdistribuidora.com.br/", "_blank")}
            >
              <p className="font-montserrat font-bold text-white text-xs sm:text-sm">
                Ir para catálogo
              </p>
              <Stack className="text-white" size={20} />
            </Button>
          </div>

          {/* Imagem dos celulares */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                width={400}
                height={400}
                alt="celulares mostrando o catalogo"
                src="/images/smartphones.png"
                priority
                className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Seção inferior: Marcas */}
        <AnimatedSection className="mt-8 sm:mt-10 md:mt-12 lg:mt-14" variants={staggerContainer}>
          <p className="font-syne font-medium text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-8">
            Marcas em nosso portfólio:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {[...Array(7)].map((_, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl flex items-center justify-center h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  width={index === 2 ? 85 : 120}
                  height={70}
                  alt={`Marca ${index + 1}`}
                  src={`/images/marcas/marca${index + 1}.png`}
                  className="p-2 max-h-[50px] sm:max-h-[60px] md:max-h-[70px] w-auto"
                />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
