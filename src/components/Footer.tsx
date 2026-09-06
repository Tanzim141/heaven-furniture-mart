import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0F0F] text-[#F3F0EA] pt-20 pb-12 border-t border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-6">
            <Logo lightText={true} />

            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Luxury Furniture & Interior Styling. Crafted in Chattogram. Since 2020.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-[#121414] transition-all flex items-center justify-center border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-[#121414] transition-all flex items-center justify-center border border-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-[#121414] transition-all flex items-center justify-center border border-white/10"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="text-sm text-neutral-400 hover:text-[#C5A880] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-neutral-400 hover:text-[#C5A880] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#bespoke" className="text-sm text-neutral-400 hover:text-[#C5A880] transition-colors">
                  Bespoke
                </a>
              </li>
              <li>
                <a href="#why-choose" className="text-sm text-neutral-400 hover:text-[#C5A880] transition-colors">
                  Why Heaven
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-neutral-400 hover:text-[#C5A880] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-neutral-400 hover:text-[#C5A880] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Collections */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">Collections</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-light">
              <li>Living Room (Sofas & Consoles)</li>
              <li>Bedroom (Beds & Wardrobes)</li>
              <li>Dining (Tables & Sideboards)</li>
              <li>Signature Bespoke Projects</li>
              <li>Interior Styling Consultations</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">Showroom & Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Agrabad Access Road, Chattogram, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="tel:+8801960481983" className="hover:text-white transition-colors">
                  +880 1960-481983
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="mailto:heavenfurnituremart@gmail.com" className="hover:text-white transition-colors">
                  heavenfurnituremart@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-center text-xs text-neutral-500 font-light">
          <p>© 2026 Heaven Furniture Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
