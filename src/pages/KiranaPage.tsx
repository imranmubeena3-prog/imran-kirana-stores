import React from 'react';
import { motion } from 'motion/react';
import { kiranaCategories } from '../constants/data';
import { translations, LanguageState } from '../constants/translations';
import { ShoppingCart, Truck, Clock, ShieldCheck } from 'lucide-react';

export const KiranaPage: React.FC<{ lang: LanguageState }> = ({ lang }) => {
  const t = translations[lang];
  
  return (
    <div className="pt-24 pb-20">
      <section className="bg-green-600 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t.sections.kiranaTitle}
          </motion.h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">
            Order fresh groceries and daily needs. Home delivery available within 3km.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: 'Home Delivery', desc: 'Fast local delivery' },
              { icon: ShieldCheck, title: '100% Pure', desc: 'Quality checked' },
              { icon: Clock, title: 'Daily Fresh', desc: 'New stock every day' },
              { icon: ShoppingCart, title: 'Best Price', desc: 'Value for money' },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl">
                <f.icon className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="font-bold text-slate-900">{f.title}</h4>
                <p className="text-xs text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kiranaCategories.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center space-x-2 text-green-600 shadow-sm">
                    <cat.icon className="w-4 h-4" />
                    <span className="text-sm font-bold">{cat.name}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cat.items.map(item => (
                      <span key={item} className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium border border-slate-100">{item}</span>
                    ))}
                  </div>
                  <button className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-green-100 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Order Category</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
