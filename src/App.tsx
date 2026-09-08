import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { WhyChoose } from './components/WhyChoose';
import { ProductsSection } from './components/ProductsSection';
import { BespokeHighlight } from './components/BespokeHighlight';
import { SocialProof } from './components/SocialProof';
import { Timeline } from './components/Timeline';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './types';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('heaven_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState('Living Room');
  const [quoteDetails, setQuoteDetails] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('heaven_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('heaven_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenQuoteModal = (category: string = 'Living Room', details: string = '') => {
    setQuoteCategory(category);
    setQuoteDetails(details);
    setQuoteModalOpen(true);
  };

  const handleSelectProductForQuote = (product: Product) => {
    setQuoteCategory(product.category);
    setQuoteDetails(`Inquiry for: ${product.name} (${product.category})\nMaterials: ${product.material}\nWood/Board: ${product.wood}\nDimensions: ${product.dimensions}`);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#121414] text-[#222222] dark:text-[#F3F0EA] selection:bg-[#C5A880]/30 transition-colors duration-500">
      {/* Sticky Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        openQuoteModal={() => handleOpenQuoteModal('Living Room')}
      />

      {/* Main Content Sections */}
      <main>
        <Hero openQuoteModal={() => handleOpenQuoteModal('Living Room')} />
        <ProductsSection onSelectProductForQuote={handleSelectProductForQuote} />
        <BespokeHighlight openQuoteModalWithCategory={(cat) => handleOpenQuoteModal(cat)} />
        <WhyChoose />
        <BrandIntro />
        <SocialProof />
        <Timeline />
        <FinalCTA openQuoteModal={() => handleOpenQuoteModal('Living Room')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultCategory={quoteCategory}
        defaultProjectDetails={quoteDetails}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
