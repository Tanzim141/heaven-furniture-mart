export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface FeaturedDesign {
  id: string;
  title: string;
  category: string;
  image: string;
  inspiration: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export type ProductCategory = 'Living Room' | 'Living' | 'Bedroom' | 'Dining' | 'Office' | 'Outdoor' | 'Accent & Decor';
export type OrderType = 'Made to Order' | 'Bespoke' | 'Ready to Order';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  gallery?: string[];
  material: string;
  wood: string;
  board?: string;
  dimensions: string;
  description: string;
  orderType: OrderType;
  leadTime: string;
  badge?: 'BEST SELLER' | 'NEW' | 'HANDCRAFTED' | 'Handcrafted' | 'BESPOKE' | string;
  colors?: string[];
  veneers?: string[];
  finishes?: string[];
  fabrics?: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  isWhatsapp: boolean;
  category: string;
  quantity: string;
  budget: string;
  customBudget: string;
  deliveryLocation: string;
  timeline: string;
  projectDetails: string;
  consultationType: 'showroom' | 'remote' | 'guidance';
  referenceImages: Array<{ id: string; url: string; name: string }>;
}
