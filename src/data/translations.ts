export interface TranslationDictionary {
  navbar: {
    home: string;
    products: string;
    bespoke: string;
    whyHeaven: string;
    about: string;
    contact: string;
    requestQuote: string;
    langToggleEn: string;
    langToggleBn: string;
    currentLang: string;
  };
  hero: {
    titlePart1: string;
    titlePart2: string;
    description: string;
    ctaBespoke: string;
    scrollExplore: string;
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    showingText: string;
    productsText: string;
    sortFeatured: string;
    sortNewest: string;
    sortPopular: string;
    allProducts: string;
    livingRoom: string;
    bedroom: string;
    dining: string;
    office: string;
    outdoor: string;
    emptyTitle: string;
    emptyDescription: string;
    resetFilters: string;
    calloutBadge: string;
    calloutTitle: string;
    calloutText: string;
    calloutCta: string;
    requestQuote: string;
    viewDetails: string;
    viewFullPhoto: string;
    orderType: string;
    leadTime: string;
    specifications: string;
    dimensions: string;
    woodBoard: string;
    primaryMaterial: string;
    customizationAvailable: string;
    customDimensions: string;
    colorSelection: string;
    veneerSelection: string;
    finishSelection: string;
    fabricSelection: string;
    deliveryAssemblyNote: string;
    fullView: string;
    whatsapp: string;
    zoomHint: string;
    zoomHintMobile: string;
    inquireAboutPiece: string;
    clickZoomHint: string;
  };
  bespoke: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    differenceTitle: string;
    differenceText: string;
    precisionBadge: string;
    quoteImage: string;
    journeyEyebrow: string;
    journeyTitle: string;
    workshopTag: string;
    steps: {
      number: string;
      title: string;
      description: string;
      detail: string;
    }[];
    pillars: {
      space: string;
      taste: string;
      consultation: string;
      timber: string;
    };
    ctaExplore: string;
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  brandIntro: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    founderBadgeYear: string;
    founderBadgeText: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
  };
  socialProof: {
    quote: string;
    author: string;
    designation: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    subtitle: string;
    milestones: {
      year: string;
      title: string;
      description: string;
    }[];
  };
  finalCta: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    quoteBtn: string;
    whatsappBtn: string;
    location: string;
    phone: string;
    visitShowroom: string;
    fullAddress: string;
    getDirections: string;
    openInGoogleMaps: string;
    showroomHours: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    collections: string;
    showroomContact: string;
    address: string;
    rights: string;
    collectionsList: string[];
    links: {
      home: string;
      products: string;
      bespoke: string;
      whyHeaven: string;
      about: string;
      contact: string;
    };
  };
  quoteModal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    step1: string;
    fullName: string;
    fullNamePlaceholder: string;
    fullNameRequired: string;
    phone: string;
    phonePlaceholder: string;
    phoneRequired: string;
    phoneInvalid: string;
    email: string;
    emailPlaceholder: string;
    isWhatsapp: string;
    step2: string;
    category: string;
    categorySelect: string;
    categoryRequired: string;
    quantity: string;
    quantityPlaceholder: string;
    step3: string;
    budget: string;
    budgetSelect: string;
    customBudget: string;
    customBudgetPlaceholder: string;
    customBudgetRequired: string;
    step4: string;
    deliveryLocation: string;
    deliveryLocationPlaceholder: string;
    deliveryLocationRequired: string;
    timeline: string;
    timelineSelect: string;
    projectDetails: string;
    projectDetailsPlaceholder: string;
    step5: string;
    step5Subtitle: string;
    uploadText: string;
    uploadSubtext: string;
    step6: string;
    consultationShowroom: string;
    consultationShowroomDesc: string;
    consultationShowroomBadge: string;
    consultationRemote: string;
    consultationRemoteDesc: string;
    consultationGuidance: string;
    consultationGuidanceDesc: string;
    securityNotice: string;
    cancel: string;
    submit: string;
    processing: string;
    successTitle: string;
    successDesc: string;
    clientName: string;
    categoryLabel: string;
    locationLabel: string;
    done: string;
    categories: Record<string, string>;
    budgetOptions: Record<string, string>;
    timelineOptions: Record<string, string>;
  };
  whatsapp: {
    chatText: string;
  };
}

