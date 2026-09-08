import React, { useState, useEffect } from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, openQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.home, href: '#home' },
    { name: t.navbar.products, href: '#products' },
    { name: t.navbar.bespoke, href: '#bespoke' },
    { name: t.navbar.whyHeaven, href: '#why-choose' },
    { name: t.navbar.about, href: '#about' },
    { name: t.navbar.contact, href: '#contact' },
  ];

  // Dynamic colors based on scroll and dark mode
  const isLightNav = scrolled && !darkMode;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'py-2.5 bg-[#0e1616]/95 backdrop-blur-md border-b border-[#C5A880]/20 shadow-xl'
            : 'py-2.5 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#C5A880]/30 shadow-md'
          : 'py-4 md:py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <a href="#home" className="inline-block flex-shrink-0">
          <Logo lightText={!isLightNav} />
        </a>

        {/* Unified Navigation Links */}
        <nav className="flex items-center space-x-2.5 sm:space-x-5 md:space-x-8 overflow-x-auto no-scrollbar py-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all ${
                isLightNav
                  ? 'text-neutral-800 hover:text-[#C5A880]'
                  : 'text-white/90 hover:text-[#E5A93B]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Language Switcher, Theme Toggle & Request Quote CTA) */}
        <div className="flex items-center space-x-1.5 sm:space-x-2.5 md:space-x-3 flex-shrink-0">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Bangla' : 'English'}`}
            title={language === 'en' ? 'বাংলা ভার্সনে দেখুন (Switch to Bangla)' : 'Switch to English'}
            className={`px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 hover:scale-105 ${
              isLightNav
                ? 'border-[#C5A880]/40 bg-neutral-100/90 text-neutral-800 hover:border-[#C5A880] shadow-sm'
                : 'border-[#C5A880]/30 bg-black/40 backdrop-blur-md text-white hover:border-[#E5A93B]'
            }`}
          >
            <Languages className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#C5A880]">
              {language === 'en' ? 'বাংলা' : 'English'}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`p-1.5 sm:p-2.5 rounded-full border transition-all cursor-pointer hover:scale-105 ${
              isLightNav
                ? 'border-[#C5A880]/40 bg-neutral-100/90 text-neutral-800 hover:border-[#C5A880] shadow-sm'
                : 'border-[#C5A880]/30 bg-black/40 backdrop-blur-md text-white hover:border-[#E5A93B]'
            }`}
          >
            {darkMode ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5A93B]" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />
            )}
          </button>

          {/* Request Quote CTA */}
          <button
            onClick={openQuoteModal}
            className="btn-gold-3d px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-6 rounded-xl text-[10px] sm:text-xs uppercase font-bold tracking-wider flex items-center justify-center cursor-pointer whitespace-nowrap shadow-lg"
          >
            <span>{t.navbar.requestQuote}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
