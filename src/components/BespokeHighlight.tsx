import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Ruler, Compass, ShieldCheck, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface BespokeHighlightProps {
  openQuoteModalWithCategory: (category: string) => void;
}

export const BespokeHighlight: React.FC<BespokeHighlightProps> = ({ openQuoteModalWithCategory }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const processSteps = t.bespoke.steps;

  const bespokePillars = [
    { label: t.bespoke.pillars.space, icon: Ruler },
    { label: t.bespoke.pillars.taste, icon: Compass },
    { label: t.bespoke.pillars.consultation, icon: Sparkles },
    { label: t.bespoke.pillars.timber, icon: ShieldCheck },
  ];

  return (
    <section
      id="bespoke"
      className="py-28 md:py-36 bg-[#0E1312] text-[#F5F2EB] relative overflow-hidden transition-colors duration-500 border-y border-[#C5A880]/20"
    >
      {/* Subtle Ambient Radial Lighting for Luxury Depth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1A2E2B]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ================================================== */}
        {/* SECTION HEADER & EDITORIAL ASYMMETRIC INTRO */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-[1px] w-10 bg-[#C5A880]" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C5A880] font-semibold">
                {t.bespoke.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#F5F2EB] leading-[1.08]"
            >
              {t.bespoke.titleLine1} <br />
              <span className="italic text-[#D4B993] font-serif">{t.bespoke.titleLine2}</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#D2CBC0] font-light leading-relaxed mb-6"
            >
              {t.bespoke.description}
            </motion.p>

            {/* Brand Differentiator Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 sm:p-4.5 rounded-xl bg-[#141C1A] border border-[#C5A880]/30 text-[13px] sm:text-sm text-[#EAE4DC] leading-relaxed flex items-start sm:items-center gap-3.5 shadow-inner"
            >
              <div className="w-2 h-2 rounded-full bg-[#C5A880] shrink-0 mt-1.5 sm:mt-0" />
              <span>
                <strong className="text-[#F5F2EB] font-semibold">{t.bespoke.differenceTitle}</strong> {t.bespoke.differenceText}
              </span>
            </motion.div>
          </div>
        </div>

        {/* ================================================== */}
        {/* CINEMATIC HERO BESPOKE VISUAL WITH 3D DEPTH */}
        {/* ================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-20 lg:mb-28 group"
        >
          {/* Framed Image Container */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#C5A880]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] bg-[#151B1A]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1800"
              alt="Custom bespoke furniture crafted for a luxury interior"
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
            />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1312] via-[#0E1312]/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1312]/85 via-transparent to-transparent hidden md:block" />

            {/* Overlay Content on Image */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
              <div className="max-w-md">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#0E1312]/90 border border-[#C5A880]/50 text-[#DFCAAB] text-[11px] sm:text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-2.5 shadow-md">
                  {t.bespoke.precisionBadge}
                </span>
                <p className="text-sm sm:text-base font-serif italic text-[#FAF8F5] leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                  {t.bespoke.quoteImage}
                </p>
              </div>

              {/* Bespoke Value Pillars */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pointer-events-auto">
                {bespokePillars.map((pillar, i) => (
                  <div
                    key={`pillar-${pillar.label}-${i}`}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0E1312]/90 backdrop-blur-md border border-[#C5A880]/30 text-xs font-medium text-[#F0ECE4] shadow-[0_2px_10px_rgba(0,0,0,0.4)] whitespace-nowrap hover:border-[#C5A880]/50 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{pillar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================== */}
        {/* REFINED 5-STEP BESPOKE PROCESS */}
        {/* ================================================== */}
        <div className="mb-20 lg:mb-24">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#C5A880]/20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-1">
                {t.bespoke.journeyEyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#F5F2EB]">
                {t.bespoke.journeyTitle}
              </h3>
            </div>
            <span className="text-xs text-[#A8A196] font-light hidden sm:inline-block">
              {t.bespoke.workshopTag}
            </span>
          </div>

          {/* Desktop Horizontal Process / Mobile Vertical Timeline */}
          <div className="relative">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-7 left-10 right-10 h-[1px] bg-gradient-to-r from-[#C5A880]/20 via-[#C5A880]/50 to-[#C5A880]/20 z-0" />

            {/* Mobile Vertical Connecting Line */}
            <div className="lg:hidden absolute top-6 bottom-6 left-6 w-[1px] bg-gradient-to-b from-[#C5A880]/20 via-[#C5A880]/50 to-[#C5A880]/20 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {processSteps.map((step, index) => {
                const isHovered = activeStep === index;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                    className="flex lg:flex-col items-start gap-5 lg:gap-0 group cursor-default"
                  >
                    {/* Process Step Indicator with Tactile 3D Depth */}
                    <div
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-serif text-base sm:text-lg font-bold transition-all duration-300 shrink-0 lg:mb-6 select-none ${
                        isHovered
                          ? '-translate-y-1.5 bg-[#C5A880] text-[#0E1312] border border-[#F5F2EB] shadow-[0_12px_24px_-4px_rgba(197,168,128,0.5)]'
                          : 'bg-[#151C1B] text-[#D4B993] border border-[#C5A880]/40 shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-2px_0_rgba(0,0,0,0.4)] group-hover:border-[#C5A880]'
                      }`}
                    >
                      <span>{step.number}</span>
                      {/* Subtle Active Glow Ring */}
                      {isHovered && (
                        <motion.div
                          layoutId="step-glow"
                          className="absolute -inset-1 rounded-2xl border border-[#C5A880]/60 pointer-events-none"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-bold">
                          {language === 'bn' ? `ধাপ ${step.number}` : `STEP ${step.number}`}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-serif font-medium text-[#F5F2EB] mb-1 group-hover:text-[#D4B993] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-light text-[#E5DFD5] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* TACTILE 3D LUXURY CTA BUTTON */}
        {/* ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-6 flex flex-col items-center"
        >
          <button
            onClick={() => openQuoteModalWithCategory('Bespoke Interior & Furniture')}
            className="btn-gold-3d px-10 sm:px-14 py-4 sm:py-5 rounded-2xl text-xs sm:text-sm uppercase tracking-[0.22em] font-bold inline-flex items-center gap-3 cursor-pointer shadow-[0_10px_30px_rgba(197,168,128,0.35)] transition-all duration-300"
          >
            <span>{t.bespoke.ctaExplore}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

