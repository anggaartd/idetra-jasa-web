
import { Project, PricingPlan, Testimonial, BlogPost } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Coffee Shop Landing',
    category: 'Landing Page',
    description: 'Sebuah landing page modern untuk kedai kopi lokal dengan fitur reservasi online.',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&h=600&auto=format&fit=crop',
    demoUrl: 'https://coffee-demo.idetra.id',
    status: 'published'
  },
  {
    id: '2',
    name: 'Smart School E-Raport',
    category: 'E-Raport',
    description: 'Sistem manajemen nilai siswa digital yang terintegrasi dengan database sekolah untuk kemudahan pelaporan.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma'],
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=600&auto=format&fit=crop',
    demoUrl: 'https://eraport-demo.idetra.id',
    status: 'published'
  },
  {
    id: '3',
    name: 'Personal Digital ID Card',
    category: 'Digital ID Card',
    description: 'Kartu nama digital interaktif dengan QR code untuk networking profesional yang lebih efektif.',
    techStack: ['React', 'Firebase', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&h=600&auto=format&fit=crop',
    demoUrl: 'https://idcard.idetra.id/u/john-doe',
    status: 'published'
  },
  {
    id: '4',
    name: 'Yayasan Peduli Kasih',
    category: 'Organisasi Profile',
    description: 'Website profil organisasi non-profit dengan fitur manajemen donasi dan laporan transparansi.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&h=600&auto=format&fit=crop',
    demoUrl: 'https://pedulikasih.org',
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
  },
  {
    id: 't2',
    name: 'Sari Wijaya',
    role: 'Owner Wijaya Florist',
    avatar: 'https://picsum.photos/seed/sari/100/100',
    content: 'Website landing page buatan IDETRA meningkatkan konversi penjualan kami hingga 40%. Sangat recommended!'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Pentingnya Website untuk UMKM di Tahun 2024',
    excerpt: 'Mengapa bisnis kecil harus mulai beralih ke ranah digital untuk bertahan di kompetisi saat ini.',
    date: '15 Mar 2024',
    category: 'Bisnis',
    author: 'Admin IDETRA',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=400&auto=format&fit=crop',
    readTime: '5 min'
  },
  {
    id: 'b2',
    title: 'Mengoptimalkan Kecepatan Loading Website',
    excerpt: 'Tips dan trik teknis untuk membuat website Anda terbuka dalam sekejap mata.',
    date: '10 Mar 2024',
    category: 'Teknologi',
    author: 'Tech Lead',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=400&auto=format&fit=crop',
    readTime: '8 min'
  },
  {
    id: 'b3',
    title: 'Transformasi Digital Sekolah dengan E-Raport',
    excerpt: 'Bagaimana sistem digitalisasi nilai mempermudah administrasi guru dan transparansi orang tua.',
    date: '05 Mar 2024',
    category: 'Edukasi',
    author: 'Solution Architect',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&h=400&auto=format&fit=crop',
    readTime: '6 min'
  }
];
