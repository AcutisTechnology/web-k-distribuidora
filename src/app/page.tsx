"use client";

import { AnimatedContainer, AnimatedSection, slideInLeft, slideInRight } from "@/components/ui/animated-section";
import { AboutSection } from "@/features/landing/about-section";
import { CadastreSection } from "@/features/landing/cadastre-section";
import { CatalogSection } from "@/features/landing/catalog-section";
import { CoursesSection } from "@/features/landing/courses-section";
import { FooterSection } from "@/features/landing/footer-section";
import { Header } from "@/features/landing/header";
import { HeroSection } from "@/features/landing/hero-section";
import { StuctureSection } from "@/features/landing/structure-section";

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
      
      <AnimatedSection variants={slideInRight}>
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
      </AnimatedSection>
      
      <AnimatedSection>
        <FooterSection />
      </AnimatedSection>
    </AnimatedContainer>
  );
}
