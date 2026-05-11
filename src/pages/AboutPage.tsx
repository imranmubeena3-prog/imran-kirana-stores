import React from 'react';
import { motion } from 'motion/react';
import { translations, LanguageState } from '../constants/translations';
import { CheckCircle2, Award, History, Target } from 'lucide-react';

export const AboutPage: React.FC<{ lang: LanguageState }> = ({ lang }) => {
  const t = translations[lang];
  
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-900 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t.nav.about} Imran Online Store
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Serving our local community with trust and excellence since 2015.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Our Story</h2>
               <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                 Founded in 2015, Imran Online Services & Kirana Store began with a simple mission: to make digital government services accessible to everyone in our community. We noticed that many local families, students, and elderly people struggled with online applications and digital documentation.
               </p>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 Over the years, we expanded to include a full-service Kirana store, providing daily essentials alongside our digital solutions. Today, we are proud to be a one-stop-shop for thousands of loyal customers.
               </p>
               <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                   <Award className="w-10 h-10 text-blue-600 mb-4" />
                   <h4 className="font-black text-slate-900 text-lg">9+ Years</h4>
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-widest leading-none">Experience</p>
                 </div>
                 <div className="p-6 bg-green-50 rounded-3xl border border-green-100">
                   <Target className="w-10 h-10 text-green-600 mb-4" />
                   <h4 className="font-black text-slate-900 text-lg">100%</h4>
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-widest leading-none">Customer Satisfaction</p>
                 </div>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="About Us" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-xs">
                 <p className="text-slate-900 font-bold text-lg mb-2">"We treat every customer like family."</p>
                 <p className="text-blue-600 font-bold">- Imran, Founder</p>
               </div>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
