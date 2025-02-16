"use client";

import { AboutSection } from "@/features/landing/about-section";
import { CadastreSection } from "@/features/landing/cadastre-section";
import { CatalogSection } from "@/features/landing/catalog-section";
import { CoursesSection } from "@/features/landing/courses-section";
import { Header } from "@/features/landing/header";
import { HeroSection } from "@/features/landing/hero-section";

export default function Landing() {
  return (
    <div className="bg-background_primary">
      <Header />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <CoursesSection />
      <CadastreSection />
    </div>
  );
}
