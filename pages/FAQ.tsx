
import React from 'react';
import { ChevronRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      cat: 'Umum',
      items: [
        { q: 'Apakah IDETRA bisa membuat website kustom?', a: 'Sangat bisa! Kami spesialis dalam pembuatan website yang disesuaikan dengan kebutuhan unik klien, baik dari sisi desain maupun fitur.' },
        { q: 'Berapa biaya pembuatan website di IDETRA?', a: 'Biaya mulai dari Rp 1.500.000 untuk paket Basic Landing Page. Harga bervariasi tergantung fitur dan kompleksitas sistem yang Anda butuhkan.' }
      ]
    },
    {
      cat: 'Teknis & Support',
      items: [
        { q: 'Apakah website saya akan tampil bagus di HP?', a: 'Tentu. Semua website buatan IDETRA bersifat mobile-responsive dan dioptimasi khusus untuk pengalaman pengguna di smartphone.' },
        { q: 'Bagaimana dengan domain dan hosting?', a: 'Kami memberikan GRATIS domain (.com/.id) dan cloud hosting untuk tahun pertama pada semua paket website kami.' },
        { q: 'Apakah saya bisa mengelola konten website sendiri?', a: 'Ya, kami akan memberikan training singkat dan akses ke dashboard CMS yang user-friendly agar Anda bisa mengubah konten tanpa perlu mengerti coding.' }
      ]
    },
    {
      cat: 'Pembayaran',
      items: [
        { q: 'Bagaimana sistem pembayarannya?', a: 'Sistem pembayaran kami biasanya dibagi menjadi dua tahap: Down Payment (DP) 50% di awal, dan pelunasan 50% setelah website selesai dan siap dipublikasikan.' }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">FAQ</h1>
          <p className="text-slate-600">Jawaban atas pertanyaan yang paling sering ditanyakan kepada kami.</p>
        </div>

        <div className="space-y-16">
          {faqs.map((group, i) => (
            <div key={i}>
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-8 px-4 border-l-4 border-blue-600">{group.cat}</h3>
              <div className="space-y-4">
                {group.items.map((item, j) => (
                  <details key={j} className="group bg-white rounded-3xl p-8 border border-slate-200 cursor-pointer shadow-sm hover:border-blue-200 transition-all">
                    <summary className="font-bold text-slate-900 flex justify-between items-center list-none text-lg">
                      {item.q}
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-open:rotate-90 transition-transform">
                        <ChevronRight size={18} />
                      </div>
                    </summary>
                    <div className="text-slate-600 mt-6 text-sm leading-relaxed border-t border-slate-50 pt-6">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 p-12 rounded-[3rem] text-center text-white">
           <h4 className="text-2xl font-bold mb-4">Punya pertanyaan lain?</h4>
           <p className="mb-8 opacity-80">Kami siap membantu menjawab keraguan Anda.</p>
           <a href="https://wa.me/6281234567890" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-xl">
             Hubungi Kami via WhatsApp
           </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
