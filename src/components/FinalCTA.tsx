import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';

interface FinalCTAProps {
  openQuoteModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ openQuoteModal }) => {
  const whatsappUrl = "https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart,%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20interior%20project.";

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#121414] text-white relative overflow-hidden">
      {/* Background Cinematic Interior Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1600"
          alt="Luxury Interior Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/80 to-[#121414]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#C5A880]" />
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              CHATTOGRAM · SINCE 2020
            </span>
            <div className="h-[1px] w-12 bg-[#C5A880]" />
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-tight">
            Let's Design Something Beautiful <br />
            <span className="italic text-[#C5A880]">for Your Space.</span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Request a Quote today and let our team bring your vision to life with master craftsmanship and bespoke precision.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={openQuoteModal}
              className="w-full sm:w-auto btn-gold-3d px-10 py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-charcoal-3d px-10 py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer border border-[#C5A880]/40 text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="pt-8 text-xs text-neutral-400 uppercase tracking-widest flex flex-wrap items-center justify-center gap-2">
            <span>Agrabad Access Road, Chattogram</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <a
              href="tel:+8801960481983"
              className="inline-flex items-center gap-1.5 text-[#C5A880] hover:text-[#E0C9A6] transition-colors underline-offset-4 hover:underline"
              title="Click to call Heaven Furniture Mart"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+880 1960-481983</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
