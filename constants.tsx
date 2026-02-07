
import { Project, PricingPlan, Testimonial, BlogPost, Inquiry } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Coffee Shop Landing',
    category: 'Landing Page',
    description: 'Sebuah landing page modern untuk kedai kopi lokal dengan fitur reservasi online.',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&h=600&auto=format&fit=crop',
    status: 'published'
  },
  {
    id: '2',
    name: 'Smart School E-Raport',
    category: 'E-Raport',
    description: 'Sistem manajemen nilai siswa digital yang terintegrasi dengan database sekolah untuk kemudahan pelaporan.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma'],
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=600&auto=format&fit=crop',
    status: 'published'
  },
  {
    id: '3',
    name: 'Personal Digital ID Card',
    category: 'Digital ID Card',
    description: 'Kartu nama digital interaktif dengan QR code untuk networking profesional yang lebih efektif.',
    techStack: ['React', 'Firebase', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&h=600&auto=format&fit=crop',
    status: 'published'
  },
  {
    id: '4',
    name: 'Yayasan Peduli Kasih',
    category: 'Organisasi Profile',
    description: 'Website profil organisasi non-profit dengan fitur manajemen donasi dan laporan transparansi.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&h=600&auto=format&fit=crop',
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
    title: '5 Alasan Mengapa Bisnis Anda Membutuhkan Website di Tahun 2024',
    excerpt: 'Di era digital saat ini, website bukan lagi sebuah pilihan, melainkan keharusan bagi setiap unit bisnis yang ingin berkembang.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Digital Strategy',
    date: '10 Feb 2024',
    readTime: '5 min read',
    author: 'Admin IDETRA'
  },
  {
    id: 'b2',
    title: 'Memahami SEO: Kunci Agar Website Anda Ditemukan Calon Pelanggan',
    excerpt: 'Pelajari dasar-dasar Search Engine Optimization untuk meningkatkan peringkat website Anda di mesin pencari seperti Google.',
    imageUrl: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'SEO',
    date: '15 Feb 2024',
    readTime: '8 min read',
    author: 'Admin IDETRA'
  },
  {
    id: 'b3',
    title: 'Tren Desain Website Modern yang Wajib Anda Ketahui',
    excerpt: 'Dari dark mode hingga micro-interactions, temukan tren desain terbaru yang akan membuat website Anda tampil lebih memukau.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Web Design',
    date: '20 Feb 2024',
    readTime: '6 min read',
    author: 'Admin IDETRA'
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'i1',
    name: 'Rahmat Hidayat',
    email: 'rahmat@tokokita.id',
    type: 'Landing Page',
    message: 'Halo, saya ingin bertanya mengenai pembuatan landing page untuk produk fashion UMKM saya. Apakah bisa selesai dalam 3 hari?',
    date: '2024-03-20',
    status: 'new'
  },
  {
    id: 'i2',
    name: 'Jessica Putri',
    email: 'jessica@creative.com',
    type: 'Company Profile',
    message: 'Saya butuh website company profile untuk agency baru saya. Desainnya ingin yang minimalist dan clean.',
    date: '2024-03-19',
    status: 'read'
  },
  {
    id: 'i3',
    name: 'Agus Santoso',
    email: 'agus@sekolahmaju.edu',
    type: 'E-Raport',
    message: 'Tertarik dengan sistem E-Raport untuk sekolah kami. Apakah ada demo yang bisa kami coba?',
    date: '2024-03-18',
    status: 'replied'
  }
];
