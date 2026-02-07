
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
  Clock
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
    { id: 'pricing', name: 'Daftar Paket', icon: <Tag size={20} /> },
    { id: 'inquiries', name: 'Pesan Masuk', icon: <MessageSquare size={20} /> },
  ];

  const handleLogout = () => navigate('/login');

  // Handlers for Projects
  const openProjectModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setProjectFormData(project);
    } else {
      setEditingProject(null);
      setProjectFormData({ name: '', category: 'Landing Page', description: '', techStack: [], imageUrl: '', status: 'published' });
    }
    setIsModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...projectFormData } as Project : p));
    } else {
      const newProject: Project = { ...projectFormData, id: Math.random().toString(36).substr(2, 9) } as Project;
      setProjects([newProject, ...projects]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Hapus proyek ini?')) setProjects(projects.filter(p => p.id !== id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProjectFormData({ ...projectFormData, imageUrl: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  // Handlers for Pricing
  const openPricingModal = (plan?: PricingPlan) => {
    if (plan) {
      setEditingPlan(plan);
      setPricingFormData(plan);
    } else {
      setEditingPlan(null);
      setPricingFormData({ name: '', price: '', duration: '', features: [], recommended: false, active: true });
    }
    setIsPricingModalOpen(true);
  };

  const handleSavePricing = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPlan) {
      setPricingPlans(pricingPlans.map(p => p.id === editingPlan.id ? { ...p, ...pricingFormData } as PricingPlan : p));
    } else {
      const newPlan: PricingPlan = { ...pricingFormData, id: Math.random().toString(36).substr(2, 9) } as PricingPlan;
      setPricingPlans([...pricingPlans, newPlan]);
    }
    setIsPricingModalOpen(false);
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setPricingFormData({ ...pricingFormData, features: [...(pricingFormData.features || []), featureInput.trim()] });
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setPricingFormData({ ...pricingFormData, features: (pricingFormData.features || []).filter((_, i) => i !== index) });
  };

  const handleDeletePricing = (id: string) => {
    if (window.confirm('Hapus paket ini?')) setPricingPlans(pricingPlans.filter(p => p.id !== id));
  };

  // Handlers for Inquiries
  const handleOpenInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    if (inquiry.status === 'new') {
      setInquiries(inquiries.map(i => i.id === inquiry.id ? { ...i, status: 'read' as const } : i));
    }
  };

  const handleDeleteInquiry = (id: string) => {
    if (window.confirm('Hapus pesan ini?')) {
      setInquiries(inquiries.filter(i => i.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
    }
  };

  const renderOverview = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Proyek', value: projects.length.toString(), icon: <Briefcase className="text-blue-600" />, trend: '+4 bulan ini' },
          { label: 'Pesan Baru', value: inquiries.filter(i => i.status === 'new').length.toString(), icon: <MessageSquare className="text-orange-600" />, trend: 'Perlu respon' },
          { label: 'Paket Aktif', value: pricingPlans.filter(p => p.active).length.toString(), icon: <Tag className="text-green-600" />, trend: 'Online' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-2xl">{stat.icon}</div>
              <span className="text-[10px] font-bold bg-slate-50 px-2 py-1 rounded text-slate-500 uppercase tracking-tighter">{stat.trend}</span>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h4 className="text-2xl font-black text-slate-900">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h5 className="text-lg font-bold flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} /> Aktivitas Terakhir
            </h5>
            <button className="text-xs font-bold text-blue-600 hover:underline">Lihat Semua</button>
          </div>
          <div className="space-y-6">
            {[
              { text: 'Daftar portofolio diperbarui', time: 'Baru saja', user: 'Admin' },
              { text: 'Pesan baru dari ' + (inquiries[0]?.name || 'Client'), time: '2 jam yang lalu', user: 'System' },
              { text: 'Pembaruan keamanan sistem', time: '5 jam yang lalu', user: 'System' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-black text-blue-600">ID</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{activity.text}</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase">{activity.time} • Oleh {activity.user}</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
          <div className="flex justify-between items-center mb-8">
            <h5 className="text-lg font-bold">Quick Tasks</h5>
            <Settings size={20} className="text-slate-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <button onClick={() => {setActiveTab('projects'); openProjectModal();}} className="bg-slate-800 hover:bg-slate-700 p-6 rounded-3xl text-left transition-all group">
                <Plus size={24} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-sm">Upload Project</p>
             </button>
             <button onClick={() => {setActiveTab('pricing'); openPricingModal();}} className="bg-slate-800 hover:bg-slate-700 p-6 rounded-3xl text-left transition-all group">
                <Tag size={24} className="text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-sm">Update Paket</p>
             </button>
             <div className="col-span-2 bg-blue-600/10 border border-blue-600/30 p-6 rounded-3xl">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Pesan Belum Dibaca</p>
                <p className="text-sm">Ada {inquiries.filter(i => i.status === 'new').length} pesan baru yang menunggu respon Anda.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col fixed inset-y-0 z-50">
        <div className="p-10 border-b border-slate-100">
          <Link to="/" className="text-2xl font-black text-slate-900 tracking-tighter"><span className="text-blue-600">IDE</span>TRA</Link>
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Management Console</p>
        </div>
        <nav className="flex-grow p-6 space-y-2 mt-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab.id ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/20 translate-x-1' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
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

      <main className="flex-grow md:ml-72 p-6 md:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900">
              {activeTab === 'overview' && 'Ringkasan Dashboard'}
              {activeTab === 'projects' && 'Manajemen Portofolio'}
              {activeTab === 'pricing' && 'Manajemen Paket Harga'}
              {activeTab === 'inquiries' && 'Pesan Konsultasi'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">Kelola data IDETRA dengan mudah.</p>
          </div>
          <a href="/" target="_blank" className="bg-white border border-slate-200 text-slate-600 px-5 py-3 rounded-xl text-xs font-bold flex items-center shadow-sm hover:bg-slate-50">
            Visit Site <ExternalLink size={14} className="ml-2" />
          </a>
        </header>

        {activeTab === 'overview' && renderOverview()}

        {activeTab === 'projects' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-2xl font-black text-slate-900">Portofolio</h4>
              <button onClick={() => openProjectModal()} className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold flex items-center shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
                <Plus size={20} className="mr-2" /> Tambah Project
              </button>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black">
                  <tr><th className="px-8 py-6">Project Details</th><th className="px-8 py-6">Kategori</th><th className="px-8 py-6">Status</th><th className="px-8 py-6 text-right">Actions</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {projects.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <img src={item.imageUrl} className="w-14 h-14 rounded-2xl object-cover shadow-sm border border-slate-100" alt="" />
                          <div><span className="text-sm font-bold text-slate-900 block">{item.name}</span><span className="text-[10px] text-slate-400 font-medium line-clamp-1 max-w-[200px]">{item.description}</span></div>
                        </div>
                      </td>
                      <td className="px-8 py-6"><span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">{item.category}</span></td>
                      <td className="px-8 py-6"><span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase ${item.status === 'published' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-400'}`}>{item.status}</span></td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
        )}

        {activeTab === 'pricing' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-2xl font-black text-slate-900">Paket Harga</h4>
              <button onClick={() => openPricingModal()} className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold flex items-center shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
                <Plus size={20} className="mr-2" /> Tambah Paket
              </button>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black">
                  <tr><th className="px-8 py-6">Nama Paket</th><th className="px-8 py-6">Harga</th><th className="px-8 py-6">Durasi</th><th className="px-8 py-6">Status</th><th className="px-8 py-6 text-right">Aksi</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {pricingPlans.map(plan => (
                    <tr key={plan.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6"><div className="flex items-center gap-2"><span className="text-sm font-bold text-slate-900">{plan.name}</span>{plan.recommended && <Star size={14} className="text-yellow-500 fill-yellow-500" />}</div></td>
                      <td className="px-8 py-6"><span className="text-sm font-black text-slate-900">{plan.price}</span></td>
                      <td className="px-8 py-6"><span className="text-xs text-slate-500">{plan.duration}</span></td>
                      <td className="px-8 py-6"><span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase ${plan.active ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-400'}`}>{plan.active ? 'Aktif' : 'Nonaktif'}</span></td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => openPricingModal(plan)} className="p-3 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit3 size={16} /></button>
                          <button onClick={() => handleDeletePricing(plan.id)} className="p-3 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
             <div className="flex justify-between items-center mb-8">
              <h4 className="text-2xl font-black text-slate-900">Pesan Masuk</h4>
              <div className="flex gap-2">
                <span className="bg-orange-50 text-orange-600 text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center">{inquiries.filter(i => i.status === 'new').length} Pesan Baru</span>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black">
                  <tr><th className="px-8 py-6">Pengirim</th><th className="px-8 py-6">Kebutuhan</th><th className="px-8 py-6">Tanggal</th><th className="px-8 py-6">Status</th><th className="px-8 py-6 text-right">Aksi</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {inquiries.map(inquiry => (
                    <tr key={inquiry.id} className={`hover:bg-slate-50/50 transition-colors group ${inquiry.status === 'new' ? 'bg-blue-50/20' : ''}`}>
                      <td className="px-8 py-6">
                        <div>
                          <span className={`text-sm font-bold block ${inquiry.status === 'new' ? 'text-blue-600' : 'text-slate-900'}`}>{inquiry.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{inquiry.email}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6"><span className="text-xs font-bold text-slate-700">{inquiry.type}</span></td>
                      <td className="px-8 py-6"><span className="text-xs text-slate-500">{inquiry.date}</span></td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          inquiry.status === 'new' ? 'bg-orange-50 text-orange-600' : inquiry.status === 'replied' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-400'
                        }`}>{inquiry.status}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => handleOpenInquiry(inquiry)} className="p-3 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Eye size={16} /></button>
                          <button onClick={() => handleDeleteInquiry(inquiry.id)} className="p-3 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {inquiries.length === 0 && <div className="p-20 text-center"><MessageSquare size={48} className="mx-auto text-slate-200 mb-4"/><p className="text-slate-400 font-bold">Belum ada pesan masuk.</p></div>}
            </div>
          </div>
        )}

        {/* Inquiry Detail Modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden relative">
              <header className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Detail Pesan Konsultasi</h3>
                  <p className="text-xs text-slate-500 font-medium">Informasi pengirim dan isi pesan.</p>
                </div>
                <button onClick={() => setSelectedInquiry(null)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400"><X size={24} /></button>
              </header>
              <div className="p-10 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                   <div><p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Pengirim</p><p className="text-sm font-bold text-slate-900">{selectedInquiry.name}</p></div>
                   <div><p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Email</p><p className="text-sm font-bold text-blue-600 underline">{selectedInquiry.email}</p></div>
                   <div><p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Tipe Proyek</p><p className="text-sm font-bold text-slate-700">{selectedInquiry.type}</p></div>
                   <div><p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Tanggal Masuk</p><p className="text-sm font-bold text-slate-700">{selectedInquiry.date}</p></div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Isi Pesan</p>
                  <p className="text-sm text-slate-600 leading-relaxed italic">"{selectedInquiry.message}"</p>
                </div>
                <div className="flex gap-4">
                  <a href={`mailto:${selectedInquiry.email}`} className="flex-grow bg-blue-600 text-white py-4 rounded-2xl font-bold text-center shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    <Mail size={18} /> Balas via Email
                  </a>
                  <button onClick={() => {
                    setInquiries(inquiries.map(i => i.id === selectedInquiry.id ? { ...i, status: 'replied' as const } : i));
                    setSelectedInquiry({...selectedInquiry, status: 'replied'});
                  }} className="px-6 py-4 rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">Tandai Terbalas</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative">
              <header className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{editingProject ? 'Edit Portofolio' : 'Tambah Portofolio'}</h3>
                  <p className="text-xs text-slate-500 font-medium">Lengkapi detail proyek Anda.</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400"><X size={24} /></button>
              </header>
              <form onSubmit={handleSaveProject} className="p-10 space-y-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Nama Proyek</label>
                    <input type="text" required value={projectFormData.name} onChange={e => setProjectFormData({...projectFormData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Contoh: Coffee Shop Landing" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Kategori</label>
                    <select value={projectFormData.category} onChange={e => setProjectFormData({...projectFormData, category: e.target.value as any})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm">
                      <option>Company Profile</option><option>Landing Page</option><option>E-Commerce</option><option>Digital ID Card</option><option>E-Raport</option><option>Organisasi Profile</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Deskripsi</label>
                  <textarea rows={3} required value={projectFormData.description} onChange={e => setProjectFormData({...projectFormData, description: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Jelaskan proyek ini..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Gambar</label>
                  <div className="flex gap-6 items-start">
                    <div onClick={() => fileInputRef.current?.click()} className="w-32 h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer relative group">
                      {projectFormData.imageUrl ? <img src={projectFormData.imageUrl} className="w-full h-full object-cover" alt="" /> : <ImageIcon size={32} className="text-slate-300" />}
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white"><Upload size={20} /></div>
                    </div>
                    <input type="file" hidden ref={fileInputRef} accept="image/*" onChange={handleImageUpload} />
                  </div>
                </div>
                <footer className="pt-6 border-t border-slate-50 flex justify-end gap-4">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-4 rounded-2xl text-sm font-bold text-slate-500">Batal</button>
                  <button type="submit" className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-sm font-bold shadow-xl">Simpan</button>
                </footer>
              </form>
            </div>
          </div>
        )}

        {/* Pricing Modal */}
        {isPricingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative">
              <header className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <div><h3 className="text-xl font-black text-slate-900">{editingPlan ? 'Edit Paket' : 'Tambah Paket Baru'}</h3><p className="text-xs text-slate-500 font-medium">Atur paket harga layanan Anda.</p></div>
                <button onClick={() => setIsPricingModalOpen(false)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400"><X size={24} /></button>
              </header>
              <form onSubmit={handleSavePricing} className="p-10 space-y-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Nama Paket</label>
                    <input type="text" required value={pricingFormData.name} onChange={e => setPricingFormData({...pricingFormData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Contoh: Paket UMKM" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Harga</label>
                    <input type="text" required value={pricingFormData.price} onChange={e => setPricingFormData({...pricingFormData, price: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Contoh: Rp 1.500.000" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Durasi</label>
                    <input type="text" required value={pricingFormData.duration} onChange={e => setPricingFormData({...pricingFormData, duration: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Contoh: 3-5 Hari" />
                  </div>
                  <div className="flex items-center gap-8 pt-6">
                    <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={pricingFormData.recommended} onChange={e => setPricingFormData({...pricingFormData, recommended: e.target.checked})} className="w-5 h-5 rounded border-slate-300 text-blue-600" /><span className="text-xs font-bold text-slate-700">Recommended</span></label>
                    <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={pricingFormData.active} onChange={e => setPricingFormData({...pricingFormData, active: e.target.checked})} className="w-5 h-5 rounded border-slate-300 text-blue-600" /><span className="text-xs font-bold text-slate-700">Aktif</span></label>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Daftar Fitur</label>
                  <div className="flex gap-2">
                    <input type="text" value={featureInput} onChange={e => setFeatureInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())} className="flex-grow bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" placeholder="Ketik fitur lalu Enter" />
                    <button type="button" onClick={handleAddFeature} className="bg-slate-900 text-white p-4 rounded-2xl"><Plus size={20} /></button>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pricingFormData.features?.map((f, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2">{f}<button type="button" onClick={() => handleRemoveFeature(i)} className="hover:text-red-500"><X size={14} /></button></span>
                    ))}
                  </div>
                </div>
                <footer className="pt-6 border-t border-slate-50 flex justify-end gap-4">
                  <button type="button" onClick={() => setIsPricingModalOpen(false)} className="px-8 py-4 rounded-2xl text-sm font-bold text-slate-500">Batal</button>
                  <button type="submit" className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-sm font-bold shadow-xl">Simpan</button>
                </footer>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
