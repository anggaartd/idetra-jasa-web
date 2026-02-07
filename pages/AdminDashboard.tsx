
import React, { useState, useRef } from 'react';
import { 
  LayoutGrid, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle,
  Briefcase,
  Tag,
  MessageSquare,
  Search,
  ChevronRight,
  ExternalLink,
  X,
  Upload,
  Image as ImageIcon,
  Check,
  Star,
  Mail,
  Eye,
  Link as LinkIcon
} from 'lucide-react';
import { INITIAL_PROJECTS, INITIAL_PRICING, INITIAL_INQUIRIES } from '../constants';
import { Project, PricingPlan, Inquiry } from '../types';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(INITIAL_PRICING);
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectFormData, setProjectFormData] = useState<Partial<Project>>({
    name: '',
    category: 'Landing Page',
    description: '',
    techStack: [],
    imageUrl: '',
    projectUrl: '',
    status: 'published'
  });

  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
  const [pricingFormData, setPricingFormData] = useState<Partial<PricingPlan>>({
    name: '',
    price: '',
    duration: '',
    features: [],
    recommended: false,
    active: true
  });
  const [featureInput, setFeatureInput] = useState('');

  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tabs = [
    { id: 'overview', name: 'Ringkasan', icon: <LayoutGrid size={20} /> },
    { id: 'projects', name: 'Portofolio', icon: <Briefcase size={20} /> },
    { id: 'pricing', name: 'Manajemen Paket', icon: <Tag size={20} /> },
    { id: 'inquiries', name: 'Pesan Masuk', icon: <MessageSquare size={20} /> },
  ];

  const handleLogout = () => navigate('/login');

  // Project Handlers (CRUD)
  const openProjectModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setProjectFormData(project);
    } else {
      setEditingProject(null);
      setProjectFormData({ 
        name: '', 
        category: 'Landing Page', 
        description: '', 
        techStack: [], 
        imageUrl: '', 
        projectUrl: '',
        status: 'published' 
      });
    }
    setIsModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...projectFormData } as Project : p));
    } else {
      const newProject: Project = { 
        ...projectFormData, 
        id: Math.random().toString(36).substr(2, 9) 
      } as Project;
      setProjects([newProject, ...projects]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Hapus proyek ini secara permanen?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProjectFormData({ ...projectFormData, imageUrl: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  // Pricing Handlers (CRUD)
  const openPricingModal = (plan?: PricingPlan) => {
    if (plan) {
      setEditingPlan(plan);
      setPricingFormData(plan);
    } else {
      setEditingPlan(null);
      setPricingFormData({ 
        name: '', 
        price: '', 
        duration: '', 
        features: [], 
        recommended: false, 
        active: true 
      });
    }
    setIsPricingModalOpen(true);
  };

  const handleSavePricing = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPlan) {
      setPricingPlans(pricingPlans.map(p => p.id === editingPlan.id ? { ...p, ...pricingFormData } as PricingPlan : p));
    } else {
      const newPlan: PricingPlan = { 
        ...pricingFormData, 
        id: Math.random().toString(36).substr(2, 9) 
      } as PricingPlan;
      setPricingPlans([...pricingPlans, newPlan]);
    }
    setIsPricingModalOpen(false);
  };

  const handleDeletePricing = (id: string) => {
    if (window.confirm('Hapus paket harga ini?')) {
      setPricingPlans(pricingPlans.filter(p => p.id !== id));
    }
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setPricingFormData({ 
        ...pricingFormData, 
        features: [...(pricingFormData.features || []), featureInput.trim()] 
      });
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setPricingFormData({ 
      ...pricingFormData, 
      features: (pricingFormData.features || []).filter((_, i) => i !== index) 
    });
  };

  const renderOverview = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Portofolio', value: projects.length.toString(), icon: <Briefcase className="text-blue-600" /> },
          { label: 'Pesan Masuk', value: inquiries.length.toString(), icon: <MessageSquare className="text-orange-600" /> },
          { label: 'Paket Aktif', value: pricingPlans.filter(p => p.active).length.toString(), icon: <Tag className="text-green-600" /> }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-2xl">{stat.icon}</div>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h4 className="text-3xl font-black text-slate-900">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
        <h5 className="text-xl font-black mb-8">Statistik Pengerjaan Proyek</h5>
        <div className="h-64 bg-slate-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Chart Visualization Coming Soon</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col fixed inset-y-0 z-50">
        <div className="p-10 border-b border-slate-100">
          <Link to="/" className="text-2xl font-black text-slate-900 tracking-tighter"><span className="text-blue-600">IDE</span>TRA</Link>
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Admin Panel</p>
        </div>
        <nav className="flex-grow p-6 space-y-2 mt-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab.id ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/20' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="mr-4">{tab.icon}</span>{tab.name}
            </button>
          ))}
        </nav>
        <div className="p-8 border-t border-slate-100">
          <button onClick={handleLogout} className="w-full flex items-center px-6 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
            <LogOut size={20} className="mr-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-72 p-6 md:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl font-black text-slate-900">
            {tabs.find(t => t.id === activeTab)?.name}
          </h2>
          <div className="flex gap-4">
            <a href="/" target="_blank" className="bg-white border border-slate-200 text-slate-600 px-5 py-3 rounded-xl text-xs font-bold flex items-center shadow-sm hover:bg-slate-50">
              Lihat Website <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
        </header>

        {activeTab === 'overview' && renderOverview()}

        {/* Portofolio Tab */}
        {activeTab === 'projects' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-slate-500">Total: <strong>{projects.length}</strong> Proyek Terdaftar</p>
              <button onClick={() => openProjectModal()} className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold flex items-center shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
                <Plus size={20} className="mr-2" /> Tambah Portofolio
              </button>
            </div>
            
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black border-b border-slate-100">
                    <tr>
                      <th className="px-8 py-6">Detail Proyek</th>
                      <th className="px-8 py-6">Kategori</th>
                      <th className="px-8 py-6">Link Website</th>
                      <th className="px-8 py-6 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {projects.map(item => (
                      <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <img src={item.imageUrl} className="w-14 h-14 rounded-2xl object-cover shadow-sm border border-slate-100" alt="" />
                            <div>
                              <span className="text-sm font-bold text-slate-900 block">{item.name}</span>
                              <span className="text-[10px] text-slate-400 font-medium line-clamp-1 max-w-[200px]">{item.description}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">{item.category}</span>
                        </td>
                        <td className="px-8 py-6">
                          {item.projectUrl ? (
                            <a href={item.projectUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-xs font-bold">
                              <LinkIcon size={14} /> Kunjungi Situs
                            </a>
                          ) : (
                            <span className="text-slate-300 text-xs italic">Belum ada link</span>
                          )}
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => openProjectModal(item)} className="p-3 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit3 size={16} /></button>
                            <button onClick={() => handleDeleteProject(item.id)} className="p-3 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Manajemen Paket Tab */}
        {activeTab === 'pricing' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-slate-500">Kelola paket harga layanan IDETRA.</p>
              <button onClick={() => openPricingModal()} className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold flex items-center shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
                <Plus size={20} className="mr-2" /> Buat Paket Baru
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {pricingPlans.map(plan => (
                <div key={plan.id} className={`bg-white p-8 rounded-[2.5rem] border ${plan.recommended ? 'border-blue-200 ring-2 ring-blue-50 shadow-xl' : 'border-slate-100 shadow-sm'} relative group`}>
                  {plan.recommended && (
                    <span className="absolute -top-3 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">Recommended</span>
                  )}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-lg font-black text-slate-900">{plan.name}</h4>
                      <p className="text-2xl font-black text-blue-600 mt-1">{plan.price}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openPricingModal(plan)} className="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 rounded-lg"><Edit3 size={14}/></button>
                      <button onClick={() => handleDeletePricing(plan.id)} className="p-2 bg-slate-50 text-slate-400 hover:text-red-500 rounded-lg"><Trash2 size={14}/></button>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-slate-500">
                        <CheckCircle size={14} className="text-green-500" /> {f}
                      </div>
                    ))}
                    {plan.features.length > 4 && <p className="text-[10px] text-slate-400 font-bold">+{plan.features.length - 4} Fitur Lainnya</p>}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Durasi: {plan.duration}</span>
                    <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${plan.active ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                      {plan.active ? 'Aktif' : 'Non-Aktif'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inquiries Tab */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-[2rem] border border-slate-100 p-20 text-center">
            <MessageSquare size={48} className="mx-auto text-slate-200 mb-6" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Pesan Konsultasi</h4>
            <p className="text-slate-500 text-sm">Ada {inquiries.length} pesan masuk dari calon klien.</p>
            <button className="mt-8 bg-slate-900 text-white px-10 py-4 rounded-2xl text-sm font-bold">Lihat Semua Pesan</button>
          </div>
        )}
      </main>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            <header className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-xl font-black text-slate-900">{editingProject ? 'Edit Portofolio' : 'Tambah Portofolio'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400"><X size={24} /></button>
            </header>
            <form onSubmit={handleSaveProject} className="p-10 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Nama Proyek</label>
                  <input type="text" required value={projectFormData.name} onChange={e => setProjectFormData({...projectFormData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Contoh: E-Raport V2" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Kategori</label>
                  <select value={projectFormData.category} onChange={e => setProjectFormData({...projectFormData, category: e.target.value as any})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm">
                    <option>Company Profile</option><option>Landing Page</option><option>E-Commerce</option><option>Digital ID Card</option><option>E-Raport</option><option>Organisasi Profile</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Tautan Proyek (URL Live)</label>
                <input type="url" value={projectFormData.projectUrl} onChange={e => setProjectFormData({...projectFormData, projectUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="https://website-klien.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Deskripsi Singkat</label>
                <textarea rows={3} required value={projectFormData.description} onChange={e => setProjectFormData({...projectFormData, description: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Apa yang Anda kerjakan di proyek ini?" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Screenshot Proyek</label>
                <div onClick={() => fileInputRef.current?.click()} className="w-full h-40 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer relative group">
                  {projectFormData.imageUrl ? <img src={projectFormData.imageUrl} className="w-full h-full object-cover" alt="" /> : <div className="text-center"><ImageIcon size={32} className="mx-auto text-slate-300 mb-2"/><p className="text-[10px] font-bold text-slate-400">Klik untuk upload gambar</p></div>}
                </div>
                <input type="file" hidden ref={fileInputRef} accept="image/*" onChange={handleImageUpload} />
              </div>
              <footer className="pt-6 border-t border-slate-50 flex justify-end gap-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-4 rounded-2xl text-sm font-bold text-slate-500">Batal</button>
                <button type="submit" className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-sm font-bold shadow-xl">Simpan Proyek</button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {/* Pricing Modal */}
      {isPricingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            <header className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-xl font-black text-slate-900">{editingPlan ? 'Edit Paket' : 'Buat Paket Baru'}</h3>
              <button onClick={() => setIsPricingModalOpen(false)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400"><X size={24} /></button>
            </header>
            <form onSubmit={handleSavePricing} className="p-10 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Nama Paket</label>
                  <input type="text" required value={pricingFormData.name} onChange={e => setPricingFormData({...pricingFormData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Contoh: Paket UMKM" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Harga (Teks)</label>
                  <input type="text" required value={pricingFormData.price} onChange={e => setPricingFormData({...pricingFormData, price: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Rp 1.500.000" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Durasi Pengerjaan</label>
                  <input type="text" required value={pricingFormData.duration} onChange={e => setPricingFormData({...pricingFormData, duration: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="3-5 Hari" />
                </div>
                <div className="flex items-center gap-8 pt-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={pricingFormData.recommended} onChange={e => setPricingFormData({...pricingFormData, recommended: e.target.checked})} className="w-5 h-5 rounded border-slate-300 text-blue-600" />
                    <span className="text-xs font-bold text-slate-700">Recommended</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={pricingFormData.active} onChange={e => setPricingFormData({...pricingFormData, active: e.target.checked})} className="w-5 h-5 rounded border-slate-300 text-blue-600" />
                    <span className="text-xs font-bold text-slate-700">Aktif</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Fitur Paket</label>
                <div className="flex gap-2">
                  <input type="text" value={featureInput} onChange={e => setFeatureInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())} className="flex-grow bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Contoh: Gratis Hosting 1th" />
                  <button type="button" onClick={handleAddFeature} className="bg-slate-900 text-white p-4 rounded-2xl"><Plus size={20} /></button>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {pricingFormData.features?.map((f, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-[10px] font-black px-4 py-2 rounded-xl flex items-center gap-2">
                      {f}
                      <button type="button" onClick={() => handleRemoveFeature(i)} className="hover:text-red-500"><X size={14} /></button>
                    </span>
                  ))}
                </div>
              </div>
              <footer className="pt-6 border-t border-slate-50 flex justify-end gap-4">
                <button type="button" onClick={() => setIsPricingModalOpen(false)} className="px-8 py-4 rounded-2xl text-sm font-bold text-slate-500">Batal</button>
                <button type="submit" className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-sm font-bold shadow-xl">Simpan Paket</button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
