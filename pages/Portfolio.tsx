
import React, { useState } from 'react';
import { INITIAL_PROJECTS } from '../constants';
import { ExternalLink, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Company Profile', 'Landing Page', 'E-Raport', 'Digital ID Card', 'Organisasi Profile'];
  
  const filteredProjects = filter === 'All' 
    ? INITIAL_PROJECTS 
    : INITIAL_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Portofolio Kami</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Lihat bagaimana kami membantu berbagai bisnis mencapai tujuan digital mereka melalui desain dan teknologi.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                   <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase text-blue-600 shadow-sm">{project.category}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded font-bold">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-600"
            >
              <X size={24} />
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img src={selectedProject.imageUrl} className="w-full h-full object-cover" alt={selectedProject.name} />
              </div>
              <div className="p-10 md:p-14">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] block mb-2">{selectedProject.category}</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{selectedProject.name}</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">Tentang Project</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech: string) => (
                        <span key={tech} className="bg-blue-50 text-blue-600 text-[10px] px-3 py-1.5 rounded-lg font-bold">{tech}</span>
                      ))}
                    </div>
                  </div>
                  {selectedProject.demoUrl && (
                    <div className="pt-6">
                      <a 
                        href={selectedProject.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                      >
                        Lihat Live Demo <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
