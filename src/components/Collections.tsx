import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CollectionItem } from '../types';

interface CollectionsProps {
  onSelectCategory: (categoryName: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  const collections: CollectionItem[] = [
    {
      id: 'living-room',
      title: 'Living Room',
      subtitle: 'Sofas, Coffee Tables & Consoles',
      description: 'Sophisticated seating arrangements and sculptural media consoles crafted to anchor your reception spaces in refined luxury.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
      tag: 'Living Collection',
    },
    {
      id: 'bedroom',
      title: 'Bedroom',
      subtitle: 'Beds, Wardrobes & Dressers',
      description: 'Serene sanctuaries designed for profound rest, featuring upholstered statement beds and seamless architectural wardrobes.',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&q=80&w=1000',
      tag: 'Bedroom Collection',
    },
    {
      id: 'dining',
      title: 'Dining',
      subtitle: 'Tables, Chairs & Sideboards',
      description: 'Theatre for culinary gatherings. Solid wood dining tables and ergonomic chairs that celebrate the art of hosting.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1c0c53d28?auto=format&fit=crop&q=80&w=1000',
      tag: 'Dining Collection',
    },
    {
      id: 'bespoke',
      title: 'Bespoke',
      subtitle: 'Custom Architectural Furniture',
      description: 'Furniture engineered specifically around your exact room dimensions, ceiling height, and personal lifestyle narrative.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000',
      tag: 'Signature Bespoke',
    },
  ];

  return (
    <section id="collections" className="py-24 md:py-32 bg-[#FBF9F5] dark:bg-[#121414] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
                Curated Categories
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#222222] dark:text-[#F3F0EA]">
              Selected Collections
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-600 dark:text-neutral-400 font-light max-w-md text-sm sm:text-base">
            Explore our foundational categories, each fully customizable to your precise space and interior palette.
          </p>
        </div>

        {/* 4 Major Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => onSelectCategory(item.title)}
              className="group relative rounded-3xl overflow-hidden bg-[#F4EFE6] dark:bg-[#1A1E1E] border border-[#C5A880]/25 hover:border-[#C5A880] transition-all duration-500 cursor-pointer shadow-md hover:shadow-2xl flex flex-col"
            >
              {/* Image Container with Zoom on Hover */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <span className="absolute top-4 left-4 bg-[#121414]/80 backdrop-blur-md text-[#C5A880] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#C5A880]/30">
                  {item.tag}
                </span>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-y-2 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#222222] dark:text-[#F3F0EA] mb-2 group-hover:text-[#C5A880] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#C5A880]/20 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
                    Inquire For Custom Quote
                  </span>
                  <span className="text-xs font-semibold text-[#C5A880] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Request Details &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
