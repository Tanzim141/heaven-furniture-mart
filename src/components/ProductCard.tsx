import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Clock, Layers, Image as ImageIcon, ZoomIn, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onInquire: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onInquire,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="group bg-[#FBF9F5] dark:bg-[#161B1B] rounded-2xl overflow-hidden border border-[#C5A880]/20 hover:border-[#C5A880]/60 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
    >
      {/* 1. Image Container */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-[#EFEAE1] dark:bg-[#111414] cursor-pointer select-none"
        onClick={() => onQuickView(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onQuickView(product);
          }
        }}
        aria-label={`View photo and details for ${product.name}`}
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-[#C5A880]/60 text-center">
            <ImageIcon className="w-10 h-10 mb-2 opacity-60" />
            <span className="text-xs font-serif text-neutral-600 dark:text-neutral-400">
              {product.name}
            </span>
          </div>
        )}

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 opacity-30 group-hover:opacity-60 transition-opacity" />

        {/* Center Hover Action Pill */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
          <span className="bg-[#121414]/90 text-white border border-[#C5A880]/60 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 backdrop-blur-md shadow-xl tracking-wide">
            <ZoomIn className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>View Full Photo</span>
          </span>
        </div>

        {/* Badges / Category Header on Card */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="bg-[#121414]/85 text-[#C5A880] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-[#C5A880]/30 shadow-sm">
            {product.category}
          </span>

          {product.badge && (
            <span className="bg-[#C5A880] text-[#121414] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* 2. Product Details Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* FULL Product Name (allows 2 lines, never truncated) */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-lg sm:text-xl font-serif font-medium text-[#222222] dark:text-[#F3F0EA] group-hover:text-[#C5A880] transition-colors cursor-pointer mb-2 leading-snug line-clamp-2 min-h-[3rem]"
          >
            {product.name}
          </h3>

          {/* Short 2-3 line description */}
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light line-clamp-2 mb-3 leading-relaxed">
            {product.description}
          </p>

          {/* Accurate Material Info */}
          <div className="mb-4">
            <span className="inline-block bg-[#F2ECE1] dark:bg-[#1F2525] text-neutral-700 dark:text-neutral-300 text-[11px] px-2.5 py-1 rounded-md border border-[#C5A880]/20 font-medium">
              {product.wood}
            </span>
          </div>
        </div>

        {/* 3. Order Status & Metadata */}
        <div className="pt-4 border-t border-[#C5A880]/20">
          <div className="flex items-center justify-between mb-3 text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block font-medium">
                ORDER TYPE
              </span>
              <span className="font-semibold text-[#222222] dark:text-[#F3F0EA]">
                {product.orderType || 'Made to Order'}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block font-medium">
                LEAD TIME
              </span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {product.leadTime}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onInquire(product)}
              className="w-full py-2.5 px-3 rounded-xl bg-[#C5A880] hover:bg-[#d5ba94] text-[#121414] text-[11px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1 shadow-sm cursor-pointer"
            >
              <span>REQUEST QUOTE</span>
            </button>

            <button
              onClick={() => onQuickView(product)}
              className="w-full py-2.5 px-3 rounded-xl border border-[#C5A880]/40 text-[#222222] dark:text-[#F3F0EA] hover:bg-[#222222] hover:text-white dark:hover:bg-white dark:hover:text-[#121414] text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>VIEW DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
