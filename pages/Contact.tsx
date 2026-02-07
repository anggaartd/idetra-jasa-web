
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">Mari Bicara Tentang <span className="text-blue-600">Bisnis Anda.</span></h1>
            <p className="text-lg text-slate-600 mb-12">Konsultasi GRATIS selama 30 menit untuk mendiskusikan strategi digital terbaik bagi bisnis Anda.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Resmi</h4>
                  <p className="text-slate-600">halo@idetra.id</p>
                  <p className="text-xs text-slate-400 mt-1">Dibalas dalam &lt; 24 jam</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">WhatsApp Business</h4>
                  <p className="text-slate-600">+62 812-3456-7890</p>
                  <p className="text-xs text-slate-400 mt-1">Online: 09.00 - 18.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Kantor Operasional</h4>
                  <p className="text-slate-600">IDETRA Creative Studio, Kuningan, Jakarta Selatan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Formulir Konsultasi</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nama Lengkap</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Bisnis</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tipe Website</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 transition-all">
                  <option>Company Profile</option>
                  <option>Landing Page</option>
                  <option>E-Commerce</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pesan / Kebutuhan</label>
                <textarea rows={4} placeholder="Ceritakan sedikit tentang proyek Anda..." className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 transition-all" />
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center group">
                Kirim Sekarang <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
