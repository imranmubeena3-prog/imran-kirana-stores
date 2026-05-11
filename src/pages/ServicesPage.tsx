import React from 'react';
import { motion } from 'motion/react';
import { services } from '../constants/data';
import { translations, LanguageState } from '../constants/translations';
import { MessageCircle } from 'lucide-react';

export const ServicesPage: React.FC<{ lang: LanguageState }> = ({ lang }) => {
  const t = translations[lang];
  
  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-600 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t.sections.servicesTitle}
          </motion.h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Professional assistance for all your government and digital services in one place.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.name}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {service.desc} We provide end-to-end support including documentation, application, and tracking.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-sm text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Official Rates Applicable</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Same Day Processing</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Free Consultation</span>
                  </li>
                </ul>
                <a 
                  href={`https://wa.me/910000000000?text=I'm interested in ${service.name}`}
                  className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-black rounded-2xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-green-100"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
