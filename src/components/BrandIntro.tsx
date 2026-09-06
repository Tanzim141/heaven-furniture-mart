import React from 'react';
import { motion } from 'motion/react';
import { Compass, ShieldCheck } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FBF9F5] dark:bg-[#121414] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Side with Editorial Framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#C5A880]/20 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Heaven Furniture Mart Workshop & Studio"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Offset Border Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-[#C5A880]/30 z-0 hidden sm:block" />
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 z-20 bg-[#121414] dark:bg-[#1A1E1E] text-[#F3F0EA] p-6 rounded-2xl shadow-xl border border-[#C5A880]/40 max-w-[220px]">
              <span className="text-2xl font-serif text-[#C5A880] font-bold block mb-1">2020</span>
              <p className="text-xs text-neutral-300 font-medium">Founded by Abul Kalam Bhuiyan.</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
                THE PHILOSOPHY OF CRAFT
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#222222] dark:text-[#F3F0EA] leading-tight">
              Furniture Designed Around You.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              Heaven Furniture Mart creates bespoke furniture and refined interior styling, designed around each customer's needs, space, and taste.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              From thoughtful design to skilled craftsmanship, every piece is created to bring comfort, character, and a distinctive sense of style to your space.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* 3D Card 1: Bespoke Built */}
              <div className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#161B1B] border border-[#C5A880]/30 dark:border-[#C5A880]/20 shadow-[0_8px_20px_rgba(197,168,128,0.12),0_2px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(197,168,128,0.22)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(212,175,55,0.2)] transition-all duration-300 flex items-start gap-4">
                {/* 3D Gold Coin Icon Medallion */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#E3C293] via-[#C5A880] to-[#9E7D4E] p-[1.5px] shadow-[0_4px_12px_rgba(197,168,128,0.35),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.2)] group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                  <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-[#FDFBF7] to-[#F3EAD8] dark:from-[#1E2525] dark:to-[#141818] flex items-center justify-center text-[#9E7D4E] dark:text-[#E3C293] shadow-inner">
                    <Compass className="w-5 h-5 drop-shadow-sm" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold text-lg text-[#222222] dark:text-[#F3F0EA] tracking-tight group-hover:text-[#9E7D4E] dark:group-hover:text-[#C5A880] transition-colors">
                    Bespoke Built
                  </h4>
                  <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 font-light leading-snug">
                    Designed around your space, size and taste.
                  </p>
                </div>
              </div>

              {/* 3D Card 2: Skilled Craftsmanship */}
              <div className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#161B1B] border border-[#C5A880]/30 dark:border-[#C5A880]/20 shadow-[0_8px_20px_rgba(197,168,128,0.12),0_2px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(197,168,128,0.22)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(212,175,55,0.2)] transition-all duration-300 flex items-start gap-4">
                {/* 3D Gold Coin Icon Medallion */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#E3C293] via-[#C5A880] to-[#9E7D4E] p-[1.5px] shadow-[0_4px_12px_rgba(197,168,128,0.35),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.2)] group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                  <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-[#FDFBF7] to-[#F3EAD8] dark:from-[#1E2525] dark:to-[#141818] flex items-center justify-center text-[#9E7D4E] dark:text-[#E3C293] shadow-inner">
                    <ShieldCheck className="w-5 h-5 drop-shadow-sm" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold text-lg text-[#222222] dark:text-[#F3F0EA] tracking-tight group-hover:text-[#9E7D4E] dark:group-hover:text-[#C5A880] transition-colors">
                    Skilled Craftsmanship
                  </h4>
                  <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 font-light leading-snug">
                    Thoughtfully designed and crafted with care.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

