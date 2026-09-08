import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations, productTranslationsBn } from '../data/translations';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onInquireQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquireQuote,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);

  const { language, isBangla } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setActiveImageIndex(0);
    setImageError(false);
    setIsLightboxOpen(false);
    setLightboxZoom(1);
  }, [product]);

  // Handle ESC key for lightbox and modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
          setLightboxZoom(1);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, onClose]);

  if (!product) return null;

  const bnData = isBangla ? productTranslationsBn[product.id] : null;
  const displayName = bnData?.name || product.name;
  const displayCategory = bnData?.category || product.category;
  const displayWood = bnData?.wood || product.wood;
  const displayMaterial = bnData?.material || product.material;
  const displayDimensions = bnData?.dimensions || product.dimensions;
  const displayDescription = bnData?.description || product.description;
  const displayLeadTime = bnData?.leadTime || product.leadTime;
  const displayOrderType = bnData?.orderType || product.orderType || (isBangla ? 'কাস্টমাইজড' : 'Made to Order');

  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const currentImage = galleryImages[activeImageIndex] || product.image;

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
    setImageError(false);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
    setImageError(false);
  };

  const whatsappInquiryUrl = `https://wa.me/8801960481983?text=${encodeURIComponent(
    `Hello Heaven Furniture Mart, I am interested in inquiring about "${displayName}" (${displayCategory}). Could you please share quotation and customization details?`
  )}`;

  return (
    <>
      {/* ================================================== */}
      {/* 1. PRODUCT DETAIL MODAL */}
      {/* ================================================== */}
      <AnimatePresence>
        <div
          key="product-detail-modal-container"
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-3 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Window */}
          <motion.div
            key={`modal-dialog-${product.id}`}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#FBF9F5] dark:bg-[#151919] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#C5A880]/30 z-10 my-auto text-[#222222] dark:text-[#F3F0EA] flex flex-col overflow-hidden"
          >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details modal"
            className="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
            {/* ================================================== */}
            {/* LEFT: Image Gallery Column (5 cols) */}
            {/* ================================================== */}
            <div className="md:col-span-5 bg-[#EFEAE1] dark:bg-[#101414] p-5 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#C5A880]/20">
              <div className="space-y-3">
                {/* Main Large Image Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-[#C5A880]/20 shadow-sm group">
                  {!imageError ? (
                    <div
                      onClick={() => {
                        setIsLightboxOpen(true);
                        setLightboxZoom(1);
                      }}
                      className="w-full h-full cursor-zoom-in relative flex items-center justify-center"
                      title="Click to view full photo in high resolution"
                    >
                      <img
                        src={currentImage}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-center transition-all duration-300"
                      />

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
                        <span className="bg-[#121414]/90 text-white border border-[#C5A880]/50 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-lg font-medium">
                          <ZoomIn className="w-3.5 h-3.5 text-[#C5A880]" />
                          <span>Click to Zoom & Full View</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-[#C5A880]/60 text-center">
                      <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                      <span className="text-xs font-serif">{product.name}</span>
                    </div>
                  )}

                  {/* Top-Left Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#C5A880] text-[#121414] font-bold text-[10px] px-3 py-1 rounded-full shadow-md tracking-wider uppercase pointer-events-none z-10">
                      {product.badge}
                    </span>
                  )}

                  {/* Expand Lightbox Button in Bottom Right */}
                  <div className="absolute bottom-2.5 right-2.5 z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLightboxOpen(true);
                        setLightboxZoom(1);
                      }}
                      title="Open full photo viewer"
                      className="bg-[#C5A880] hover:bg-[#d5ba94] text-[#121414] p-2 rounded-lg text-xs shadow-md transition-all cursor-pointer flex items-center gap-1 font-medium"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Thumbnails row if multiple images exist */}
                {galleryImages.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {galleryImages.map((imgUrl, idx) => (
                      <button
                        key={`gallery-thumb-${product.id}-${idx}-${imgUrl}`}
                        type="button"
                        onClick={() => {
                          setActiveImageIndex(idx);
                          setImageError(false);
                        }}
                        className={`relative w-16 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          activeImageIndex === idx
                            ? 'border-[#C5A880] ring-1 ring-[#C5A880]'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${product.name} view ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Delivery & Assembly Note */}
              <div className="mt-4 pt-3 border-t border-[#C5A880]/20 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 font-light">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{t.products.deliveryAssemblyNote}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="text-[11px] text-[#C5A880] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>{t.products.fullView}</span>
                </button>
              </div>
            </div>

            {/* ================================================== */}
            {/* RIGHT: Product Information (7 cols) */}
            {/* ================================================== */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Category & Order Type header */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] bg-[#C5A880]/10 dark:bg-[#C5A880]/20 px-3 py-1 rounded-md">
                    {displayCategory}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                    {t.products.orderType}: <strong className="text-[#222222] dark:text-[#F3F0EA]">{displayOrderType}</strong>
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl sm:text-3xl font-serif font-medium tracking-tight text-[#222222] dark:text-[#F3F0EA]">
                  {displayName}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  {displayDescription}
                </p>

                {/* Specifications Grid */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-2.5">
                    {t.products.specifications}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-[#F2ECE1]/60 dark:bg-[#1A2020] p-4 rounded-xl border border-[#C5A880]/20">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                        {t.products.dimensions}
                      </span>
                      <span className="text-xs font-medium text-[#222222] dark:text-[#F3F0EA]">
                        {displayDimensions}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                        {t.products.woodBoard}
                      </span>
                      <span className="text-xs font-medium text-[#222222] dark:text-[#F3F0EA]">
                        {displayWood}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                        {t.products.primaryMaterial}
                      </span>
                      <span className="text-xs font-medium text-[#222222] dark:text-[#F3F0EA]">
                        {displayMaterial}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                        {t.products.leadTime}
                      </span>
                      <span className="text-xs font-medium text-[#222222] dark:text-[#F3F0EA]">
                        {displayLeadTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customization Section */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-2.5">
                    {t.products.customizationAvailable}
                  </h4>
                  <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 bg-white/50 dark:bg-[#121616] p-3.5 rounded-xl border border-[#C5A880]/20">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                      <span>{t.products.customDimensions}</span>
                    </div>

                    {product.colors && product.colors.length > 0 && (
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                        <span><strong>{t.products.colorSelection}</strong> {product.colors.join(', ')}</span>
                      </div>
                    )}

                    {product.veneers && product.veneers.length > 0 && (
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                        <span><strong>{t.products.veneerSelection}</strong> {product.veneers.join(', ')}</span>
                      </div>
                    )}

                    {product.finishes && product.finishes.length > 0 && (
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                        <span><strong>{t.products.finishSelection}</strong> {product.finishes.join(', ')}</span>
                      </div>
                    )}

                    {product.fabrics && product.fabrics.length > 0 && (
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                        <span><strong>{t.products.fabricSelection}</strong> {product.fabrics.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#C5A880]/20">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onInquireQuote(product);
                  }}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#C5A880] hover:bg-[#d5ba94] text-[#121414] text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{t.products.requestQuote}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl border border-[#C5A880]/40 text-[#222222] dark:text-[#F3F0EA] hover:bg-[#222222] hover:text-white dark:hover:bg-white dark:hover:text-[#121414] text-xs uppercase font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{t.products.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>

    {/* ================================================== */}
    {/* FULLSCREEN HIGH-RESOLUTION IMAGE LIGHTBOX */}
    {/* ================================================== */}
    <AnimatePresence>
      {isLightboxOpen && (
        <motion.div
          key={`product-lightbox-${product.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 select-none"
        >
          {/* Lightbox Top Control Bar */}
          <div className="flex items-center justify-between gap-4 py-2 px-3 border-b border-white/10 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                {displayCategory}
              </span>
              <span className="text-white/40 text-xs">•</span>
              <h4 className="text-sm sm:text-base font-serif font-medium text-white truncate max-w-[200px] sm:max-w-md">
                {displayName}
              </h4>
              {galleryImages.length > 1 && (
                <span className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded-full font-mono">
                  {activeImageIndex + 1} / {galleryImages.length}
                </span>
              )}
            </div>

            {/* Zoom Controls & Close */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-1 gap-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setLightboxZoom((prev) => Math.max(0.75, prev - 0.25))}
                  title="Zoom Out"
                  className="p-1.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-white/90 px-2 font-mono font-medium">
                  {Math.round(lightboxZoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxZoom((prev) => Math.min(3, prev + 0.25))}
                  title="Zoom In"
                  className="p-1.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {lightboxZoom !== 1 && (
                  <button
                    type="button"
                    onClick={() => setLightboxZoom(1)}
                    title="Reset Zoom"
                    className="p-1.5 rounded hover:bg-white/10 text-[#C5A880] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsLightboxOpen(false);
                  setLightboxZoom(1);
                }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Close Lightbox"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image Stage */}
          <div
            onClick={(e) => {
              // Click outside image closes lightbox
              if (e.target === e.currentTarget) {
                setIsLightboxOpen(false);
                setLightboxZoom(1);
              }
            }}
            className="flex-1 relative flex items-center justify-center overflow-hidden my-2 sm:my-4"
          >
            {/* Prev Image Button */}
            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={handlePrevImage}
                aria-label="Previous image"
                className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Image Button */}
            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={handleNextImage}
                aria-label="Next image"
                className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* The Full High-Resolution Uncropped Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-full max-h-full flex items-center justify-center cursor-zoom-in"
              onClick={() => setLightboxZoom((prev) => (prev > 1.2 ? 1 : 1.75))}
              title="Click photo to toggle zoom"
            >
              <img
                src={currentImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                style={{
                  transform: `scale(${lightboxZoom})`,
                  transition: 'transform 0.25s ease-out',
                }}
                className="max-h-[80vh] max-w-[92vw] object-contain rounded-lg shadow-2xl pointer-events-auto"
              />
            </motion.div>
          </div>

          {/* Lightbox Footer Bar with Info and Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 sm:pt-3 border-t border-white/10 z-20 text-white">
            <div className="text-xs text-white/70 flex items-center gap-2">
              <span className="hidden sm:inline">{t.products.zoomHint}</span>
              <span className="sm:hidden">{t.products.zoomHintMobile}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  setIsLightboxOpen(false);
                  setLightboxZoom(1);
                  onInquireQuote(product);
                }}
                className="flex-1 sm:flex-none py-2 px-4 rounded-lg bg-[#C5A880] hover:bg-[#d5ba94] text-[#121414] text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>{t.products.inquireAboutPiece}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-white text-xs uppercase font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{t.products.whatsapp}</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
