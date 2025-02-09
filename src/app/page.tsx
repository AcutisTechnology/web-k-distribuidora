"use client";

import { AboutSection } from "@/features/landing/about-section";
import { CatalogSection } from "@/features/landing/catalog-section";
import { Header } from "@/features/landing/header";
import { HeroSection } from "@/features/landing/hero-section";

export default function Landing() {
  return (
    <div className="bg-background_primary">
      <Header />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
    </div>
  );
}
