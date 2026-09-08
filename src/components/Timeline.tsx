import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Timeline: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const milestones = t.timeline.milestones;

  return (
    <section className="py-24 md:py-32 bg-[#FBF9F5] dark:bg-[#121414] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              {t.timeline.eyebrow}
            </span>
            <div className="h-[1px] w-12 bg-[#C5A880]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#222222] dark:text-[#F3F0EA]">
            {t.timeline.title}
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-light text-base">
            {t.timeline.subtitle}
          </p>
        </div>

        {/* Timeline Grid / Stack */}
        <div className="relative border-l-2 border-[#C5A880]/30 ml-4 md:ml-32 space-y-12">
          {milestones.map((item, index) => (
            <motion.div
              key={`milestone-${item.year}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Gold/Brass Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#C5A880] text-[#121414] flex items-center justify-center shadow-md border-4 border-[#FBF9F5] dark:border-[#121414] group-hover:scale-125 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-[#121414]" />
              </div>

              {/* Year & Title Card */}
              <div className="bg-[#F4EFE6] dark:bg-[#1A1E1E] p-6 sm:p-8 rounded-2xl border border-[#C5A880]/25 shadow-sm hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-serif font-medium text-[#222222] dark:text-[#F3F0EA]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
