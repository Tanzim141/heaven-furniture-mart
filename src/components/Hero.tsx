import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface HeroProps {
  openQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=2000"
          alt="Luxury Interior Living Room"
          className="w-full h-full object-cover object-[center_40%] sm:object-[center_35%] lg:object-center scale-100 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 dark:from-black/90 dark:via-black/75 dark:to-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.15] mb-8"
          >
            {t.hero.titlePart1} <br />
            <span className="italic font-normal text-[#C5A880]">{t.hero.titlePart2}</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-neutral-200 font-light leading-relaxed mb-10 max-w-2xl"
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs with 3D Button System */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <a
              href="#bespoke"
              className="btn-gold-3d px-8 py-4 rounded-xl text-sm uppercase font-bold tracking-wider flex items-center justify-center gap-3 cursor-pointer group text-center"
            >
              <span>{t.hero.ctaBespoke}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70">
        <span className="text-[10px] uppercase tracking-[0.25em] mb-2 font-medium">{t.hero.scrollExplore}</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#C5A880] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
