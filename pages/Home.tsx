
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
  MessageCircle
} from 'lucide-react';
import { INITIAL_PROJECTS, INITIAL_PRICING, TESTIMONIALS } from '../constants';
import PriceEstimator from '../components/PriceEstimator';

const Home: React.FC = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Monitor, title: 'Modern & Custom', desc: 'Desain eksklusif yang disesuaikan dengan identitas brand Anda.' },
              { icon: Search, title: 'SEO Friendly', desc: 'Struktur kode optimal agar website Anda mudah ditemukan di Google.' },
              { icon: Smartphone, title: 'Mobile First', desc: 'Tampilan sempurna di smartphone, tablet, maupun komputer.' },
              { icon: Zap, title: 'Super Cepat', desc: 'Optimasi kecepatan loading untuk pengalaman user terbaik.' },
              { icon: ShieldCheck, title: 'Aman & Terjamin', desc: 'Sertifikasi SSL dan perlindungan keamanan server terbaik.' },
              { icon: Users, title: 'After Sales Support', desc: 'Kami tidak meninggalkan Anda setelah website selesai.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <item.icon size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold uppercase text-sm mb-4">Karya Kami</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Portofolio Pilihan</h3>
            </div>
            <Link to="/portfolio" className="text-blue-600 font-bold flex items-center hover:underline underline-offset-4">
              Lihat Semua Project <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_PROJECTS.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3]">
                  <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg">Lihat Detail</button>
                  </div>
                </div>
                <p className="text-blue-600 text-sm font-bold mb-2 uppercase tracking-wide">{project.category}</p>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Proses Pengerjaan</h3>
            <p className="text-slate-400">Bagaimana kami mewujudkan website impian Anda</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                { step: '01', title: 'Konsultasi', desc: 'Diskusi mendalam mengenai kebutuhan dan tujuan bisnis Anda.' },
                { step: '02', title: 'Perencanaan', desc: 'Pembuatan wireframe, sitemap, dan konsep desain visual.' },
                { step: '03', title: 'Development', desc: 'Coding dan integrasi fitur-fitur website secara profesional.' },
                { step: '04', title: 'Launch', desc: 'Final review, optimasi SEO, dan website siap diakses publik.' }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center font-black text-xl mb-6 mx-auto md:mx-0 shadow-lg shadow-blue-500/20">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Investasi Terbaik untuk Bisnis</h2>
            <p className="text-slate-600">Pilih paket yang paling sesuai dengan skala bisnis Anda saat ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_PRICING.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative p-10 rounded-3xl border ${
                  plan.recommended ? 'border-blue-500 shadow-2xl shadow-blue-500/10' : 'border-slate-100'
                } bg-white flex flex-col`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Recommended
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium italic">Estimasi {plan.duration}</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="text-blue-600 mr-3 shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.recommended ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}>
                  Pesan Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceEstimator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h3 className="text-3xl font-extrabold text-slate-900">Apa Kata Mereka?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full" />
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"{t.content}"</p>
                <div className="flex text-yellow-400 mt-6">
                  {[1, 2, 3, 4, 5].map(star => <Zap key={star} size={16} fill="currentColor" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900">Paling Sering Ditanyakan</h3>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Berapa lama proses pembuatan website?', a: 'Tergantung kompleksitas, mulai dari 3 hari untuk Landing Page hingga 30 hari untuk sistem kustom.' },
              { q: 'Apakah sudah termasuk domain dan hosting?', a: 'Ya, semua paket kami sudah termasuk bonus domain .com/.id dan cloud hosting selama 1 tahun.' },
              { q: 'Bisa revisi kalau desain tidak cocok?', a: 'Tentu! Kami menyediakan kuota revisi sesuai paket yang dipilih untuk memastikan kepuasan Anda.' }
            ].map((item, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl p-6 cursor-pointer">
                <summary className="font-bold text-slate-900 flex justify-between items-center list-none">
                  {item.q}
                  <ChevronRight className="group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/faq" className="text-blue-600 font-bold hover:underline">Lihat Semua Pertanyaan</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h3 className="text-4xl md:text-5xl font-black text-white">Siap Memulai Perjalanan Digital Anda?</h3>
              <p className="text-blue-100 text-lg">Konsultasikan kebutuhan website Anda sekarang secara GRATIS. Jangan biarkan kompetitor mendahului Anda.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center">
                   Mulai Konsultasi <MessageCircle size={20} className="ml-2" />
                </Link>
                <Link to="/portfolio" className="bg-blue-700/30 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-blue-700/50 transition-all">
                  Lihat Hasil Kerja
                </Link>
              </div>
              <p className="text-blue-200 text-xs">Dipercaya oleh lebih dari 150+ unit bisnis di Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
