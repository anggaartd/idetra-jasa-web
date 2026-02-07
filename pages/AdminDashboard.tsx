
import React, { useState } from 'react';
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
  BookOpen,
  MessageSquare,
  Search,
  ChevronRight,
  ExternalLink,
  X,
  Star,
  ArrowRight,
  CheckCircle2,
  Image as ImageIcon,
  Globe
} from 'lucide-react';
import { INITIAL_PROJECTS, BLOG_POSTS, INITIAL_PRICING } from '../constants';
import { PricingPlan, Project } from '../types';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(INITIAL_PRICING);
  
  // Modals state
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  
  // Edit states
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  
  // Form States
  const [pricingForm, setPricingForm] = useState({
    name: '',
    price: '',
    duration: '',
    features: '',
    recommended: false
  });

  const [projectForm, setProjectForm] = useState({
    name: '',
    category: 'Landing Page' as Project['category'],
    description: '',
    techStack: '',
    imageUrl: '',
    demoUrl: '',
    status: 'published' as Project['status']
  });

  const navigate = useNavigate();

  const tabs = [
    { id: 'overview', name: 'Ringkasan', icon: <LayoutGrid size={20} /> },
    { id: 'projects', name: 'Portofolio', icon: <Briefcase size={20} /> },
    { id: 'blog', name: 'Manajemen Blog', icon: <BookOpen size={20} /> },
    { id: 'inquiries', name: 'Pesan Masuk', icon: <MessageSquare size={20} /> },
    { id: 'pricing', name: 'Manajemen Paket', icon: <Tag size={20} /> }
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  // --- PRICING CRUD ---
  const openPricingModal = (plan?: PricingPlan) => {
    if (plan) {
      setEditingPlan(plan);
      setPricingForm({
        name: plan.name,
        price: plan.price,
        duration: plan.duration,
        features: plan.features.join('\n'),
        recommended: plan.recommended || false
      });
    } else {
      setEditingPlan(null);
      setPricingForm({
        name: '',
        price: '',
        duration: '',
        features: '',
        recommended: false
      });
    }
    setIsPricingModalOpen(true);
  };

  const handleSavePricing = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlan: PricingPlan = {
      id: editingPlan ? editingPlan.id : `p${Date.now()}`,
      name: pricingForm.name,
      price: pricingForm.price,
      duration: pricingForm.duration,
      features: pricingForm.features.split('\n').filter(f => f.trim() !== ''),
      recommended: pricingForm.recommended,
      active: true
    };

    if (editingPlan) {
      setPricingPlans(prev => prev.map(p => p.id === editingPlan.id ? newPlan : p));
    } else {
      setPricingPlans(prev => [...prev, newPlan]);
    }
    setIsPricingModalOpen(false);
  };

  const handleDeletePricing = (id: string) => {
    if (window.confirm('Hapus paket ini?')) {
      setPricingPlans(prev => prev.filter(p => p.id !== id));
    }
  };

  // --- PROJECT CRUD ---
  const openProjectModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setProjectForm({
        name: project.name,
        category: project.category,
        description: project.description,
        techStack: project.techStack.join(', '),
        imageUrl: project.imageUrl,
        demoUrl: project.demoUrl || '',
        status: project.status
      });
    } else {
      setEditingProject(null);
      setProjectForm({
        name: '',
        category: 'Landing Page',
        description: '',
        techStack: '',
        imageUrl: '',
        demoUrl: '',
        status: 'published'
      });
    }
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      id: editingProject ? editingProject.id : `${Date.now()}`,
      name: projectForm.name,
      category: projectForm.category,
      description: projectForm.description,
      techStack: projectForm.techStack.split(',').map(s => s.trim()).filter(s => s !== ''),
      imageUrl: projectForm.imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop',
      demoUrl: projectForm.demoUrl,
      status: projectForm.status
    };

    if (editingProject) {
      setProjects(prev => prev.map(p => p.id === editingProject.id ? newProject : p));
    } else {
      setProjects(prev => [...prev, newProject]);
    }
    setIsProjectModalOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Hapus project ini dari portofolio?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const renderOverview = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Proyek', value: projects.length.toString(), icon: <Briefcase className="text-blue-600" />, trend: 'Aktif' },
          { label: 'Artikel Blog', value: BLOG_POSTS.length.toString(), icon: <BookOpen className="text-purple-600" />, trend: 'Update' },
          { label: 'Pesan Baru', value: '7', icon: <MessageSquare className="text-orange-600" />, trend: 'Priority' },
          { label: 'Paket Harga', value: pricingPlans.length.toString(), icon: <Tag className="text-green-600" />, trend: 'Live' }
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
              <CheckCircle className="text-green-500 mr-2" size={20} /> Log Perubahan
            </h5>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-black text-blue-600">PK</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Perubahan harga Paket Basic</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase">Baru saja • Oleh Admin</p>
                </div>
              </div>
              <ChevronRight size={14} className="text-slate-300" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
          <div className="flex justify-between items-center mb-8">
            <h5 className="text-lg font-bold text-blue-400">Pusat Bantuan</h5>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700/50">
             <p className="text-sm text-slate-300 leading-relaxed mb-6">Butuh bantuan teknis atau ingin menambahkan fitur kustom ke dashboard Anda?</p>
             <button className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
               Hubungi Support Team <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectManager = () => (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h4 className="text-2xl font-black text-slate-900">Kelola Portofolio</h4>
        <button 
          onClick={() => openProjectModal()}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center whitespace-nowrap shadow-lg shadow-blue-100"
        >
          <Plus size={18} className="mr-2" /> Tambah Project
        </button>
      </div>

      <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black">
            <tr>
              <th className="px-8 py-6">Project</th>
              <th className="px-8 py-6">Kategori</th>
              <th className="px-8 py-6">Demo Link</th>
              <th className="px-8 py-6 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {projects.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <img src={item.imageUrl} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt={item.name} />
                    <div>
                       <span className="text-sm font-bold text-slate-900 block">{item.name}</span>
                       <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded ${item.status === 'published' ? 'text-green-500 bg-green-50' : 'text-slate-400 bg-slate-100'}`}>
                         {item.status}
                       </span>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{item.category}</span>
                </td>
                <td className="px-8 py-6">
                   {item.demoUrl ? (
                     <a href={item.demoUrl} target="_blank" className="text-blue-600 hover:underline flex items-center text-xs gap-1 font-bold">
                       Link Aktif <ExternalLink size={12} />
                     </a>
                   ) : (
                     <span className="text-slate-300 text-xs italic">Tidak ada</span>
                   )}
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-3">
                    <button onClick={() => openProjectModal(item)} className="p-2.5 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Edit3 size={16} /></button>
                    <button onClick={() => handleDeleteProject(item.id)} className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPricingManager = () => (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h4 className="text-2xl font-black text-slate-900 mb-2">Editor Paket Layanan</h4>
          <p className="text-slate-500 text-sm">Kelola paket investasi yang tampil di halaman depan. Anda bisa mengubah harga, fitur, dan highlight paket rekomendasi.</p>
        </div>
        <button 
          onClick={() => openPricingModal()}
          className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-black flex items-center whitespace-nowrap shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1"
        >
          <Plus size={20} className="mr-2" /> Buat Paket Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`relative p-8 rounded-[2.5rem] border bg-white flex flex-col group transition-all ${
              plan.recommended ? 'border-blue-500 shadow-xl' : 'border-slate-100 shadow-sm'
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                Recommended
              </div>
            )}
            
            <div className="mb-6 flex justify-between items-start">
               <div>
                  <h5 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h5>
                  <p className="text-2xl font-black text-slate-900">{plan.price}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 italic">{plan.duration}</p>
               </div>
               <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openPricingModal(plan)} className="p-2 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                    <Edit3 size={16} />
                  </button>
                  <button onClick={() => handleDeletePricing(plan.id)} className="p-2 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                    <Trash2 size={16} />
                  </button>
               </div>
            </div>

            <ul className="space-y-3 mb-10 flex-grow">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center text-xs text-slate-500">
                  <CheckCircle2 className="text-blue-600 mr-3 shrink-0" size={16} />
                  <span className="truncate">{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-50">
               <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>Status:</span>
                  <span className="text-green-600 bg-green-50 px-2 py-1 rounded">Live On Web</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col fixed inset-y-0 z-50">
        <div className="p-10 border-b border-slate-100">
          <Link to="/" className="text-2xl font-black text-slate-900 tracking-tighter">
            <span className="text-blue-600">IDE</span>TRA
          </Link>
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Console v2.0</p>
        </div>

        <nav className="flex-grow p-6 space-y-2 mt-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/20 translate-x-1' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="mr-4">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} className="mr-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow md:ml-72 p-6 md:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Dashboard</h2>
            <p className="text-sm text-slate-500 mt-1">Kelola seluruh konten website IDETRA di sini.</p>
          </div>
          <div className="flex items-center gap-4">
             <Link to="/" target="_blank" className="bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl text-xs font-bold flex items-center shadow-sm hover:bg-slate-50 transition-colors">
               Live Preview <ExternalLink size={14} className="ml-2" />
             </Link>
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 shadow-sm transition-all">
              <Settings size={20} />
            </button>
          </div>
        </header>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'projects' && renderProjectManager()}
        {activeTab === 'blog' && (
           <div className="py-20 text-center bg-white rounded-[3rem] border border-slate-100">
             <BookOpen size={48} className="mx-auto text-slate-200 mb-6" />
             <h4 className="text-xl font-bold text-slate-900">Manajemen Blog</h4>
             <p className="text-slate-400 text-sm mt-2 max-w-xs mx-auto">Publikasikan wawasan terbaru Anda untuk meningkatkan SEO website.</p>
           </div>
        )}
        {activeTab === 'pricing' && renderPricingManager()}
        
        {activeTab === 'inquiries' && (
          <div className="animate-in fade-in duration-500">
             <h4 className="text-2xl font-black text-slate-900 mb-8">Pesan Masuk (Leads)</h4>
             <div className="space-y-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 w-full md:w-auto">
                       <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center font-black">LEAD</div>
                       <div>
                          <p className="font-bold text-slate-900 text-lg">Bpk. Ahmad Sujarwo</p>
                          <p className="text-sm text-slate-500 mt-1">"Ingin tanya estimasi paket Custom E-Raport untuk Sekolah..."</p>
                          <div className="flex items-center gap-4 mt-3">
                             <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2 py-1 rounded">E-Raport</span>
                             <span className="text-[10px] font-medium text-slate-400">2 jam yang lalu</span>
                          </div>
                       </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                       <button className="flex-grow md:flex-none px-8 py-4 bg-green-600 text-white rounded-2xl text-xs font-black shadow-lg shadow-green-100">Hubungi WA</button>
                       <button className="px-4 py-4 bg-slate-50 text-slate-400 rounded-2xl hover:text-red-500 transition-all"><Trash2 size={20} /></button>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}
      </main>

      {/* Project CRUD Modal */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden relative shadow-2xl">
            <div className="p-10 border-b border-slate-50 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{editingProject ? 'Edit Portofolio' : 'Tambah Project Baru'}</h3>
                <p className="text-sm text-slate-400 mt-1">Isi detail karya terbaik Anda.</p>
              </div>
              <button onClick={() => setIsProjectModalOpen(false)} className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSaveProject} className="p-10 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nama Project</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none" 
                    value={projectForm.name}
                    onChange={e => setProjectForm({...projectForm, name: e.target.value})}
                    placeholder="Contoh: Coffee Shop Landing"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Kategori</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none"
                    value={projectForm.category}
                    onChange={e => setProjectForm({...projectForm, category: e.target.value as any})}
                  >
                    <option>Company Profile</option>
                    <option>Landing Page</option>
                    <option>E-Raport</option>
                    <option>Digital ID Card</option>
                    <option>Organisasi Profile</option>
                    <option>Custom Web App</option>
                    <option>E-Commerce</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Deskripsi Singkat</label>
                <textarea 
                  required 
                  rows={3} 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-600/10 focus:outline-none resize-none" 
                  value={projectForm.description}
                  onChange={e => setProjectForm({...projectForm, description: e.target.value})}
                  placeholder="Ceritakan tentang project ini..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Tech Stack (Pisahkan dengan koma)</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none" 
                  value={projectForm.techStack}
                  onChange={e => setProjectForm({...projectForm, techStack: e.target.value})}
                  placeholder="React, Tailwind, Firebase..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1"><ImageIcon size={10} /> Image URL</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none" 
                    value={projectForm.imageUrl}
                    onChange={e => setProjectForm({...projectForm, imageUrl: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1"><Globe size={10} /> Live Demo URL</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none" 
                    value={projectForm.demoUrl}
                    onChange={e => setProjectForm({...projectForm, demoUrl: e.target.value})}
                    placeholder="https://myproject.com"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                 <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Status:</label>
                 <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                       <input type="radio" name="status" checked={projectForm.status === 'published'} onChange={() => setProjectForm({...projectForm, status: 'published'})} />
                       Published
                    </label>
                    <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                       <input type="radio" name="status" checked={projectForm.status === 'draft'} onChange={() => setProjectForm({...projectForm, status: 'draft'})} />
                       Draft
                    </label>
                 </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-3xl text-sm font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1">
                  Simpan Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pricing CRUD Modal (Already existed, kept for completeness) */}
      {isPricingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-xl rounded-[3rem] overflow-hidden relative shadow-2xl">
            <div className="p-10 border-b border-slate-50 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{editingPlan ? 'Ubah Paket' : 'Tambah Paket Layanan'}</h3>
                <p className="text-sm text-slate-400 mt-1">Detail paket akan langsung terupdate di halaman depan.</p>
              </div>
              <button onClick={() => setIsPricingModalOpen(false)} className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSavePricing} className="p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nama Paket</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none" 
                    value={pricingForm.name}
                    onChange={e => setPricingForm({...pricingForm, name: e.target.value})}
                    placeholder="Contoh: Paket Basic"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Harga / Custom</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none" 
                    value={pricingForm.price}
                    onChange={e => setPricingForm({...pricingForm, price: e.target.value})}
                    placeholder="Contoh: Rp 1.500.000"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Estimasi Pengerjaan</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-blue-600/10 focus:outline-none" 
                  value={pricingForm.duration}
                  onChange={e => setPricingForm({...pricingForm, duration: e.target.value})}
                  placeholder="Contoh: 3-5 Hari Kerja"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Fitur Unggulan (Enter untuk baris baru)</label>
                <textarea 
                  required 
                  rows={5} 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-600/10 focus:outline-none resize-none leading-relaxed" 
                  value={pricingForm.features}
                  onChange={e => setPricingForm({...pricingForm, features: e.target.value})}
                  placeholder="Single Landing Page&#10;Mobile Responsive&#10;Gratis Hosting..."
                />
              </div>

              <div className="flex items-center gap-4 p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                <input 
                  type="checkbox" 
                  id="recommended-check" 
                  className="w-6 h-6 rounded-lg border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  checked={pricingForm.recommended}
                  onChange={e => setPricingForm({...pricingForm, recommended: e.target.checked})}
                />
                <div>
                   <label htmlFor="recommended-check" className="text-sm font-black text-slate-900 cursor-pointer">Setel Sebagai Paket Unggulan</label>
                   <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5">Diberikan label "Recommended" & Highlight Biru</p>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-3xl text-sm font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1">
                  Simpan Paket Layanan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
