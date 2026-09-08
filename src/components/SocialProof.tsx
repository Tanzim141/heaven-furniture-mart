import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const SocialProof: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 md:py-32 bg-[#F4EFE6] dark:bg-[#161A1A] transition-colors duration-500 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#FBF9F5] dark:bg-[#1A1E1E] rounded-3xl p-10 sm:p-16 border border-[#C5A880]/30 shadow-xl relative overflow-hidden"
        >
          {/* Background Decorative Quote Watermark */}
          <div className="absolute top-4 left-6 text-[#C5A880]/10 dark:text-[#C5A880]/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center mx-auto border border-[#C5A880]/30">
              <Quote className="w-8 h-8" />
            </div>

            <blockquote className="text-xl sm:text-3xl font-serif font-medium text-[#222222] dark:text-[#F3F0EA] leading-relaxed italic">
              {t.socialProof.quote}
            </blockquote>

            <div className="pt-6 border-t border-[#C5A880]/20 flex flex-col items-center justify-center">
              <span className="font-serif font-semibold text-lg text-[#222222] dark:text-[#F3F0EA] tracking-wide">
                {t.socialProof.author}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium mt-1">
                {t.socialProof.designation}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
