
import { Project, PricingPlan, Testimonial, BlogPost, Inquiry } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Coffee Shop Landing',
    category: 'Landing Page',
    description: 'Sebuah landing page modern untuk kedai kopi lokal dengan fitur reservasi online.',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&h=600&auto=format&fit=crop',
    projectUrl: 'https://demo-coffee.idetra.id',
    status: 'published'
  },
  {
    id: '2',
    name: 'Smart School E-Raport',
    category: 'E-Raport',
    description: 'Sistem manajemen nilai siswa digital yang terintegrasi dengan database sekolah untuk kemudahan pelaporan.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma'],
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=600&auto=format&fit=crop',
    projectUrl: 'https://eraport-v2.idetra.id',
    status: 'published'
  },
  {
    id: '3',
    name: 'Personal Digital ID Card',
    category: 'Digital ID Card',
    description: 'Kartu nama digital interaktif dengan QR code untuk networking profesional yang lebih efektif.',
    techStack: ['React', 'Firebase', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&h=600&auto=format&fit=crop',
    projectUrl: 'https://id.idetra.id/john-doe',
    status: 'published'
  }
];

export const INITIAL_PRICING: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Paket Basic',
    price: 'Rp 1.500.000',
    duration: '3-5 Hari',
    features: ['Single Landing Page', 'Mobile Responsive', 'Free Hosting & Domain (1th)', 'SEO Dasar', '3x Revisi'],
    active: true
  },
  {
    id: 'p2',
    name: 'Paket Professional',
    price: 'Rp 3.500.000',
    duration: '7-14 Hari',
    features: ['Hingga 5 Halaman', 'Design Custom Modern', 'Integration WhatsApp', 'Kecepatan Optimal', 'Unlimited Revisi'],
    recommended: true,
    active: true
  },
  {
    id: 'p3',
    name: 'Paket Enterprise',
    price: 'Custom',
    duration: 'Varies',
    features: ['E-Raport System', 'Digital ID Card Bulk', 'Custom Web App / CMS', 'Database Integration', 'Priority Support'],
    active: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Budi Santoso',
    role: 'CEO Startup Nusantara',
    avatar: 'https://picsum.photos/seed/budi/100/100',
    content: 'IDETRA sangat membantu bisnis kami tampil lebih profesional di mata investor. Hasil kerjanya cepat dan rapi.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Alasan Mengapa Bisnis Anda Membutuhkan Website di Tahun 2024',
    excerpt: 'Di era digital saat ini, website bukan lagi sebuah pilihan, melainkan keharusan bagi setiap unit bisnis yang ingin berkembang.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Digital Strategy',
    date: '10 Feb 2024',
    readTime: '5 min read',
    author: 'Admin IDETRA'
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'i1',
    name: 'Rahmat Hidayat',
    email: 'rahmat@tokokita.id',
    type: 'Landing Page',
    message: 'Halo, saya ingin bertanya mengenai pembuatan landing page untuk produk fashion UMKM saya.',
    date: '2024-03-20',
    status: 'new'
  }
];
