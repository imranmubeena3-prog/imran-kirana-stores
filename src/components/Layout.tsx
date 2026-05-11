import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Globe, MapPin, Clock, Facebook, Instagram, Youtube, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { translations, LanguageState } from '../constants/translations';

interface LayoutProps {
  children: React.ReactNode;
  lang: LanguageState;
  setLang: (lang: LanguageState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.kirana, href: '/kirana' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
    { name: t.nav.faqTitle || 'FAQ', href: '/faq' },
  ];

  return (
    <div className="min-h-screen relative font-sans">
      <div className="mesh-gradient">
        <div className="mesh-ball-1"></div>
        <div className="mesh-ball-2"></div>
      </div>

      {/* Top Utility Bar */}
      <div className="hidden lg:flex bg-slate-900 text-white px-8 py-2 justify-between items-center text-[10px] uppercase tracking-widest font-bold fixed top-0 w-full z-[60]">
        <div className="flex gap-6">
          <span className="flex items-center gap-1 opacity-80"><MapPin className="w-3 h-3" /> Kurnool Road, Andhra Pradesh</span>
          <span className="flex items-center gap-1 text-emerald-400">● Store Open: 08:00 AM - 09:30 PM</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="opacity-60 lowercase">Language:</span>
          <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-emerald-400' : 'hover:text-emerald-400'} transition-colors uppercase`}>English</button>
          <button onClick={() => setLang('te')} className={`${lang === 'te' ? 'text-emerald-400 font-black' : 'hover:text-emerald-400'} transition-colors`}>తెలుగు</button>
          <span className="mx-2 opacity-20">|</span>
          <a href="tel:+919100000000" className="flex items-center gap-1 hover:text-emerald-400"><Phone className="w-3 h-3" /> +91 91000 00000</a>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed ${isScrolled ? 'top-0' : 'top-0 lg:top-8'} left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-sm py-2' : 'bg-white/60 backdrop-blur-md border-b border-white/20 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-200/50 group-hover:scale-105 transition-transform">
                I
              </div>
              <div>
                <h1 className="font-extrabold text-sm lg:text-lg leading-none tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                  Imran Online <span className="text-emerald-600">& Kirana</span>
                </h1>
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-1">Services & Daily Needs</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 ${location.pathname === item.href ? 'text-blue-600 scale-105' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pl-4 border-l border-slate-200">
                <button 
                  onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
                  className="bg-slate-900 text-white rounded-full p-2 hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200"
                >
                  <Globe className="w-4 h-4" />
                </button>
                <a 
                  href="https://wa.me/910000000000" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-xs font-black flex items-center space-x-2 shadow-xl shadow-emerald-200 tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.hero.ctaWhatsApp}</span>
                </a>
              </div>
            </nav>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center space-x-4">
               <button 
                onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
                className="p-2 text-slate-600 hover:text-blue-600"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="py-4 text-xl font-semibold border-b border-slate-100 flex justify-between items-center"
                >
                  {item.name}
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
              ))}
              <div className="mt-10 space-y-4">
                <a 
                  href="tel:+910000000000" 
                  className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center space-x-3 text-lg font-bold shadow-lg"
                >
                  <Phone className="w-6 h-6" />
                  <span>{t.hero.ctaCall}</span>
                </a>
                <a 
                  href="https://wa.me/910000000000" 
                  className="w-full bg-green-600 text-white py-4 rounded-xl flex items-center justify-center space-x-3 text-lg font-bold shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>{t.hero.ctaWhatsApp}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={isScrolled ? 'pt-16' : 'pt-24 lg:pt-32'}>
        {children}
      </main>

      {/* Sticky Bottom Contact Bar (Mobile Focused) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-t border-white/60 p-4 md:px-8 flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <a href="tel:+919100000000" className="flex-1 bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 font-bold text-sm shadow-lg shadow-blue-200 mr-2">
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>
        <a href="https://wa.me/910000000000" className="flex-1 bg-emerald-500 text-white py-3 rounded-xl flex items-center justify-center space-x-2 font-bold text-sm shadow-lg shadow-emerald-200">
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Floating Buttons (Desktop) */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col space-y-4">
         <a 
          href="https://wa.me/910000000000" 
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group relative"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">I</div>
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">Imran Store</h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {t.footer.about}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white transition-all"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t.footer.quickLinks}</h3>
              <ul className="space-y-3">
                {navItems.map(item => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/privacy" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t.footer.ourServices}</h3>
              <ul className="space-y-3 text-slate-400">
                <li>Aadhaar & PAN Card</li>
                <li>MeeSeva Services</li>
                <li>Ticket Bookings</li>
                <li>Bill Payments</li>
                <li>Daily Groceries</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t.footer.contactUs}</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Main Road, Near Bus Stand, Local Area, Andhra Pradesh, 500000</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+91 91000 00000</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>8:00 AM - 9:30 PM (Daily)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
