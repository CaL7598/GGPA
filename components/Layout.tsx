
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Search, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import logo from '../assets/Logo/logo.png';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#/" className="flex items-center gap-3 group">
                <img 
                  src={logo} 
                  alt="GGPA Logo" 
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className={`text-xl font-bold font-serif leading-none tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>GGPA</span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${scrolled ? 'text-slate-500' : 'text-slate-600'}`}>Global Governance & Policy Alliance</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold hover:text-amber-600 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-700'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#/compendium" 
                className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all transform hover:scale-105"
              >
                The Compendium
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#/compendium"
                className="block mt-4 text-center bg-slate-900 text-white px-5 py-4 rounded-xl font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Access The Compendium
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="GGPA Logo" 
                  className="h-8 w-auto object-contain"
                />
                <span className="text-2xl font-bold font-serif tracking-tight">GGPA</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A world-class technical alliance architecting the future of global governance through scientific policy and youth-led functional authority.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors"><Globe size={18} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors"><Mail size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Governance</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Ghana Act 992 Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IPSAS Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR & Data Ethics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Secretariat Structure</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {NAV_LINKS.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-white transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 font-serif">Contact Headquarters</h4>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-400 shrink-0 mt-1" />
                  <span>Accra, Ghana - Diplomatic Enclave</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-amber-400 shrink-0" />
                  <span>+233 (0) XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-amber-400 shrink-0" />
                  <span>secretariat@ggpa-global.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs">
              © 2026 GGPA. Registered entity under Ghana Companies Act, 2019 (Act 992). All Rights Reserved.
            </p>
            <div className="flex gap-8 text-xs text-slate-500">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Data Ethics</a>
              <a href="#" className="hover:text-white">Press Room</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
