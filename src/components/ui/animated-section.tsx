"use client";

import { motion, Variants, Variant } from "framer-motion";
import { ReactNode } from "react";

// Variantes de animação predefinidas
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6 
    } 
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

// Variante para o container com efeito stagger
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
  useInView?: boolean;
  amount?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  duration,
  useInView = true,
  amount = 0.3,
  once = true,
}: AnimatedSectionProps) {
  // Cria uma cópia das variantes para aplicar delay e duration personalizados
  const customVariants: Variants = {
    hidden: { ...(variants.hidden as Variant) },
    visible: {
      ...(variants.visible as Variant),
      transition: {
        ...(variants.visible as any)?.transition,
        delay: delay,
        ...(duration && { duration }),
      },
    },
  };

  return useInView ? (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={customVariants}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={customVariants}
    >
      {children}
    </motion.div>
  );
}

// Criando uma variante de container com delay personalizado
export function AnimatedContainer({
  children,
  className = "",
  variants = staggerContainer,
  useInView = false,
}: Omit<AnimatedSectionProps, 'delay' | 'duration'>) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(useInView ? { whileInView: "visible" } : { animate: "visible" })}
      variants={variants}
    >
      {children}
    </motion.div>
  );
} 