import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const whatsappMessage = language === 'bn'
    ? 'হ্যালো হ্যাভেন ফার্নিচার মার্ট, আমি কাস্টম ফার্নিচার বা ইন্টেরিয়র স্টাইলিং সম্পর্কে জানতে চাই।'
    : 'Hello Heaven Furniture Mart, I would like to discuss a bespoke furniture or interior styling project.';
  const whatsappUrl = `https://wa.me/8801960481983?text=${encodeURIComponent(whatsappMessage)}`;

  const [isHovered, setIsHovered] = useState(false);
  const [constraints, setConstraints] = useState({
    left: -1200,
    right: 0,
    top: -1200,
    bottom: 0,
  });
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const updateConstraints = () => {
      setConstraints({
        left: -(window.innerWidth - 80),
        right: 0,
        top: -(window.innerHeight - 80),
        bottom: 0,
      });
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={constraints}
      dragElastic={0.15}
      onDragStart={() => {
        isDraggingRef.current = true;
      }}
      onDragEnd={() => {
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 120);
      }}
      whileHover={{ scale: 1.08 }}
      whileDrag={{ scale: 1.15, cursor: 'grabbing' }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }}
      className="fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing select-none touch-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={language === 'bn' ? 'স্ক্রিনে যেকোনো জায়গায় ড্র্যাগ করতে পারেন। হোয়াটসঅ্যাপে কথা বলতে ক্লিক করুন।' : 'Drag to any position on the screen. Click to chat on WhatsApp.'}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with Heaven Furniture Mart on WhatsApp"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-[0_12px_35px_rgba(37,211,102,0.45)] border-2 border-white/20 flex items-center justify-center transition-shadow duration-300 pointer-events-auto"
      >
        <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        <span
          className={`overflow-hidden whitespace-nowrap text-xs sm:text-sm font-semibold transition-all duration-300 ease-in-out ${
            isHovered ? 'max-w-xs pl-2 pr-1 opacity-100' : 'max-w-0 pl-0 pr-0 opacity-0'
          }`}
        >
          {t.whatsapp.chatText}
        </span>
      </a>
    </motion.div>
  );
};
