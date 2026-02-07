
import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

const PriceEstimator: React.FC = () => {
  const [pages, setPages] = useState(1);
  const [complexity, setComplexity] = useState('Standard');
  const [addons, setAddons] = useState<string[]>([]);

  const complexities = ['Standard', 'Custom UI', 'Full System'];
  const addonList = [
    { id: 'seo', name: 'Premium SEO', price: 1000000 },
    { id: 'ecommerce', name: 'Fitur E-Commerce', price: 2500000 },
    { id: 'multilang', name: 'Multi Language', price: 1500000 },
    { id: 'speed', name: 'Speed Optimization Pro', price: 500000 }
  ];

  const totalPrice = useMemo(() => {
    let base = 1500000;
    // Page cost
    base += (pages - 1) * 350000;
    
    // Complexity multiplier
    if (complexity === 'Custom UI') base += 1000000;
    if (complexity === 'Full System') base += 5000000;

    // Addons
    addons.forEach(id => {
      const addon = addonList.find(a => a.id === id);
      if (addon) base += addon.price;
    });

    return base;
  }, [pages, complexity, addons]);

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-blue-600 p-3 rounded-2xl text-white">
          <Calculator size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Simulasi Harga Website</h3>
          <p className="text-slate-500 text-sm">Hitung perkiraan budget website impian Anda secara instan.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-4">Jumlah Halaman: <span className="text-blue-600">{pages}</span></label>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={pages} 
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-4">Tingkat Kompleksitas</label>
            <div className="grid grid-cols-3 gap-3">
              {complexities.map(c => (
                <button
                  key={c}
                  onClick={() => setComplexity(c)}
                  className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                    complexity === c ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-4">Fitur Tambahan (Add-ons)</label>
            <div className="space-y-3">
              {addonList.map(addon => (
                <div 
                  key={addon.id} 
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    addons.includes(addon.id) ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded flex items-center justify-center mr-3 border ${addons.includes(addon.id) ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'}`}>
                      {addons.includes(addon.id) && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{addon.name}</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600">+ Rp {addon.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-between">
          <div>
            <h4 className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Perkiraan Investasi</h4>
            <p className="text-4xl font-black mb-6">Rp {totalPrice.toLocaleString()}</p>
            
            <div className="space-y-4 border-t border-slate-800 pt-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Main Pages ({pages})</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Hosting & Domain</span>
                <span className="text-green-400">FREE 1st Year</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-blue-400">
                <span>Maintenance</span>
                <span>3 Months Support</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold shadow-xl shadow-blue-900 transition-all flex items-center justify-center">
              Dapatkan Penawaran Resmi
            </button>
            <p className="text-[10px] text-slate-500 text-center mt-4">
              *Harga ini adalah estimasi awal. Harga final dapat berubah setelah diskusi teknis lebih lanjut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceEstimator;
