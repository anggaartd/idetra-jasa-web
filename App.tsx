
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, LogIn } from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Blog from './pages/Blog';

// Components
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  if (isAdminPath) return null;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-blue-600 flex items-center">
              <span className="text-slate-900">IDE</span>TRA
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
            >
              Konsultasi Gratis
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 pb-6">
          <div className="px-2 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-bold shadow-lg shadow-blue-100"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-extrabold text-white mb-6">
              <span className="text-blue-500">IDE</span>TRA
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Solusi digital profesional untuk pertumbuhan bisnis Anda. Kami membangun website yang tidak hanya indah, tapi juga berkonversi.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Layanan Kami</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Digital ID Card</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">E-Raport System</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Organisasi Profile</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portofolio</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li>Email: halo@idetra.id</li>
              <li>WA: +62 812-3456-7890</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-800">
               <Link to="/login" className="flex items-center text-xs text-slate-500 hover:text-slate-300">
                <LogIn size={12} className="mr-2" /> Admin Login
               </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 IDETRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton: React.FC = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
    >
      <MessageCircle size={24} />
    </a>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}

export default App;
