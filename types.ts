
export interface Project {
  id: string;
  name: string;
  category: 'Company Profile' | 'Landing Page' | 'Custom Web App' | 'E-Commerce' | 'Digital ID Card' | 'E-Raport' | 'Organisasi Profile';
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  status: 'published' | 'draft';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
  active: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  imageUrl: string;
  readTime: string;
}
