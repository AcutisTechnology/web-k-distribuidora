"use client";

import {
  AnimatedContainer,
  AnimatedSection,
  slideInLeft,
} from "@/components/ui/animated-section";
import { AboutSection } from "@/features/landing/about-section";
import { CadastreSection } from "@/features/landing/cadastre-section";
import { CatalogSection } from "@/features/landing/catalog-section";
import { CoursesSection } from "@/features/landing/courses-section";
import { DistributorSection } from "@/features/landing/distributor-section";
import { FooterSection } from "@/features/landing/footer-section";
import { Header } from "@/features/landing/header";
import { HeroSection } from "@/features/landing/hero-section";
import { MapSection } from "@/features/landing/map-section";
import { StuctureSection } from "@/features/landing/structure-section";
import { WhatsappLogo } from "@phosphor-icons/react";
import { InstagramLogo } from "@phosphor-icons/react";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Landing() {
  return (
    <AnimatedContainer className="bg-background_primary" useInView={false}>
      <Header />

      <AnimatedSection useInView={false}>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <FooterSection />
      </AnimatedSection>

      <AnimatedSection>
        <DistributorSection />
      </AnimatedSection>

      <AnimatedSection>
        <CatalogSection />
      </AnimatedSection>

      <AnimatedSection variants={slideInLeft}>
        <CoursesSection />
      </AnimatedSection>

      <AnimatedSection>
        <CadastreSection />
      </AnimatedSection>

      <AnimatedSection>
        <StuctureSection />
        <MapSection />
      </AnimatedSection>

      <div className="bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo e descrição */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/logo.svg"
                alt="K Distribuidora"
                width={90}
                height={90}
                className="w-[80px] h-auto brightness-0 invert"
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
                  href="https://wa.me/+5583994188454"
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

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/+5583994188454"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
        aria-label="WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </AnimatedContainer>
  );
}
