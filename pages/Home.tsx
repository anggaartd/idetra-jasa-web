
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Search,
  Users,
  ChevronRight,
  MessageCircle,
  Coffee,
  Lightbulb,
  Code2,
  Rocket
} from 'lucide-react';
import { INITIAL_PROJECTS, INITIAL_PRICING, TESTIMONIALS } from '../constants';
import PriceEstimator from '../components/PriceEstimator';

const Home: React.FC = () => {
  const steps = [
    { 
      step: '01', 
      title: 'Konsultasi', 
      desc: 'Diskusi mendalam mengenai visi, target audiens, dan tujuan strategis bisnis Anda.',
      icon: <Coffee className="text-blue-600" size={24} />
    },
    { 
      step: '02', 
      title: 'Perencanaan', 
      desc: 'Penyusunan sitemap, wireframe, dan konsep desain UI/UX yang eksklusif.',
      icon: <Lightbulb className="text-blue-600" size={24} />
    },
    { 
      step: '03', 
      title: 'Development', 
      desc: 'Proses coding menggunakan teknologi terbaru dengan standar performa tinggi.',
      icon: <Code2 className="text-blue-600" size={24} />
    },
    { 
      step: '04', 
      title: 'Launch & Grow', 
      desc: 'Final QA, optimasi SEO, peluncuran website, dan dukungan teknis berkelanjutan.',
      icon: <Rocket className="text-blue-600" size={24} />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top-right hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold border border-blue-100 animate-pulse">
                🚀 Pilihan #1 UMKM & Startup
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Solusi Website <span className="text-blue-600">Profesional</span> untuk Bisnis Anda
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                Bantu bisnis Anda naik kelas dengan website modern, SEO friendly, dan berfokus pada hasil (konversi). Mulai hari ini bersama IDETRA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center group">
                  Lihat Portofolio <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-center">
                  Konsultasi Gratis
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">150+ Clients</span> telah mempercayakan websitenya kepada kami.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100">
                <img src="https://picsum.photos/seed/agency/1200/900" alt="Website Showcase" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-50">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Traffic Growth</p>
                    <p className="text-xl font-bold text-slate-900">+148%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-3xl font-black">99%</p>
                <p className="text-xs font-medium opacity-80">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Kenapa IDETRA?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Partner Strategis untuk Eksistensi Digital Anda</h3>
            <p className="text-slate-600 leading-relaxed">
              Kami bukan sekadar tukang buat website. IDETRA fokus pada strategi desain dan performa teknis untuk memastikan website Anda menjadi mesin pertumbuhan bisnis.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {[
              { icon: Monitor, title: 'Modern & Custom', desc: 'Desain eksklusif yang disesuaikan dengan identitas brand Anda.' },
              { icon: Search, title: 'SEO Friendly', desc: 'Struktur kode optimal agar website Anda mudah ditemukan di Google.' },
              { icon: Smartphone, title: 'Mobile First', desc: 'Tampilan sempurna di smartphone, tablet, maupun komputer.' },
              { icon: Zap, title: 'Super Cepat', desc: 'Optimasi kecepatan loading untuk pengalaman user terbaik.' },
              { icon: ShieldCheck, title: 'Aman & Terjamin', desc: 'Sertifikasi SSL dan perlindungan keamanan server terbaik.' },
              { icon: Users, title: 'Support', desc: 'Kami tidak meninggalkan Anda setelah website selesai.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group hover:-translate-y-2 text-center md:text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 transition-colors mx-auto md:mx-0">
                  <item.icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Slide on Mobile */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em] mb-4">Langkah Kerja</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Alur Kerja <span className="text-blue-600">Terstruktur</span></h3>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">Proses pengerjaan transparan yang mengutamakan kualitas dan kecepatan.</p>
          </div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-slate-100 hidden lg:block" />
            
            {/* Mobile Scroll Hint */}
            <div className="lg:hidden flex justify-center items-center gap-2 mb-6 text-slate-400">
               <span className="text-[10px] font-bold uppercase tracking-widest animate-pulse">Geser untuk melihat proses</span>
               <ChevronRight size={14} className="text-blue-500" />
            </div>

            {/* Steps Container with Snap Scroll for Mobile */}
            <div className="flex lg:grid lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto lg:overflow-visible pb-12 lg:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {steps.map((item, idx) => (
                <div key={idx} className="min-w-[85%] sm:min-w-[320px] lg:min-w-0 snap-center group">
                  <div className="relative flex flex-col items-center lg:items-center">
                    {/* Icon Container */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-slate-50 rounded-[2.5rem] flex items-center justify-center shadow-xl group-hover:border-blue-100 group-hover:shadow-blue-200/40 transition-all duration-500 relative z-20 mb-8">
                      {item.icon}
                      <span className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xs font-black shadow-lg">
                        {item.step}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div className="bg-slate-50/50 p-8 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 text-center h-full relative overflow-hidden">
                       {/* Artist Step Number Background */}
                       <span className="absolute -right-8 -top-12 text-[10rem] font-black text-slate-200/10 select-none group-hover:text-blue-100/20 transition-colors duration-500">
                        {item.step}
                      </span>
                      
                      <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Fixed Alignment for Mobile */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold uppercase text-sm tracking-widest mb-4">Karya Kami</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900">Portofolio Pilihan</h3>
            </div>
            <Link to="/portfolio" className="bg-slate-50 hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-bold text-sm flex items-center transition-all border border-slate-100 hover:border-blue-100 group">
              Lihat Semua Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {INITIAL_PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative rounded-[3rem] overflow-hidden mb-6 aspect-[4/3] shadow-lg border border-slate-100">
                  <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold shadow-xl text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Lihat Project</button>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-blue-600 text-xs font-bold mb-2 uppercase tracking-[0.15em]">{project.category}</p>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase text-sm mb-4">Paket Harga</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Investasi Transparan</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan skala bisnis Anda saat ini.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {INITIAL_PRICING.map((plan) => (
              <div key={plan.id} className={`p-10 rounded-[2.5rem] border ${plan.recommended ? 'border-blue-500 bg-white shadow-2xl shadow-blue-500/10' : 'border-slate-100 bg-slate-50'} relative flex flex-col`}>
                {plan.recommended && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Paling Populer</span>}
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 text-sm">/proyek</span>}
                </div>
                <p className="text-xs text-slate-500 mb-8 font-medium italic">Estimasi waktu: {plan.duration}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600 mr-3 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.recommended ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                  Pilih Paket
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-8">Butuh perkiraan harga lebih spesifik?</h4>
            <PriceEstimator />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-blue-500 font-bold uppercase text-sm mb-4">Testimoni</h2>
               <h3 className="text-3xl md:text-5xl font-extrabold mb-8">Apa Kata <span className="text-blue-500">Klien</span> Kami</h3>
               <p className="text-slate-400 text-lg leading-relaxed mb-10 italic">"IDETRA memberikan standar baru dalam pembuatan website di Indonesia. Prosesnya transparan, komunikasinya lancar, dan hasilnya melampaui ekspektasi."</p>
               <div className="flex items-center gap-4">
                  <img src="https://picsum.photos/seed/ceo/100/100" className="w-16 h-16 rounded-2xl object-cover" alt="CEO" />
                  <div>
                    <p className="font-bold text-xl">Andri Kurniawan</p>
                    <p className="text-sm text-slate-500">Founder TechLink Indonesia</p>
                  </div>
               </div>
             </div>
             <div className="space-y-6">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                    <p className="text-slate-300 italic mb-6">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} className="w-10 h-10 rounded-full" alt={t.name} />
                      <div>
                        <p className="font-bold text-sm">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
            
            <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Siap Menaikkan Level Bisnis Anda?</h3>
            <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10">Dapatkan konsultasi gratis dan penawaran terbaik untuk proyek website Anda hari ini.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-slate-50 transition-all">
                Hubungi Kami Sekarang
              </Link>
              <a href="https://wa.me/6281234567890" className="bg-blue-700/50 backdrop-blur-md border border-blue-400/30 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700/70 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20} /> Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
