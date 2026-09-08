import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Phone, MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface FinalCTAProps {
  openQuoteModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ openQuoteModal }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const whatsappMessage = language === 'bn'
    ? 'হ্যালো হ্যাভেন ফার্নিচার মার্ট, আমি আমার ইন্টেরিয়র প্রজেক্টের জন্য একটি কোটেশন পেতে চাই।'
    : 'Hello Heaven Furniture Mart, I would like to request a quote for my interior project.';
  const whatsappUrl = `https://wa.me/8801960481983?text=${encodeURIComponent(whatsappMessage)}`;
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Heaven+Furniture+Mart,+Agrabad+Access+Road,+Chattogram';
  const googleDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Heaven+Furniture+Mart,+Agrabad+Access+Road,+Chattogram,+Bangladesh';

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

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10 text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#C5A880]" />
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              {t.finalCta.eyebrow}
            </span>
            <div className="h-[1px] w-12 bg-[#C5A880]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-tight">
            {t.finalCta.titleLine1} <br />
            <span className="italic text-[#C5A880]">{t.finalCta.titleLine2}</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            {t.finalCta.description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={openQuoteModal}
              className="w-full sm:w-auto btn-gold-3d px-10 py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>{t.finalCta.quoteBtn}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-charcoal-3d px-10 py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer border border-[#C5A880]/40 text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>{t.finalCta.whatsappBtn}</span>
            </a>
          </div>

          {/* ========================================================= */}
          {/* PREMIUM GOOGLE MAPS & SHOWROOM LOCATION CARD */}
          {/* ========================================================= */}
          <div className="pt-8 max-w-4xl mx-auto text-left">
            <div className="bg-[#1A1E1E]/95 border border-[#C5A880]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* Left Column: Showroom Details & Action */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-[#C5A880] text-xs uppercase tracking-widest font-semibold mb-2">
                    <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{t.finalCta.visitShowroom}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white font-medium tracking-tight">
                    Heaven Furniture Mart
                  </h3>

                  <p className="mt-2 text-sm text-neutral-300 font-light leading-relaxed">
                    {t.finalCta.fullAddress}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-neutral-800 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{t.finalCta.showroomHours}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <a
                      href="tel:+8801960481983"
                      className="text-[#C5A880] hover:text-[#E0C9A6] transition-colors underline-offset-4 hover:underline font-mono"
                    >
                      {t.finalCta.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row md:flex-col gap-2.5">
                  <a
                    href={googleDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C5A880] hover:bg-[#B39366] text-[#121414] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#121414] group-hover:rotate-45 transition-transform duration-300" />
                    <span>{t.finalCta.getDirections} &rarr;</span>
                  </a>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-700 hover:border-[#C5A880]/60 text-neutral-300 hover:text-white text-xs uppercase tracking-wider transition-all"
                  >
                    <span>{t.finalCta.openInGoogleMaps}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Google Maps Interactive Embed Card */}
              <div className="md:col-span-7 min-h-[260px] sm:min-h-[300px] rounded-xl overflow-hidden border border-[#C5A880]/20 bg-neutral-900 relative shadow-inner">
                <iframe
                  title="Heaven Furniture Mart Google Maps Location"
                  src="https://maps.google.com/maps?q=Heaven%20Furniture%20Mart,%20Agrabad%20Access%20Road,%20Chattogram,%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[260px] sm:min-h-[300px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating subtle overlay badge linking to Maps */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-[#121414]/90 backdrop-blur-sm border border-[#C5A880]/40 text-[#F3F0EA] text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-lg hover:border-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  <span>Agrabad Access Road</span>
                </a>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