export const translations: Record<'en' | 'bn', TranslationDictionary> = {
  en: {
    navbar: {
      home: 'Home',
      products: 'Products',
      bespoke: 'Bespoke',
      whyHeaven: 'Why Heaven',
      about: 'About',
      contact: 'Contact',
      requestQuote: 'Request A Quote',
      langToggleEn: 'English',
      langToggleBn: 'বাংলা',
      currentLang: 'EN',
    },
    hero: {
      titlePart1: 'Furniture,',
      titlePart2: 'Crafted Around You.',
      description: 'Bespoke furniture, thoughtfully designed and crafted with uncompromising precision.',
      ctaBespoke: 'Explore Bespoke',
      scrollExplore: 'Scroll to explore',
    },
    products: {
      eyebrow: 'OUR SIGNATURE FURNITURE',
      title: 'Featured Products',
      subtitle: 'Every piece is made-to-order using premium-quality wood and high-grade boards, customized to your exact measurements, preferred colors, veneers, finishes, and fabric selections.',
      searchPlaceholder: 'Search products by name, category, or style...',
      showingText: 'Showing',
      productsText: 'products',
      sortFeatured: 'Featured',
      sortNewest: 'Newest',
      sortPopular: 'Popular',
      allProducts: 'All Products',
      livingRoom: 'Living Room',
      bedroom: 'Bedroom',
      dining: 'Dining',
      office: 'Office',
      outdoor: 'Outdoor',
      emptyTitle: 'No Products Found',
      emptyDescription: "We couldn't find any products matching your search or filters. You can reset filters or request a custom bespoke quotation.",
      resetFilters: 'Reset Filters',
      calloutBadge: 'Tailored To Your Space',
      calloutTitle: 'Need a completely custom size, finish, or architectural layout?',
      calloutText: 'Every home is unique. Share your floor plan or sketch with our team, and we will engineer custom blueprints and exact estimations.',
      calloutCta: 'Request Custom Consultation →',
      requestQuote: 'REQUEST QUOTE',
      viewDetails: 'VIEW DETAILS',
      viewFullPhoto: 'View Full Photo',
      orderType: 'ORDER TYPE',
      leadTime: 'LEAD TIME',
      specifications: 'SPECIFICATIONS',
      dimensions: 'Dimensions',
      woodBoard: 'Wood / Board',
      primaryMaterial: 'Primary Material',
      customizationAvailable: 'CUSTOMIZATION AVAILABLE',
      customDimensions: 'Custom Dimensions: Built to your exact room blueprint & space plan',
      colorSelection: 'Color Selection:',
      veneerSelection: 'Veneer Selection:',
      finishSelection: 'Finish Selection:',
      fabricSelection: 'Fabric Selection:',
      deliveryAssemblyNote: 'Delivery & Assembly Available',
      fullView: 'Full View',
      whatsapp: 'WHATSAPP',
      zoomHint: 'Tip: Click photo or use buttons to zoom. Press ESC to close.',
      zoomHintMobile: 'Tap photo to zoom • ESC to close',
      inquireAboutPiece: 'Inquire About This Piece',
      clickZoomHint: 'Click to Zoom & Full View',
    },
    bespoke: {
      eyebrow: 'THE BESPOKE EXPERIENCE',
      titleLine1: 'Made For Your Space.',
      titleLine2: 'Made For You.',
      description: 'Every space is different. We create bespoke furniture around your measurements, needs, taste and lifestyle.',
      differenceTitle: 'What makes Heaven different:',
      differenceText: "We don’t simply sell ready-made pieces. We architect custom furniture tailored specifically to your floor plan.",
      precisionBadge: 'Architectural Precision',
      quoteImage: '"Furniture sculpted to synchronize with light, angles, and everyday living."',
      journeyEyebrow: 'FROM CONCEPT TO CREATION',
      journeyTitle: 'The 5-Step Bespoke Journey',
      workshopTag: 'In-House Master Joinery in Chattogram',
      steps: [
        {
          number: '01',
          title: 'CONSULT',
          description: 'Understand your needs.',
          detail: 'Free design dialogue exploring your lifestyle, function, and aesthetic vision.',
        },
        {
          number: '02',
          title: 'MEASURE',
          description: 'Work around your space.',
          detail: 'Precision dimension analysis tailored to your specific architectural layout.',
        },
        {
          number: '03',
          title: 'DESIGN',
          description: 'Shape the piece around your taste.',
          detail: 'Custom 3D blueprints, timber grain selection, and bespoke fabric pairings.',
        },
        {
          number: '04',
          title: 'CRAFT',
          description: 'Skilled in-house craftsmanship.',
          detail: 'Master joinery in seasoned Chittagong timber built inside our dedicated workshop.',
        },
        {
          number: '05',
          title: 'YOUR SPACE',
          description: 'A finished piece made for you.',
          detail: 'White-glove delivery, seamless installation, and permanent structural elegance.',
        },
      ],
      pillars: {
        space: 'Your Space & Dimensions',
        taste: 'Your Taste & Lifestyle',
        consultation: 'Free Design Consultation',
        timber: 'Seasoned Timber & Joinery',
      },
      ctaExplore: 'Explore Bespoke',
    },
    whyChoose: {
      eyebrow: 'THE HEAVEN STANDARD',
      title: 'Why Choose Heaven Furniture Mart',
      subtitle: 'Quality, craftsmanship, and service designed around you.',
      items: [
        {
          title: 'Free Design Consultation',
          description: 'Get thoughtful guidance to plan furniture around your space and needs.',
        },
        {
          title: 'Fully Bespoke',
          description: 'Furniture designed and crafted to your exact requirements.',
        },
        {
          title: 'Premium Craftsmanship',
          description: 'Premium-quality wood and high-grade boards, crafted with attention to detail.',
        },
        {
          title: 'Showroom Experience',
          description: 'Visit our showroom and explore our furniture in person.',
        },
        {
          title: 'Delivery & Installation',
          description: 'Professional delivery and installation for a seamless experience.',
        },
        {
          title: 'Flexible Payment Options',
          description: 'Convenient payment options designed around your furniture purchase.',
        },
      ],
    },
    brandIntro: {
      eyebrow: 'THE PHILOSOPHY OF CRAFT',
      title: 'Furniture Designed Around You.',
      p1: "Heaven Furniture Mart creates bespoke furniture and refined interior styling, designed around each customer's needs, space, and taste.",
      p2: 'From thoughtful design to skilled craftsmanship, every piece is created to bring comfort, character, and a distinctive sense of style to your space.',
      founderBadgeYear: '2020',
      founderBadgeText: 'Founded by Abul Kalam Bhuiyan.',
      card1Title: 'Bespoke Built',
      card1Desc: 'Designed around your space, size and taste.',
      card2Title: 'Skilled Craftsmanship',
      card2Desc: 'Thoughtfully designed and crafted with care.',
    },
    socialProof: {
      quote: '"At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients."',
      author: 'Abul Kalam Bhuiyan',
      designation: 'Managing Director, Heaven Furniture Mart',
    },
    timeline: {
      eyebrow: 'Our Journey',
      title: 'Milestones of Excellence',
      subtitle: 'Tracing our growth from a visionary boutique studio to a recognized leader in bespoke furniture.',
      milestones: [
        {
          year: '2020',
          title: 'Foundation',
          description: 'Founded by Abul Kalam Bhuiyan with a commitment to bespoke luxury craftsmanship.',
        },
        {
          year: '2021',
          title: 'Showroom Launch',
          description: 'Opened the large physical showroom on Agrabad Access Road, Chattogram.',
        },
        {
          year: '2024–2025',
          title: 'International Furniture Fair',
          description: 'Exhibited flagship bespoke furniture collections at the International Furniture Fair, Chattogram.',
        },
        {
          year: '2025',
          title: 'Chamber of Commerce',
          description: 'Became an esteemed member of the Chamber of Commerce.',
        },
        {
          year: '2026',
          title: 'BFIOA Recognition',
          description: 'Received nationwide BFIOA recognition for excellence in bespoke interior styling and design.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'CHATTOGRAM · SINCE 2020',
      titleLine1: "Let's Design Something Beautiful",
      titleLine2: 'for Your Space.',
      description: 'Request a Quote today and let our team bring your vision to life with master craftsmanship and bespoke precision.',
      quoteBtn: 'Request a Quote',
      whatsappBtn: 'WhatsApp Us',
      location: 'Agrabad Access Road, Chattogram',
      phone: '+880 1960-481983',
      visitShowroom: 'Visit Our Showroom',
      fullAddress: 'Agrabad Access Road, Chattogram, Bangladesh',
      getDirections: 'Get Directions',
      openInGoogleMaps: 'Open Google Maps',
      showroomHours: '10:00 AM – 9:00 PM (Daily)',
    },
    footer: {
      tagline: 'Luxury Furniture & Interior Styling. Crafted in Chattogram. Since 2020.',
      quickLinks: 'Quick Links',
      collections: 'Collections',
      showroomContact: 'Showroom & Contact',
      address: 'Agrabad Access Road, Chattogram, Bangladesh',
      rights: '© 2026 Heaven Furniture Mart. All rights reserved.',
      collectionsList: [
        'Living Room (Sofas & Consoles)',
        'Bedroom (Beds & Wardrobes)',
        'Dining (Tables & Sideboards)',
        'Signature Bespoke Projects',
        'Interior Styling Consultations',
      ],
      links: {
        home: 'Home',
        products: 'Products',
        bespoke: 'Bespoke',
        whyHeaven: 'Why Heaven',
        about: 'About',
        contact: 'Contact',
      },
    },
    quoteModal: {
      eyebrow: 'HEAVEN FURNITURE MART',
      title: 'Request a Bespoke Quote',
      subtitle: '“Let’s create something made for your space.”',
      step1: '1. YOUR DETAILS',
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g. Customer Name',
      fullNameRequired: 'Full Name is required.',
      phone: 'Phone Number',
      phonePlaceholder: 'e.g. +880 19XXXXXXXX',
      phoneRequired: 'Phone Number is required.',
      phoneInvalid: 'Please provide a valid phone number.',
      email: 'Email Address (Optional)',
      emailPlaceholder: 'e.g. customer@example.com',
      isWhatsapp: 'This number is available on WhatsApp',
      step2: '2. WHAT ARE YOU LOOKING FOR?',
      category: 'Furniture Type / Category',
      categorySelect: 'Select Furniture Category',
      categoryRequired: 'Please select a furniture category.',
      quantity: 'Quantity',
      quantityPlaceholder: 'e.g. 1',
      step3: '3. ESTIMATED BUDGET',
      budget: 'Estimated Budget (Optional)',
      budgetSelect: 'Select Budget Range (Optional)',
      customBudget: 'Your Budget',
      customBudgetPlaceholder: 'e.g. ৳2,50,000',
      customBudgetRequired: 'Please enter your custom budget.',
      step4: '4. YOUR SPACE',
      deliveryLocation: 'Delivery Location',
      deliveryLocationPlaceholder: 'e.g. Chattogram, Agrabad',
      deliveryLocationRequired: 'Delivery Location is required.',
      timeline: 'Preferred Timeline (Optional)',
      timelineSelect: 'Select Timeline (Optional)',
      projectDetails: 'Project Requirements / Space Details',
      projectDetailsPlaceholder: 'Tell us about your space, approximate dimensions, preferred wood or finish, color, quantity, design requirements, or anything else we should know…',
      step5: '5. REFERENCE IMAGES (OPTIONAL)',
      step5Subtitle: 'Upload furniture references, sketches, room photos or floor plans.',
      uploadText: 'Click to upload or drag & drop reference files',
      uploadSubtext: 'Supports JPG, PNG, WebP (up to 6 files)',
      step6: '6. PREFERRED CONSULTATION',
      consultationShowroom: '1. Showroom Visit',
      consultationShowroomDesc: 'Visit our showroom',
      consultationShowroomBadge: 'Showroom: Agrabad',
      consultationRemote: '2. WhatsApp / Phone',
      consultationRemoteDesc: 'Discuss your project remotely',
      consultationGuidance: '3. Free Design Consultation',
      consultationGuidanceDesc: 'Get guidance from our team',
      securityNotice: 'Your information is safe with us.',
      cancel: 'Cancel',
      submit: 'SUBMIT QUOTE REQUEST',
      processing: 'Processing...',
      successTitle: 'Thank you for your request.',
      successDesc: 'Your bespoke furniture inquiry has been received. Our team will get in touch with you shortly.',
      clientName: 'Client Name:',
      categoryLabel: 'Category:',
      locationLabel: 'Delivery Location:',
      done: 'Done',
      categories: {
        'Sofa': 'Sofa',
        'Bed': 'Bed',
        'Dining Table': 'Dining Table',
        'Dining Chair': 'Dining Chair',
        'Wardrobe': 'Wardrobe',
        'Coffee Table': 'Coffee Table',
        'TV Console': 'TV Console',
        'Office Furniture': 'Office Furniture',
        'Outdoor Furniture': 'Outdoor Furniture',
        'Custom Furniture': 'Custom Furniture',
        'Other': 'Other',
      },
      budgetOptions: {
        'Under ৳50,000': 'Under ৳50,000',
        '৳50,000 – ৳1,00,000': '৳50,000 – ৳1,00,000',
        '৳1,00,000 – ৳3,00,000': '৳1,00,000 – ৳3,00,000',
        '৳3,00,000 – ৳5,00,000': '৳3,00,000 – ৳5,00,000',
        '৳5,00,000+': '৳5,00,000+',
        'Custom Budget': 'Custom Budget',
        'Not Sure Yet': 'Not Sure Yet',
      },
      timelineOptions: {
        'As soon as possible': 'As soon as possible',
        'Within 2–4 weeks': 'Within 2–4 weeks',
        'Within 1–2 months': 'Within 1–2 months',
        'Flexible': 'Flexible',
        'Not sure yet': 'Not sure yet',
      },
    },
    whatsapp: {
      chatText: 'WhatsApp Us',
    },
  },
  bn: {
    navbar: {
      home: 'হোম',
      products: 'পণ্যসমূহ',
      bespoke: 'কাস্টম ডিজাইন',
      whyHeaven: 'কেন হেভেন',
      about: 'আমাদের সম্পর্কে',
      contact: 'যোগাযোগ',
      requestQuote: 'কোটেশন চান',
      langToggleEn: 'English',
      langToggleBn: 'বাংলা',
      currentLang: 'বাংলা',
    },
    hero: {
      titlePart1: 'ফার্নিচার,',
      titlePart2: 'আপনার পছন্দের আদলে তৈরি।',
      description: 'আপনার রুচি, প্রয়োজন এবং ঘরের মাপ অনুযায়ী নিখুঁতভাবে তৈরি প্রিমিয়াম কাস্টমাইজড ফার্নিচার।',
      ctaBespoke: 'কাস্টম কালেকশন দেখুন',
      scrollExplore: 'আরও দেখতে স্ক্রোল করুন',
    },
    products: {
      eyebrow: 'আমাদের সিগনেচার ফার্নিচার',
      title: 'জনপ্রিয় পণ্যসমূহ',
      subtitle: 'প্রতিটি ফার্নিচার প্রিমিয়াম কাঠ ও উন্নতমানের বোর্ড দিয়ে আপনার ঘরের নির্দিষ্ট মাপ, পছন্দসই রঙ, ভিনিয়ার ও ফেব্রিকের সমন্বয়ে কাস্টমাইজ করে তৈরি করা হয়।',
      searchPlaceholder: 'নাম, ক্যাটাগরি বা স্টাইল দিয়ে খুঁজুন...',
      showingText: 'প্রদর্শিত হচ্ছে',
      productsText: 'টি পণ্য',
      sortFeatured: 'ফিচার্ড',
      sortNewest: 'নতুন',
      sortPopular: 'জনপ্রিয়',
      allProducts: 'সকল পণ্য',
      livingRoom: 'লিভিং রুম',
      bedroom: 'বেডরুম',
      dining: 'ডাইনিং',
      office: 'অফিস',
      outdoor: 'আউটডোর',
      emptyTitle: 'কোনো পণ্য পাওয়া যায়নি',
      emptyDescription: 'আপনার অনুসন্ধানের সাথে মিল রেখে কোনো পণ্য পাওয়া যায়নি। ফিল্টার পরিবর্তন করুন অথবা সরাসরি কাস্টম কোটেশনের জন্য যোগাযোগ করুন।',
      resetFilters: 'ফিল্টার রিসেট করুন',
      calloutBadge: 'আপনার ঘরের উপযোগী',
      calloutTitle: 'নির্দিষ্ট সাইজ, ফিনিশ বা কাস্টম ডিজাইনের ফার্নিচার প্রয়োজন?',
      calloutText: 'প্রতিটি ঘরের গঠন আলাদা। আপনার ফ্লোর প্ল্যান বা নকশা আমাদের সাথে শেয়ার করুন, আমরা নিখুঁত ব্লুপ্রিন্ট ও সঠিক বাজেট হিসাব করে দেব।',
      calloutCta: 'কাস্টম পরামর্শ চান →',
      requestQuote: 'কোটেশন চান',
      viewDetails: 'বিস্তারিত দেখুন',
      viewFullPhoto: 'বড় ছবি দেখুন',
      orderType: 'অর্ডারের ধরণ',
      leadTime: 'ডেলিভারির সময়',
      specifications: 'স্পেসিফিকেশন',
      dimensions: 'পরিমাপ/সাইজ',
      woodBoard: 'কাঠ / বোর্ড',
      primaryMaterial: 'মূল উপাদান',
      customizationAvailable: 'কাস্টমাইজেশনের সুবিধা',
      customDimensions: 'কাস্টম সাইজ: আপনার ঘরের রুম প্ল্যান অনুযায়ী হুবহু মাপে তৈরি',
      colorSelection: 'রঙের পছন্দ:',
      veneerSelection: 'ভিনিয়ার নির্বাচন:',
      finishSelection: 'ফিনিশ নির্বাচন:',
      fabricSelection: 'ফেব্রিক নির্বাচন:',
      deliveryAssemblyNote: 'হোম ডেলিভারি ও ফিটিং সুবিধা উপলব্ধ',
      fullView: 'ফুল ভিউ',
      whatsapp: 'হোয়াটসঅ্যাপ',
      zoomHint: 'টিপস: জুম করতে ছবিতে ক্লিক করুন বা বোতাম ব্যবহার করুন। বন্ধ করতে ESC চাপুন।',
      zoomHintMobile: 'জুম করতে ছবিতে ট্যাপ করুন • বন্ধ করতে ESC চাপুন',
      inquireAboutPiece: 'এই পণ্যের কোটেশন চান',
      clickZoomHint: 'জুম ও ফুল ভিউ দেখতে ক্লিক করুন',
    },
    bespoke: {
      eyebrow: 'কাস্টম ডিজাইন অভিজ্ঞতা',
      titleLine1: 'আপনার ঘরের জন্য তৈরি।',
      titleLine2: 'আপনার মনের মতো তৈরি।',
      description: 'প্রতিটি ঘরের ডিজাইন অনন্য। আপনার ঘরের মাপ, চাহিদা ও জীবনযাত্রার সাথে মিলিয়ে আমরা তৈরি করি মনের মতো আসবাব।',
      differenceTitle: 'আমাদের বিশেষত্ব:',
      differenceText: 'আমরা সাধারণ রেডিমেড ফার্নিচার বিক্রির বদলে আপনার ফ্লোর প্ল্যান এবং অভ্যন্তরীণ কাঠামোর সাথে মিলিয়ে স্পেশাল কাস্টম ফার্নিচার তৈরি করি।',
      precisionBadge: 'স্থাপত্যশিল্পের নিখুঁত মাপ',
      quoteImage: '"ঘরের আলো, কোণ এবং প্রাত্যহিক স্বাচ্ছন্দ্যের সাথে সামঞ্জস্য রেখে তৈরি আসবাব।"',
      journeyEyebrow: 'পরিকল্পনা থেকে নির্মাণ',
      journeyTitle: '৫ ধাপে কাস্টম ডিজাইনের পথচলা',
      workshopTag: 'চট্টগ্রামে নিজস্ব কারখানায় অভিজ্ঞ কারিগর দ্বারা নির্মিত',
      steps: [
        {
          number: '০১',
          title: 'পরামর্শ (CONSULT)',
          description: 'আপনার প্রয়োজন বুঝুন।',
          detail: 'লাইফস্টাইল, ব্যবহার ও নান্দনিক রুচির সমন্বয়ে অভিজ্ঞ ডিজাইনারের সাথে ফ্রি আলোচনা।',
        },
        {
          number: '০২',
          title: 'পরিমাপ (MEASURE)',
          description: 'ঘরের জায়গা অনুযায়ী মাপ।',
          detail: 'আপনার ঘরের ফ্লোর ও দেওয়ালের আর্কিটেকচারাল মাপের নিখুঁত বিশ্লেষণ।',
        },
        {
          number: '০৩',
          title: 'ডিজাইন (DESIGN)',
          description: 'রুচি অনুযায়ী নকশা ও উপাদান।',
          detail: 'কাস্টম থ্রিডি ব্লুপ্রিন্ট, সিজন্ড কাঠের টেক্সচার ও মানানসই ফেব্রিক সিলেকশন।',
        },
        {
          number: '০৪',
          title: 'তৈরি (CRAFT)',
          description: 'দক্ষ কারিগরদের নির্মাণ।',
          detail: 'চট্টগ্রামের ঐতিহ্যবাহী পাকা সিজন্ড কাঠ দিয়ে নিজস্ব ওয়ার্কশপে মাস্টার জয়েনারি।',
        },
        {
          number: '০৫',
          title: 'আপনার ঘরে (YOUR SPACE)',
          description: 'স্বপ্নের ফার্নিচার ইনস্টলেশন।',
          detail: 'যত্নশীল হোম ডেলিভারি, নিখুঁত ফিটিং এবং আজীবন আভিজাত্যের নিশ্চয়তা।',
        },
      ],
      pillars: {
        space: 'ঘরের পরিমাপ অনুযায়ী',
        taste: 'রুচি ও লাইফস্টাইল অনুযায়ী',
        consultation: 'ফ্রি ডিজাইন কনসাল্টেশন',
        timber: 'সিজন্ড কাঠ ও নিখুঁত জয়েনারি',
      },
      ctaExplore: 'কাস্টম কালেকশন দেখুন',
    },
    whyChoose: {
      eyebrow: 'হেভেন স্ট্যান্ডার্ড',
      title: 'কেন বেছে নেবেন হেভেন ফার্নিচার মার্ট',
      subtitle: 'সেরা মান, দক্ষ কারিগরি এবং আপনার স্বাচ্ছন্দ্যে নিবেদিত সেবা।',
      items: [
        {
          title: 'ফ্রি ডিজাইন পরামর্শ',
          description: 'আপনার ঘরের জায়গা ও প্রয়োজন অনুযায়ী ফার্নিচার পরিকল্পনায় অভিজ্ঞ দলের আন্তরিক পরামর্শ।',
        },
        {
          title: 'সম্পূর্ণ কাস্টমাইজড',
          description: 'আপনার পছন্দ, রুচি ও নির্ধারিত সাইজে নিখুঁত মাপে তৈরি আসবাব।',
        },
        {
          title: 'প্রিমিয়াম কারিগরি',
          description: 'উচ্চমানের সিজন্ড কাঠ ও উন্নতমানের বোর্ড দিয়ে গভীর মনোযোগে তৈরি।',
        },
        {
          title: 'শোরুম এক্সপেরিয়েন্স',
          description: 'সরাসরি শোরুমে এসে আসবাবপত্রের কোয়ালিটি ও ফিনিশ নিজ চোখে পরখ করুন।',
        },
        {
          title: 'ডেলিভারি ও ফিটিং',
          description: 'নিরাপদ ডেলিভারি ও দক্ষ কারিগর দ্বারা ঝামেলাহীন নিখুঁত ইনস্টলেশন।',
        },
        {
          title: 'সহজ পেমেন্ট সুবিধা',
          description: 'আপনার সুবিধার কথা বিবেচনা করে সহজ ও নমনীয় পেমেন্ট ব্যবস্থা।',
        },
      ],
    },
    brandIntro: {
      eyebrow: 'আমাদের কাজের দর্শন',
      title: 'আপনার মনের মতো করে সাজানো ফার্নিচার।',
      p1: 'হেভেন ফার্নিচার মার্ট প্রতিটি গ্রাহকের চাহিদা, ঘরের পরিমাপ ও রুচিকে প্রাধান্য দিয়ে তৈরি করে প্রিমিয়াম কাস্টম আসবাব এবং চমৎকার ইন্টেরিয়র স্টাইলিং।',
      p2: 'মননশীল ডিজাইন থেকে শুরু করে নিপুণ কারিগরি—প্রতিটি আসবাব আপনার ঘরে এনে দেয় পরম আরাম, আভিজাত্য এবং রুচিশীলতার অনন্য ছোঁয়া।',
      founderBadgeYear: '২০২০',
      founderBadgeText: 'আবুল কালাম ভুঁইয়া কর্তৃক প্রতিষ্ঠিত।',
      card1Title: 'কাস্টমাইজড নির্মাণ',
      card1Desc: 'আপনার ঘরের মাপ, সাইজ ও পছন্দের সাথে মানানসই।',
      card2Title: 'দক্ষ কারিগরি',
      card2Desc: 'গভীর যত্ন ও দক্ষতার সাথে নির্মিত।',
    },
    socialProof: {
      quote: '“হেভেন ফার্নিচার মার্টে আমরা বিশ্বাস করি ফার্নিচার কেবল ব্যবহারের জিনিস নয়; এটি আপনার রুচি, ব্যক্তিত্ব ও আভিজাত্যের প্রতিফলন। আমাদের তৈরি প্রতিটি আসবাব আপনার ঘরে এনে দেয় দীর্ঘস্থায়ী সৌন্দর্য ও স্বাচ্ছন্দ্য।”',
      author: 'আবুল কালাম ভুঁইয়া',
      designation: 'ব্যবস্থাপনা পরিচালক, হেভেন ফার্নিচার মার্ট',
    },
    timeline: {
      eyebrow: 'আমাদের পথচলা',
      title: 'সাফল্যের গৌরবময় অধ্যায়',
      subtitle: 'একটি স্বপ্নদর্শী বুটিক স্টুডিও থেকে কাস্টম ফার্নিচারের বিশ্বস্ত শীর্ষ প্রতিষ্ঠানে উত্তরণের গল্প।',
      milestones: [
        {
          year: '২০২০',
          title: 'প্রতিষ্ঠা',
          description: 'আবুল কালাম ভুঁইয়ার হাত ধরে প্রিমিয়াম কাস্টম কারিগরির প্রতিশ্রুতি নিয়ে যাত্রা শুরু।',
        },
        {
          year: '২০২১',
          title: 'শোরুমের শুভ উদ্বোধন',
          description: 'চট্টগ্রামের প্রাণকেন্দ্র আগ্রাবাদ এক্সেস রোডে বিশাল ফিজিক্যাল শোরুমের শুভযাত্রা।',
        },
        {
          year: '২০২৪–২০২৫',
          title: 'আন্তর্জাতিক ফার্নিচার মেলা',
          description: 'চট্টগ্রাম আন্তর্জাতিক ফার্নিচার মেলায় আমাদের সিগনেচার কাস্টম ফার্নিচার প্রদর্শন।',
        },
        {
          year: '২০২৫',
          title: 'চেম্বার অব কমার্স সদস্যপদ',
          description: 'চিটাগাং চেম্বার অব কমার্সের মর্যাদাপূর্ণ সদস্যপদ অর্জন।',
        },
        {
          year: '২০২৬',
          title: 'BFIOA স্বীকৃতি',
          description: 'কাস্টম ফার্নিচার ও ইন্টেরিয়র স্টাইলিংয়ে দেশব্যাপী বিশেষ অবদানের জন্য BFIOA স্বীকৃতি লাভ।',
        },
      ],
    },
    finalCta: {
      eyebrow: 'চট্টগ্রাম · ২০২০ থেকে',
      titleLine1: 'আপনার ঘরের জন্য সুন্দর কিছু',
      titleLine2: 'একসাথে তৈরি করি।',
      description: 'আজই কোটেশনের আবেদন করুন এবং আমাদের অভিজ্ঞ কারিগরদের নিখুঁত ছোঁয়ায় আপনার স্বপ্নের বাড়ি সাজিয়ে তুলুন।',
      quoteBtn: 'কোটেশন চান',
      whatsappBtn: 'হোয়াটসঅ্যাপে কথা বলুন',
      location: 'আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম',
      phone: '+৮৮০ ১৯৬০-৪৮১৯৮৩',
      visitShowroom: 'আমাদের শোরুমে আসুন',
      fullAddress: 'আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম, বাংলাদেশ',
      getDirections: 'ডিরেকশন দেখুন',
      openInGoogleMaps: 'গুগল ম্যাপে দেখুন',
      showroomHours: 'সকাল ১০:০০ – রাত ৯:০০ (প্রতিদিন খোলা)',
    },
    footer: {
      tagline: 'লাক্সারি ফার্নিচার ও ইন্টেরিয়র স্টাইলিং। চট্টগ্রামে তৈরি। ২০২০ থেকে।',
      quickLinks: 'প্রয়োজনীয় লিংক',
      collections: 'কালেকশনসমূহ',
      showroomContact: 'শোরুম ও যোগাযোগ',
      address: 'আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম, বাংলাদেশ',
      rights: '© ২০২৬ হেভেন ফার্নিচার মার্ট। সর্বস্বত্ব সংরক্ষিত।',
      collectionsList: [
        'লিভিং রুম (সোফা ও কনসোল)',
        'বেডরুম (খাট ও আলমারি)',
        'ডাইনিং (টেবিল ও সাইডবোর্ড)',
        'সিগনেচার কাস্টম প্রজেক্ট',
        'ইন্টেরিয়র স্টাইলিং পরামর্শ',
      ],
      links: {
        home: 'হোম',
        products: 'পণ্যসমূহ',
        bespoke: 'বিস্পোক',
        whyHeaven: 'কেন হেভেন',
        about: 'আমাদের সম্পর্কে',
        contact: 'যোগাযোগ',
      },
    },
    quoteModal: {
      eyebrow: 'হেভেন ফার্নিচার মার্ট',
      title: 'কাস্টম ফার্নিচারের কোটেশন চান',
      subtitle: '“আপনার ঘরের জন্য মনের মতো করে তৈরি।”',
      step1: '১. আপনার তথ্য',
      fullName: 'পুরো নাম',
      fullNamePlaceholder: 'আপনার নাম লিখুন',
      fullNameRequired: 'পুরো নাম দেওয়া আবশ্যক।',
      phone: 'ফোন নম্বর',
      phonePlaceholder: 'যেমন: ০১৯XXXXXXXX',
      phoneRequired: 'ফোন নম্বর দেওয়া আবশ্যক।',
      phoneInvalid: 'অনুগ্রহ করে একটি সঠিক ফোন নম্বর লিখুন।',
      email: 'ইমেইল এড্রেস (ঐচ্ছিক)',
      emailPlaceholder: 'যেমন: customer@example.com',
      isWhatsapp: 'এই নম্বরে হোয়াটসঅ্যাপ চালু আছে',
      step2: '২. আপনি কী ধরণের ফার্নিচার খুঁজছেন?',
      category: 'ফার্নিচারের ধরণ / ক্যাটাগরি',
      categorySelect: 'ফার্নিচার ক্যাটাগরি নির্বাচন করুন',
      categoryRequired: 'অনুগ্রহ করে একটি ক্যাটাগরি নির্বাচন করুন।',
      quantity: 'পরিমাণ (সংখ্যা)',
      quantityPlaceholder: 'যেমন: ১',
      step3: '৩. সম্ভাব্য বাজেট',
      budget: 'সম্ভাব্য বাজেট (ঐচ্ছিক)',
      budgetSelect: 'বাজেটের পরিধি নির্বাচন করুন (ঐচ্ছিক)',
      customBudget: 'আপনার বাজেট',
      customBudgetPlaceholder: 'যেমন: ৳২,৫০,০০০',
      customBudgetRequired: 'অনুগ্রহ করে আপনার নির্দিষ্ট বাজেট লিখুন।',
      step4: '৪. আপনার ঘরের বিবরণ',
      deliveryLocation: 'ডেলিভারির ঠিকানা / এলাকা',
      deliveryLocationPlaceholder: 'যেমন: চট্টগ্রাম, আগ্রাবাদ',
      deliveryLocationRequired: 'ডেলিভারির ঠিকানা দেওয়া আবশ্যক।',
      timeline: 'কবে ডেলিভারি প্রয়োজন? (ঐচ্ছিক)',
      timelineSelect: 'সময়সীমা নির্বাচন করুন (ঐচ্ছিক)',
      projectDetails: 'প্রজেক্টের বিবরণ / ঘরের মাপ ও পছন্দ',
      projectDetailsPlaceholder: 'আপনার ঘরের মাপ, পছন্দের কাঠ বা ফিনিশিং, রঙ, ডিজাইন বা বিশেষ কোনো চাহিদা থাকলে তা সংক্ষেপে জানান…',
      step5: '৫. রেফারেন্স ছবি (ঐচ্ছিক)',
      step5Subtitle: 'পছন্দের ফার্নিচারের ছবি, স্কেচ বা রুমের ছবি আপলোড করুন।',
      uploadText: 'ফাইল আপলোড করতে ক্লিক করুন অথবা ড্র্যাগ করে এখানে ছাড়ুন',
      uploadSubtext: 'JPG, PNG, WebP ফাইল সমর্থন করে (সর্বোচ্চ ৬টি)',
      step6: '৬. কীভাবে পরামর্শ পেতে চান?',
      consultationShowroom: '১. শোরুম ভিজিট',
      consultationShowroomDesc: 'সরাসরি শোরুমে আসুন',
      consultationShowroomBadge: 'শোরুম: আগ্রাবাদ',
      consultationRemote: '২. হোয়াটসঅ্যাপ / ফোন',
      consultationRemoteDesc: 'অনলাইনে ফোনে আলোচনা করুন',
      consultationGuidance: '৩. ফ্রি ডিজাইন পরামর্শ',
      consultationGuidanceDesc: 'আমাদের দলের কাছ থেকে গাইডলাইন নিন',
      securityNotice: 'আপনার ব্যক্তিগত তথ্য আমাদের কাছে নিরাপদ।',
      cancel: 'বাতিল',
      submit: 'কোটেশনের আবেদন জমা দিন',
      processing: 'প্রসেসিং হচ্ছে...',
      successTitle: 'ধন্যবাদ, আপনার আবেদন জমা হয়েছে।',
      successDesc: 'আপনার কাস্টম ফার্নিচারের তথ্য সফলভাবে জমা নেওয়া হয়েছে। খুব শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।',
      clientName: 'গ্রাহকের নাম:',
      categoryLabel: 'ক্যাটাগরি:',
      locationLabel: 'ডেলিভারি লোকেশন:',
      done: 'সম্পন্ন',
      categories: {
        'Sofa': 'সোফা',
        'Bed': 'বেড / খাট',
        'Dining Table': 'ডাইনিং টেবিল',
        'Dining Chair': 'ডাইনিং চেয়ার',
        'Wardrobe': 'আলমারি / ওয়ারড্রোব',
        'Coffee Table': 'কফি টেবিল',
        'TV Console': 'টিভি কনসোল',
        'Office Furniture': 'অফিস ফার্নিচার',
        'Outdoor Furniture': 'আউটডোর ফার্নিচার',
        'Custom Furniture': 'কাস্টম ফার্নিচার',
        'Other': 'অন্যান্য',
      },
      budgetOptions: {
        'Under ৳50,000': '৫০,০০০ টাকার নিচে',
        '৳50,000 – ৳1,00,000': '৫০,০০০ – ১,০০,০০০ টাকা',
        '৳1,00,000 – ৳3,00,000': '১,০০,০০০ – ৩,০০,০০০ টাকা',
        '৳3,00,000 – ৳5,00,000': '৩,০০,০০০ – ৫,০০,০০০ টাকা',
        '৳5,00,000+': '৫,০০,০০০+ টাকা',
        'Custom Budget': 'কাস্টম বাজেট',
        'Not Sure Yet': 'এখনই নিশ্চিত নই',
      },
      timelineOptions: {
        'As soon as possible': 'যত দ্রুত সম্ভব',
        'Within 2–4 weeks': '২–৪ সপ্তাহের মধ্যে',
        'Within 1–2 months': '১–২ মাসের মধ্যে',
        'Flexible': 'সুবিধাজনক সময়ে',
        'Not sure yet': 'এখনই নিশ্চিত নই',
      },
    },
    whatsapp: {
      chatText: 'হোয়াটসঅ্যাপে কথা বলুন',
    },
  },
};

// Bengali translations for products
export const productTranslationsBn: Record<string, {
  name: string;
  category: string;
  material: string;
  wood: string;
  dimensions: string;
  description: string;
  orderType: string;
  leadTime: string;
  badge?: string;
  colors?: string[];
  fabrics?: string[];
  finishes?: string[];
  veneers?: string[];
}> = {
  'prod-bespoke-wooden-daybed-27': {
    name: 'বিস্পোক কাঠের ডে-বেড',
    category: 'লিভিং রুম',
    material: 'ন্যাচারাল ক্যান উইভ ও নিখুঁত কাঠের কারুকাজ সাথে আরামদায়ক লাউঞ্জ কুশন',
    wood: 'প্রিমিয়াম সলিড সেগুন কাঠ ও ন্যাচারাল অ্যাশ ফিনিশ',
    dimensions: '৭৮" দৈর্ঘ্য x ৩৪" প্রস্থ x ২৮" উচ্চতা (কাস্টম সাইজ সম্ভব)',
    description: 'আভিজাত্য ও আরামের নিখুঁত মেলবন্ধনে হস্তনির্মিত রাজকীয় কাঠের ডে-বেড।',
    orderType: 'কাস্টমাইজড',
    leadTime: '১৪–১৮ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
  'prod-luxury-hanging-lounge-chair-28': {
    name: 'লাক্সারি ঝুলন্ত লাউঞ্জ চেয়ার',
    category: 'লিভিং রুম',
    material: 'হাতে বোনা আর্টিসানাল ল্যাটিস, ওয়েদারপ্রুফ সাসপেনশন ও আল্ট্রা-সফট কুশনিং',
    wood: 'রিইনফোর্সড সলিড টিক আর্ক ও হেভি-ডিউটি ফ্রেম',
    dimensions: '৪২" প্রস্থ x ৩৮" গভীরতা x ৭৬" উচ্চতা',
    description: 'আপনার ঘরে বা বারান্দায় আধুনিক স্টাইল ও আরামদায়ক স্বাচ্ছন্দ্য এনে দেওয়ার স্টাইলিশ ঝুলন্ত চেয়ার।',
    orderType: 'কাস্টমাইজড',
    leadTime: '১২–১৬ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
  'prod-royal-luxury-sofa-set-26': {
    name: 'রয়্যাল লাক্সারি সোফা সেট',
    category: 'লিভিং রুম',
    material: 'রয়্যাল ভেলভেট আপহোলস্ট্রি, হাই-কমফোর্ট ফোম ও হাতে খোদাই করা গোল্ড লিফ নকশা',
    wood: 'সিজন্ড সলিড সেগুন কাঠ ও ডার্ক মেহগনি কাঠামো',
    dimensions: '৩-সিটার: ৯২"x৩৮"x৩৮" | ২-সিটার: ৬৮" | সিঙ্গেল: ৪০"',
    description: 'অভিজাত লিভিং রুমের জন্য হাতে নিখুঁতভাবে খোদাই করা রাজকীয় সোফা সেট।',
    orderType: 'কাস্টমাইজড',
    leadTime: '১৬–২২ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
  'prod-heaven-royal-sofa-25': {
    name: 'হেভেন রয়্যাল লাক্সারি সোফা',
    category: 'লিভিং রুম',
    material: 'রয়্যাল ভেলভেট, হাই-রেজিলিয়েন্স কুশনিং ও অপূর্ব হাতের কারুকাজ',
    wood: 'সিজন্ড সলিড সেগুন ও হার্ডউড কাঠামো',
    dimensions: '৯৬" প্রস্থ x ৪০" গভীরতা x ৩৮" উচ্চতা (কাস্টম সাইজ সম্ভব)',
    description: 'রাজকীয় লিভিং স্পেসের জন্য উপযুক্ত সলিড সেগুন কাঠের প্রিমিয়াম হ্যান্ডক্রাফটেড সোফা।',
    orderType: 'কাস্টমাইজড',
    leadTime: '১৫–২০ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
  'prod-royal-carved-bed-23': {
    name: 'হেভেন রয়্যাল কার্ভড মাস্টার বেড',
    category: 'বেডরুম',
    material: 'টারকোয়েজ ভেলভেট হেডবোর্ড ও ২৪ ক্যারেট গোল্ড লিফ ফ্লোরাল কার্ভিং',
    wood: 'সলিড সিজন্ড সেগুন কাঠ ও ডার্ক মেহগনি ফ্রেম',
    dimensions: '৮৪" প্রস্থ x ৯০" দৈর্ঘ্য x ৬৮" উচ্চতা (কিং সাইজ - কাস্টম সম্ভব)',
    description: 'অপূর্ব ভেলভেট হেডবোর্ড ও সোনালী বারোক খোদাই করা রাজকীয় মাস্টার বেড।',
    orderType: 'কাস্টমাইজড',
    leadTime: '১৮–২৪ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
  'prod-royal-bed': {
    name: 'হেভেন রয়্যাল কার্ভড মাস্টার বেড (পান্না সংস্করণ)',
    category: 'বেডরুম',
    material: 'পান্না সবুজ ভেলভেট আপহোলস্ট্রি, ফ্লুটেড চ্যানেল টাফটিং ও ডায়মন্ড কুইল্টেড বেস',
    wood: 'বাঁকানো সলিড সেগুন/আখরোট কাঠ ও হেভি-ডিউটি ফ্রেম',
    dimensions: '৮৪" প্রস্থ x ৯০" দৈর্ঘ্য x ৬৮" উচ্চতা (কিং সাইজ)',
    description: 'পান্না সবুজ ভেলভেট হেডবোর্ড ও কার্ভড কাঠের রাজকীয় নকশায় তৈরি মাস্টারপিস বেড।',
    orderType: 'কাস্টমাইজড',
    leadTime: '১৮–২৪ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
  'prod-1': {
    name: 'অরেলিয়াস ভেলভেট সেকশনাল সোফা',
    category: 'লিভিং রুম',
    material: 'হাই-ডেনসিটি কুশনিং ও বেলজিয়ান ভেলভেট আপহোলস্ট্রি',
    wood: 'প্রিমিয়াম হার্ডউড ইনার ফ্রেম ও হাই-গ্রেড বোর্ড',
    dimensions: '১১৮" প্রস্থ x ৬৮" গভীরতা x ৩৪" উচ্চতা',
    description: 'আভিজাত্যপূর্ণ ও আরামদায়ক সিটিংয়ের প্রিমিয়াম ওয়াটার-রেপেলেন্ট ভেলভেট সেকশনাল সোফা।',
    orderType: 'অর্ডার অনুযায়ী তৈরি',
    leadTime: '১২–১৬ দিন',
    badge: 'বেস্ট সেলার',
  },
  'prod-2': {
    name: 'মোনার্ক ৮-সিটার লাইভ-এজ ডাইনিং টেবিল',
    category: 'ডাইনিং',
    material: 'ন্যাচারাল সলিড হার্ডউড স্ল্যাব ও শ্যাম্পেন ব্রাস ট্রেসল',
    wood: 'কিলন-ড্রাইড সলিড হার্ডউড ও ট্রিটেড স্টিল',
    dimensions: '৯৬" দৈর্ঘ্য x ৪২" প্রস্থ x ৩০" উচ্চতা',
    description: 'প্রাকৃতিক কাঠের খাঁজ বজায় রেখে তৈরি নান্দনিক ও মজবুত সলিড উড ডাইনিং টেবিল।',
    orderType: 'কাস্টমাইজড',
    leadTime: '১৮–২২ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
  'prod-3': {
    name: 'ক্যান্টিলিভার আপহোলস্টার্ড প্ল্যাটফর্ম বেড',
    category: 'বেডরুম',
    material: 'টেক্সচার্ড বুকলে ফেব্রিক ও ফ্লোটিং সাব-বেস',
    wood: 'রিইনফোর্সড সলিড হার্ডউড ও হাই-গ্রেড বোর্ড',
    dimensions: '৮২" প্রস্থ x ৮৮" দৈর্ঘ্য x ৪৮" উচ্চতা',
    description: 'আধুনিক ভাসমান ডিজাইনের প্ল্যাটফর্ম বেড সাথে আরামদায়ক অ্যাকোস্টিক হেডবোর্ড প্যানেল।',
    orderType: 'অর্ডার অনুযায়ী তৈরি',
    leadTime: '১৪–১৮ দিন',
    badge: 'নতুন',
  },
  'prod-7': {
    name: 'দ্য সভরেন এক্সিকিউটিভ রাইটিং ডেস্ক',
    category: 'অফিস',
    material: 'বুকম্যাচড ভেনিয়ার, লেদার ডেস্ক ইনলে ও ওয়্যার চ্যানেল',
    wood: 'কিলন-ড্রাইড হার্ডউড কাঠামো ও হাই-গ্রেড বোর্ড',
    dimensions: '৭২" প্রস্থ x ৩৬" গভীরতা x ৩০" উচ্চতা',
    description: 'এক্সিকিউটিভ অফিস ও স্টাডি স্পেসের জন্য সফ্ট-ক্লোজিং ড্রয়ারযুক্ত আভিজাত্যপূর্ণ ওয়ার্কস্টেশন।',
    orderType: 'অর্ডার অনুযায়ী তৈরি',
    leadTime: '১৫–২০ দিন',
    badge: 'কাস্টমাইজড',
  },
  'prod-10': {
    name: 'ইলিসিয়ান লাইটেড ভ্যানিটি ড্রেসিং টেবিল',
    category: 'বেডরুম',
    material: 'ইন্টিগ্রেটেড সেন্সর লাইট মিরর ও ভেলভেট ডিভাইডার',
    wood: 'সলিড হার্ডউড ও হাই-গ্রেড বোর্ড প্যানেলিং',
    dimensions: '৪৮" প্রস্থ x ২০" গভীরতা x ৫৬" উচ্চতা',
    description: 'মাল্টি-স্পেকট্রাম লাইটিং ও সাজসজ্জার দ্রব্যাদি রাখার আধুনিক প্রসাধনী ড্রেসিং টেবিল।',
    orderType: 'অর্ডার অনুযায়ী তৈরি',
    leadTime: '১২–১৫ দিন',
  },
  'prod-12': {
    name: 'সলস্টিস কার্ভড বুকলে অ্যাকসেন্ট লাউঞ্জ চেয়ার',
    category: 'লিভিং রুম',
    material: 'হেভিওয়েট আইভরি বুকলে ও হাই-রেজিলিয়েন্স কোর',
    wood: 'ইন্টারনাল হার্ডউড ফ্রেম ও সুইভেল মেকানিজম',
    dimensions: '৩৪" প্রস্থ x ৩২" গভীরতা x ৩০" উচ্চতা',
    description: 'লিভিং রুম, রিডিং স্পেস বা বেডরুমের জন্য নান্দনিক আরামদায়ক অর্গানিক লাউঞ্জ চেয়ার।',
    orderType: 'অর্ডার অনুযায়ী তৈরি',
    leadTime: '৭–১০ দিন',
    badge: 'হ্যান্ডক্রাফটেড',
  },
};
