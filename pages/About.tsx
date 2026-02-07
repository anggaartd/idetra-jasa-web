
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Membangun Jembatan antara <span className="text-blue-600">Ide</span> dan <span className="text-blue-600">Realitas</span> Digital.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            IDETRA lahir dari semangat untuk memberdayakan pelaku usaha di Indonesia agar mampu bersaing di era digital yang semakin kompetitif. Kami percaya bahwa setiap bisnis, sekecil apa pun, layak mendapatkan kehadiran online yang profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/team/800/1000" alt="IDETRA Team" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Misi Kami</h2>
            <div className="space-y-6">
              {[
                { title: 'Inovasi Tanpa Henti', desc: 'Kami selalu mengadopsi teknologi terbaru untuk memberikan hasil terbaik.' },
                { title: 'Fokus pada Klien', desc: 'Kesuksesan Anda adalah prioritas utama kami dalam setiap baris kode yang kami tulis.' },
                { title: 'Integritas & Kejujuran', desc: 'Transparansi harga dan proses pengerjaan adalah janji kami kepada Anda.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                   <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                     <p className="text-slate-600 text-sm">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-black text-blue-600">5+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Tahun Pengalaman</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-blue-600">150+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Project Selesai</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
