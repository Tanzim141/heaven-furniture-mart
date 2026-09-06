import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  CheckCircle,
  Building2,
  PhoneCall,
  Compass,
  Upload,
  Trash2,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Image as ImageIcon,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  defaultProjectDetails?: string;
}

interface ValidationErrors {
  fullName?: string;
  phone?: string;
  category?: string;
  deliveryLocation?: string;
  customBudget?: string;
}

const CATEGORY_OPTIONS = [
  'Sofa',
  'Bed',
  'Dining Table',
  'Dining Chair',
  'Wardrobe',
  'Coffee Table',
  'TV Console',
  'Office Furniture',
  'Outdoor Furniture',
  'Custom Furniture',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under ৳50,000',
  '৳50,000 – ৳1,00,000',
  '৳1,00,000 – ৳3,00,000',
  '৳3,00,000 – ৳5,00,000',
  '৳5,00,000+',
  'Custom Budget',
  'Not Sure Yet',
];

const TIMELINE_OPTIONS = [
  'As soon as possible',
  'Within 2–4 weeks',
  'Within 1–2 months',
  'Flexible',
  'Not sure yet',
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = '',
  defaultProjectDetails = '',
}) => {
  const initialFormData: QuoteFormData = {
    fullName: '',
    phone: '',
    email: '',
    isWhatsapp: true,
    category: '',
    quantity: '1',
    budget: '',
    customBudget: '',
    deliveryLocation: '',
    timeline: '',
    projectDetails: '',
    consultationType: 'showroom',
    referenceImages: [],
  };

  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Map category variations from props to match dropdown if possible
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});

      let mappedCat = '';
      if (defaultCategory) {
        const found = CATEGORY_OPTIONS.find(
          (c) => c.toLowerCase() === defaultCategory.toLowerCase() ||
                 defaultCategory.toLowerCase().includes(c.toLowerCase())
        );
        mappedCat = found || (CATEGORY_OPTIONS.includes(defaultCategory) ? defaultCategory : 'Custom Furniture');
      }

      setFormData({
        ...initialFormData,
        category: mappedCat,
        projectDetails: defaultProjectDetails || '',
      });
    }
  }, [isOpen, defaultCategory, defaultProjectDetails]);

  // Handle Drag and Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const acceptedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    const newImages: Array<{ id: string; url: string; name: string }> = [];

    Array.from(files).forEach((file) => {
      if (acceptedTypes.includes(file.type)) {
        const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const url = URL.createObjectURL(file);
        newImages.push({ id, url, name: file.name });
      }
    });

    if (newImages.length > 0) {
      setFormData((prev) => ({
        ...prev,
        referenceImages: [...prev.referenceImages, ...newImages].slice(0, 6),
      }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = (idToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      referenceImages: prev.referenceImages.filter((img) => img.id !== idToRemove),
    }));
  };

  // Validation
  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number.';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a furniture category.';
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery Location is required.';
    }

    if (formData.budget === 'Custom Budget' && !formData.customBudget.trim()) {
      newErrors.customBudget = 'Please enter your custom budget.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl my-auto bg-[#FBF9F5] dark:bg-[#151918] text-[#222222] dark:text-[#F3F0EA] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.4)] border border-[#C5A880]/30 overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* ================================================== */}
          {/* MODAL HEADER */}
          {/* ================================================== */}
          <div className="sticky top-0 z-20 flex items-start justify-between px-6 sm:px-10 py-5 sm:py-6 border-b border-[#C5A880]/20 bg-[#FBF9F5]/95 dark:bg-[#151918]/95 backdrop-blur-md">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-1">
                HEAVEN FURNITURE MART
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#222222] dark:text-[#F5F2EB] tracking-tight">
                Request a Bespoke Quote
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light mt-0.5">
                “Let’s create something made for your space.”
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 -mr-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ================================================== */}
          {/* MODAL BODY */}
          {/* ================================================== */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-9 custom-scrollbar">
            {isSubmitted ? (
              /* ================================================== */
              /* CONFIRMATION STATE */
              /* ================================================== */
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 sm:py-16 text-center space-y-6 max-w-lg mx-auto"
              >
                <div className="w-20 h-20 bg-[#C5A880]/15 text-[#C5A880] rounded-full flex items-center justify-center mx-auto border border-[#C5A880]/30 shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl sm:text-3xl font-serif font-medium text-[#222222] dark:text-[#F5F2EB]">
                    Thank you for your request.
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    Your bespoke furniture inquiry has been received. Our team will get in touch with you shortly.
                  </p>
                </div>

                {/* Consultation & Details Recap Card */}
                <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-[#1A201F] border border-[#C5A880]/25 text-left text-xs text-neutral-600 dark:text-neutral-300 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#C5A880]/20">
                    <span className="font-semibold text-[#222222] dark:text-[#F5F2EB]">Client Name:</span>
                    <span>{formData.fullName}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#C5A880]/20">
                    <span className="font-semibold text-[#222222] dark:text-[#F5F2EB]">Category:</span>
                    <span>{formData.category} {formData.quantity ? `(${formData.quantity} unit)` : ''}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#222222] dark:text-[#F5F2EB]">Delivery Location:</span>
                    <span>{formData.deliveryLocation}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="btn-gold-3d px-10 py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-bold inline-flex items-center justify-center"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ================================================== */
              /* FORM CONTENT */
              /* ================================================== */
              <form onSubmit={handleSubmit} noValidate className="space-y-9">
                {/* ----------------------------------------------- */}
                {/* 1. YOUR DETAILS */}
                {/* ----------------------------------------------- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#C5A880]/20">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                      1. YOUR DETAILS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Full Name <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Customer Name"
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border text-sm text-[#222222] dark:text-[#F5F2EB] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                          errors.fullName
                            ? 'border-red-400 dark:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-normal">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Phone Number <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. +880 19XXXXXXXX"
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border text-sm text-[#222222] dark:text-[#F5F2EB] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                          errors.phone
                            ? 'border-red-400 dark:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-normal">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & WhatsApp Checkbox */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. customer@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border border-[#C5A880]/30 text-sm text-[#222222] dark:text-[#F5F2EB] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                      />
                    </div>

                    <div className="pt-2 md:pt-7">
                      <label className="flex items-center gap-3 cursor-pointer select-none group">
                        <input
                          type="checkbox"
                          checked={formData.isWhatsapp}
                          onChange={(e) => setFormData({ ...formData, isWhatsapp: e.target.checked })}
                          className="w-4 h-4 rounded border-[#C5A880]/40 text-[#C5A880] focus:ring-[#C5A880] focus:ring-offset-0 bg-white dark:bg-[#121615] cursor-pointer accent-[#C5A880]"
                        />
                        <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                          This number is available on WhatsApp
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* ----------------------------------------------- */}
                {/* 2. WHAT ARE YOU LOOKING FOR? */}
                {/* ----------------------------------------------- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#C5A880]/20">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                      2. WHAT ARE YOU LOOKING FOR?
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    {/* Category Select */}
                    <div className="md:col-span-8">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Furniture Type / Category <span className="text-[#C5A880]">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => {
                          setFormData({ ...formData, category: e.target.value });
                          if (errors.category) setErrors({ ...errors, category: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border text-sm text-[#222222] dark:text-[#F5F2EB] focus:outline-none transition-all cursor-pointer ${
                          errors.category
                            ? 'border-red-400 dark:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                        }`}
                      >
                        <option value="" disabled className="text-neutral-400">
                          Select Furniture Category
                        </option>
                        {CATEGORY_OPTIONS.map((cat) => (
                          <option key={cat} value={cat} className="bg-[#FBF9F5] dark:bg-[#151918]">
                            {cat}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-normal">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.category}
                        </p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-4">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Quantity
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 1"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border border-[#C5A880]/30 text-sm text-[#222222] dark:text-[#F5F2EB] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* ----------------------------------------------- */}
                {/* 3. ESTIMATED BUDGET */}
                {/* ----------------------------------------------- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#C5A880]/20">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                      3. ESTIMATED BUDGET
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Estimated Budget (Optional)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({
                            ...formData,
                            budget: val,
                            customBudget: val === 'Custom Budget' ? formData.customBudget : '',
                          });
                          if (errors.customBudget) setErrors({ ...errors, customBudget: undefined });
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border border-[#C5A880]/30 text-sm text-[#222222] dark:text-[#F5F2EB] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all cursor-pointer"
                      >
                        <option value="">Select Budget Range (Optional)</option>
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b} className="bg-[#FBF9F5] dark:bg-[#151918]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dynamic Custom Budget Field */}
                    {formData.budget === 'Custom Budget' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Your Budget <span className="text-[#C5A880]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.customBudget}
                          onChange={(e) => {
                            setFormData({ ...formData, customBudget: e.target.value });
                            if (errors.customBudget) setErrors({ ...errors, customBudget: undefined });
                          }}
                          placeholder="e.g. ৳2,50,000"
                          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border text-sm text-[#222222] dark:text-[#F5F2EB] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                            errors.customBudget
                              ? 'border-red-400 dark:border-red-500 focus:ring-1 focus:ring-red-400'
                              : 'border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                          }`}
                        />
                        {errors.customBudget && (
                          <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-normal">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.customBudget}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* ----------------------------------------------- */}
                {/* 4. YOUR SPACE */}
                {/* ----------------------------------------------- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#C5A880]/20">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                      4. YOUR SPACE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Delivery Location */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Delivery Location <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.deliveryLocation}
                        onChange={(e) => {
                          setFormData({ ...formData, deliveryLocation: e.target.value });
                          if (errors.deliveryLocation) setErrors({ ...errors, deliveryLocation: undefined });
                        }}
                        placeholder="e.g. Chattogram, Agrabad"
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border text-sm text-[#222222] dark:text-[#F5F2EB] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all ${
                          errors.deliveryLocation
                            ? 'border-red-400 dark:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-[#C5A880]/30 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                        }`}
                      />
                      {errors.deliveryLocation && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-normal">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.deliveryLocation}
                        </p>
                      )}
                    </div>

                    {/* Preferred Timeline */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Preferred Timeline (Optional)
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border border-[#C5A880]/30 text-sm text-[#222222] dark:text-[#F5F2EB] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all cursor-pointer"
                      >
                        <option value="">Select Timeline (Optional)</option>
                        {TIMELINE_OPTIONS.map((t) => (
                          <option key={t} value={t} className="bg-[#FBF9F5] dark:bg-[#151918]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Requirements & Character Counter */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Project Requirements / Space Details
                      </label>
                      <span className="text-[11px] text-neutral-400 font-mono">
                        {formData.projectDetails.length}/1000
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      maxLength={1000}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us about your space, approximate dimensions, preferred wood or finish, color, quantity, design requirements, or anything else we should know…"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121615] border border-[#C5A880]/30 text-sm text-[#222222] dark:text-[#F5F2EB] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all resize-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* ----------------------------------------------- */}
                {/* 5. REFERENCE IMAGES (OPTIONAL) */}
                {/* ----------------------------------------------- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#C5A880]/20">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                      5. REFERENCE IMAGES (OPTIONAL)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light">
                    Upload furniture references, sketches, room photos or floor plans.
                  </p>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/jpg"
                    multiple
                    onChange={handleFileInputChange}
                    className="hidden"
                  />

                  {/* Drag and Drop Box */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 ${
                      isDragging
                        ? 'border-[#C5A880] bg-[#C5A880]/10'
                        : 'border-[#C5A880]/30 bg-white/50 dark:bg-[#121615]/50 hover:border-[#C5A880]/60 hover:bg-white dark:hover:bg-[#121615]'
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shadow-inner">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-[#222222] dark:text-[#F5F2EB]">
                        Click to upload or drag & drop reference files
                      </p>
                      <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                        Supports JPG, PNG, WebP (up to 6 files)
                      </p>
                    </div>
                  </div>

                  {/* Thumbnails Display */}
                  {formData.referenceImages.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                      {formData.referenceImages.map((img) => (
                        <div
                          key={img.id}
                          className="relative group rounded-xl overflow-hidden border border-[#C5A880]/30 aspect-square bg-neutral-900"
                        >
                          <img
                            src={img.url}
                            alt={img.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Prevent broken image display
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-white">
                            <span className="text-[10px] truncate max-w-full mb-2">{img.name}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveImage(img.id);
                              }}
                              className="p-1.5 rounded-full bg-red-600/90 text-white hover:bg-red-700 transition-colors"
                              title="Remove image"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ----------------------------------------------- */}
                {/* 6. PREFERRED CONSULTATION */}
                {/* ----------------------------------------------- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#C5A880]/20">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                      6. PREFERRED CONSULTATION
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* Option 1: Showroom Visit */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: 'showroom' })}
                      className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                        formData.consultationType === 'showroom'
                          ? 'border-[#C5A880] bg-[#C5A880]/10 dark:bg-[#C5A880]/15 shadow-sm'
                          : 'border-[#C5A880]/20 bg-white dark:bg-[#121615] hover:border-[#C5A880]/50'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mb-2.5">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <h5 className="font-serif text-sm font-semibold text-[#222222] dark:text-[#F5F2EB]">
                          1. Showroom Visit
                        </h5>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                          Visit our showroom
                        </p>
                      </div>

                      {formData.consultationType === 'showroom' && (
                        <div className="mt-3 pt-2 border-t border-[#C5A880]/20 flex items-center gap-1.5 text-[11px] font-medium text-[#C5A880]">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>Showroom: Agrabad</span>
                        </div>
                      )}
                    </button>

                    {/* Option 2: WhatsApp / Phone */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: 'remote' })}
                      className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                        formData.consultationType === 'remote'
                          ? 'border-[#C5A880] bg-[#C5A880]/10 dark:bg-[#C5A880]/15 shadow-sm'
                          : 'border-[#C5A880]/20 bg-white dark:bg-[#121615] hover:border-[#C5A880]/50'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mb-2.5">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <h5 className="font-serif text-sm font-semibold text-[#222222] dark:text-[#F5F2EB]">
                          2. WhatsApp / Phone
                        </h5>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                          Discuss your project remotely
                        </p>
                      </div>
                    </button>

                    {/* Option 3: Free Design Consultation */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: 'guidance' })}
                      className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                        formData.consultationType === 'guidance'
                          ? 'border-[#C5A880] bg-[#C5A880]/10 dark:bg-[#C5A880]/15 shadow-sm'
                          : 'border-[#C5A880]/20 bg-white dark:bg-[#121615] hover:border-[#C5A880]/50'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mb-2.5">
                          <Compass className="w-4 h-4" />
                        </div>
                        <h5 className="font-serif text-sm font-semibold text-[#222222] dark:text-[#F5F2EB]">
                          3. Free Design Consultation
                        </h5>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                          Get guidance from our team
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* ----------------------------------------------- */}
                {/* 7. FORM FOOTER */}
                {/* ----------------------------------------------- */}
                <div className="pt-4 border-t border-[#C5A880]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 order-2 sm:order-1">
                    <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                    <span>Your information is safe with us.</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end order-1 sm:order-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold-3d px-7 py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#121414] border-t-transparent rounded-full animate-spin"></span>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT QUOTE REQUEST</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
