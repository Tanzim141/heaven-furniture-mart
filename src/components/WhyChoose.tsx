import React, { useState, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquare, Layers, Hammer, MapPin, Truck, CreditCard } from 'lucide-react';

// Import photorealistic 3D generated renders
import consultationImg from '../assets/images/why_choose_consultation_1788615587477.jpg';
import bespokeImg from '../assets/images/why_choose_bespoke_1788615614377.jpg';
import craftsmanshipImg from '../assets/images/why_choose_craftsmanship_1788615633359.jpg';
import showroomImg from '../assets/images/why_choose_showroom_1788615646252.jpg';
import deliveryImg from '../assets/images/why_choose_delivery_1788615659556.jpg';
import paymentImg from '../assets/images/why_choose_payment_1788615674509.jpg';

interface FeatureCardData {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface InteractiveShowroomCardProps {
  item: FeatureCardData;
  index: number;
}

const InteractiveShowroomCard: React.FC<InteractiveShowroomCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Ultra-subtle luxury micro-tilt (1 to 2 degrees)
      const rotateX = ((y - centerY) / centerY) * -2;
      const rotateY = ((x - centerX) / centerX) * 2;

      setTilt({ x: rotateX, y: rotateY });
    },
    [prefersReducedMotion]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: '1200px' }}
        className="h-full group select-none"
      >
        {/* Outer 3D Card Shell */}
        <div
          style={{
            transform: isHovered
              ? `translateY(-6px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
              : 'translateY(0px) rotateX(0deg) rotateY(0deg)',
            transformStyle: 'preserve-3d',
            transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms ease, border-color 450ms ease',
          }}
          className={`relative h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl p-4 sm:p-5
            bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F2EAE0]
            dark:from-[#1D2222] dark:via-[#171C1C] dark:to-[#111414]
            border-[1.5px] border-[#E8DEC8] dark:border-[#C5A880]/30
            hover:border-[#C5A880] dark:hover:border-[#C5A880]/80
            shadow-[0_10px_24px_-8px_rgba(60,45,25,0.1),0_3px_8px_rgba(0,0,0,0.02)]
            hover:shadow-[0_20px_40px_-10px_rgba(50,35,18,0.18),0_6px_16px_rgba(197,168,128,0.12)]
            dark:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)]
            dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]
            overflow-hidden`}
        >
          {/* Top Bevel Highlight (Optical luxury rim) */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 dark:via-white/20 to-transparent pointer-events-none" />

          {/* Dynamic Specular Light Glint on Hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent pointer-events-none transition-transform duration-1000 ease-out ${
              isHovered ? 'translate-x-full' : '-translate-x-full'
            }`}
            style={{ transform: isHovered ? 'translateX(160%) skewX(-25deg)' : 'translateX(-160%) skewX(-25deg)' }}
          />

          {/* ================================================== */}
          {/* 1. TOP 3D RENDER VISUAL CONTAINER */}
          {/* ================================================== */}
          <div className="relative mb-3.5">
            {/* 3D Visual Rendering Box */}
            <div
              style={{
                transform: isHovered ? 'translateZ(16px) scale(1.02)' : 'translateZ(0px) scale(1)',
                transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5EFE6] to-[#E9DFCF] dark:from-[#252B2B] dark:to-[#171B1B] border border-[#C5A880]/20 shadow-inner flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Soft Inner Glow vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60 pointer-events-none" />
            </div>
          </div>

          {/* ================================================== */}
          {/* 2. CARD CONTENT (Icon Badge + Titles + Description) */}
          {/* ================================================== */}
          <div className="flex-1 flex flex-col justify-start">
            {/* Circular 3D Icon Badge */}
            <div className="mb-2.5 inline-flex">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FDFBF7] via-[#F4EDE0] to-[#E4D7C3] dark:from-[#2C3434] dark:via-[#222828] dark:to-[#171C1C] border border-[#C5A880]/50 shadow-[0_3px_8px_rgba(40,30,15,0.08)] flex items-center justify-center text-[#8C6B37] dark:text-[#E8DCC8] group-hover:scale-105 group-hover:border-[#C5A880] transition-all duration-300">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-serif font-medium text-[#222222] dark:text-[#F3F0EA] mb-1.5 leading-snug group-hover:text-[#8C6239] dark:group-hover:text-[#C5A880] transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Bottom Gold Accent Lip */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent group-hover:via-[#C5A880] transition-colors duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

export const WhyChoose: React.FC = () => {
  const trustPoints: FeatureCardData[] = [
    {
      title: 'Free Design Consultation',
      description: 'Get thoughtful guidance to plan furniture around your space and needs.',
      image: consultationImg,
      icon: <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />,
    },
    {
      title: 'Fully Bespoke',
      description: 'Furniture designed and crafted to your exact requirements.',
      image: bespokeImg,
      icon: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />,
    },
    {
      title: 'Premium Craftsmanship',
      description: 'Premium-quality wood and high-grade boards, crafted with attention to detail.',
      image: craftsmanshipImg,
      icon: <Hammer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />,
    },
    {
      title: 'Showroom Experience',
      description: 'Visit our showroom and explore our furniture in person.',
      image: showroomImg,
      icon: <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />,
    },
    {
      title: 'Delivery & Installation',
      description: 'Professional delivery and installation for a seamless experience.',
      image: deliveryImg,
      icon: <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />,
    },
    {
      title: 'Flexible Payment Options',
      description: 'Convenient payment options designed around your furniture purchase.',
      image: paymentImg,
      icon: <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />,
    },
  ];

  return (
    <section id="why-heaven" className="py-16 md:py-24 bg-[#F6F1EA] dark:bg-[#121616] transition-colors duration-500 relative overflow-hidden">
      {/* Invisible anchor for backward compatibility */}
      <span id="why-choose" className="absolute -top-24 pointer-events-none" />
      {/* Soft Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C5A880]/10 dark:bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* ================================================== */}
        {/* SECTION HEADER (Clean, Elegant, Flat Typography) */}
        {/* ================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-10 bg-[#C5A880]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#8C7355] dark:text-[#C5A880] font-bold">
              THE HEAVEN STANDARD
            </span>
            <div className="h-[1px] w-10 bg-[#C5A880]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-medium tracking-tight text-[#222222] dark:text-[#F3F0EA]">
            Why Choose Heaven Furniture Mart
          </h2>

          <p className="mt-2.5 text-neutral-600 dark:text-neutral-300 font-light text-xs sm:text-sm md:text-base leading-relaxed">
            Quality, craftsmanship, and service designed around you.
          </p>
        </div>

        {/* ================================================== */}
        {/* 3×2 3D SHOWROOM CARD GRID */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {trustPoints.map((item, index) => (
            <InteractiveShowroomCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


