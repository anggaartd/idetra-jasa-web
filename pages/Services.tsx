
import React from 'react';
import { Layout, Palette, Code, Globe, MessageSquare, Zap, CreditCard, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: <GraduationCap size={32} />,
      title: 'E-Raport System',
      desc: 'Digitalisasi sistem penilaian sekolah yang efisien, transparan, dan mudah dikelola oleh guru.',
      features: ['Manajemen Nilai', 'PDF Export', 'User Role Guru/Siswa']
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Website ID Card',
      desc: 'Kartu nama digital modern untuk personal branding yang kuat dengan QR code interaktif.',
      features: ['Digital Business Card', 'Direct WA Link', 'Portfolio Integration']
    },
    {
      icon: <Users size={32} />,
      title: 'Organisasi Profile',
      desc: 'Website khusus untuk organisasi, komunitas, atau yayasan dengan fitur manajemen anggota.',
      features: ['Donation System', 'Member Directory', 'Event Management']
    },
    {
      icon: <Globe size={32} />,
      title: 'Company Profile',
      desc: 'Website representatif untuk membangun kredibilitas perusahaan Anda di mata dunia.',
      features: ['Modern UI/UX', 'Mobile Responsive', 'SEO Optimization']
    },
    {
      icon: <Zap size={32} />,
      title: 'Landing Page',
      desc: 'Fokus pada satu tujuan: Konversi. Cocok untuk peluncuran produk atau kampanye iklan.',
      features: ['High Conversion Design', 'Fast Loading', 'Analytics Integration']
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Blog & Content System',
      desc: 'Kami membangun platform CMS untuk publikasi artikel, berita, dan manajemen konten blog.',
      features: ['Easy to Use CMS', 'SEO Integration', 'Newsletter Support']
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Layanan Yang Kami Berikan</h1>
          <p className="text-slate-600 leading-relaxed">Dari startup hingga institusi pendidikan, kami menyediakan solusi digital yang disesuaikan dengan skala dan tujuan bisnis Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.desc}</p>
              <ul className="space-y-3">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center text-xs font-bold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-slate-800 transition-all">
              Hubungi Kami Untuk Penawaran Kustom
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
