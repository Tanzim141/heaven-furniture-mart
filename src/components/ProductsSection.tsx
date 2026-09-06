import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, RefreshCw, Layers } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { productsData } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductsSectionProps {
  onSelectProductForQuote: (product: Product) => void;
}

type FilterCategory = 'All' | ProductCategory;
type SortOption = 'featured' | 'newest' | 'popular';

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Dynamic category calculations
  const categories: { label: string; value: FilterCategory; count: number }[] = [
    { label: 'All Products', value: 'All', count: productsData.length },
    { label: 'Living Room', value: 'Living Room', count: productsData.filter((p) => p.category === 'Living Room' || p.category === 'Living').length },
    { label: 'Bedroom', value: 'Bedroom', count: productsData.filter((p) => p.category === 'Bedroom').length },
    { label: 'Dining', value: 'Dining', count: productsData.filter((p) => p.category === 'Dining').length },
    { label: 'Office', value: 'Office', count: productsData.filter((p) => p.category === 'Office').length },
    { label: 'Outdoor', value: 'Outdoor', count: productsData.filter((p) => p.category === 'Outdoor').length },
  ];

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' ||
          product.category === selectedCategory ||
          (selectedCategory === 'Living Room' && product.category === 'Living');
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === '' ||
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.material.toLowerCase().includes(q) ||
          product.wood.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          (product.badge && product.badge.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortOption === 'newest') {
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        }
        if (sortOption === 'popular') {
          return (b.isPopular || b.badge === 'BEST SELLER' ? 1 : 0) - (a.isPopular || a.badge === 'BEST SELLER' ? 1 : 0);
        }
        return 0; // Featured default
      });
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <section id="products" className="py-20 md:py-32 bg-[#F4EFE6] dark:bg-[#131717] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* ================================================== */}
        {/* 1. PRODUCTS SECTION HEADER */}
        {/* ================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-10 bg-[#C5A880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-bold">
                OUR SIGNATURE FURNITURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-[#222222] dark:text-[#F3F0EA]">
              Featured Products
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-600 dark:text-neutral-400 font-light max-w-md text-xs sm:text-sm leading-relaxed">
            Every piece is made-to-order using premium-quality wood and high-grade boards, customized to your exact measurements, preferred colors, veneers, finishes, and fabric selections.
          </p>
        </div>

        {/* ================================================== */}
        {/* 2. CATEGORY FILTERS & SEARCH / SORT CONTROLS */}
        {/* ================================================== */}
        <div className="mb-10 space-y-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories
              .filter((cat) => cat.count > 0 || cat.value === 'All')
              .map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border ${
                  selectedCategory === cat.value
                    ? 'bg-[#222222] text-white dark:bg-[#C5A880] dark:text-[#121414] border-transparent shadow-sm'
                    : 'bg-[#FBF9F5] dark:bg-[#1B2020] text-neutral-700 dark:text-neutral-300 border-[#C5A880]/25 hover:border-[#C5A880]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.value
                      ? 'bg-white/20 dark:bg-black/20'
                      : 'bg-neutral-200 dark:bg-neutral-800'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search & Sort Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-[#FBF9F5] dark:bg-[#1B2020] p-3 sm:p-3.5 rounded-2xl border border-[#C5A880]/20 shadow-sm">
            {/* Search Input */}
            <div className="relative w-full sm:w-96 flex items-center">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, category, or style..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-transparent border border-neutral-200 dark:border-neutral-700/60 text-xs focus:outline-none focus:border-[#C5A880] text-[#222222] dark:text-[#F3F0EA] placeholder:text-neutral-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-white absolute right-3 p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light hidden lg:inline-block">
                Showing <strong className="font-semibold text-[#222222] dark:text-white">{filteredProducts.length}</strong> products
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="bg-transparent border border-neutral-200 dark:border-neutral-700/60 text-xs rounded-xl px-3 py-2 text-[#222222] dark:text-[#F3F0EA] focus:outline-none focus:border-[#C5A880] cursor-pointer"
                >
                  <option value="featured" className="bg-[#FBF9F5] dark:bg-[#161919]">Featured</option>
                  <option value="newest" className="bg-[#FBF9F5] dark:bg-[#161919]">Newest</option>
                  <option value="popular" className="bg-[#FBF9F5] dark:bg-[#161919]">Popular</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* 3. PRODUCT CARDS GRID */}
        {/* ================================================== */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setActiveModalProduct(p)}
                  onInquire={(p) => onSelectProductForQuote(p)}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 sm:py-20 bg-[#FBF9F5] dark:bg-[#1B2020] rounded-3xl border border-[#C5A880]/20 p-8">
            <Layers className="w-12 h-12 text-[#C5A880] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-serif font-medium text-[#222222] dark:text-[#F3F0EA] mb-2">
              No Products Found
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-6">
              We couldn't find any products matching your search or filters. You can reset filters or request a custom bespoke quotation.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A880] text-[#121414] font-bold text-xs uppercase tracking-wider hover:bg-[#d4b993] transition-colors cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

        {/* ================================================== */}
        {/* 4. BESPOKE BLUEPRINT CALLOUT BANNER */}
        {/* ================================================== */}
        <div className="mt-16 bg-gradient-to-r from-[#142624] to-[#0D1918] text-white p-7 sm:p-10 md:p-12 rounded-3xl border border-[#C5A880]/30 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#C5A880] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Tailored To Your Space</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium mb-2.5">
              Need a completely custom size, finish, or architectural layout?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Every home is unique. Share your floor plan or sketch with our team, and we will engineer custom blueprints and exact estimations.
            </p>
          </div>

          <button
            onClick={() => onSelectProductForQuote({
              id: 'custom-bespoke',
              name: 'Custom Architectural Furniture Project',
              category: 'Living Room',
              image: '',
              material: 'Custom Material Selection',
              wood: 'Premium Hardwood & High-Grade Board',
              dimensions: 'Custom Room Dimensions',
              description: 'Custom bespoke furniture project tailored around specific room architecture.',
              orderType: 'Bespoke',
              leadTime: '15–25 Days',
            })}
            className="relative z-10 whitespace-nowrap px-7 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#d5ba94] text-[#121414] font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer shrink-0"
          >
            Request Custom Consultation &rarr;
          </button>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onInquireQuote={(p) => {
          setActiveModalProduct(null);
          onSelectProductForQuote(p);
        }}
      />
    </section>
  );
};
