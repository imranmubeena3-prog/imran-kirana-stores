import React from 'react';
import { motion } from 'motion/react';
import { translations, LanguageState } from '../constants/translations';
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown } from 'lucide-react';
import { faqs } from '../constants/data';

export const ContactPage: React.FC<{ lang: LanguageState }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">{t.sections.contactTitle}</h1>
            <p className="text-slate-600 text-xl">We are always ready to help you with your digital and grocery needs.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-500 mb-4">Available during shop hours</p>
              <a href="tel:+919100000000" className="text-blue-600 font-black text-lg">+91 91000 00000</a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-slate-500 mb-4">Fast response for inquiries</p>
              <a href="https://wa.me/910000000000" className="text-green-600 font-black text-lg">+91 91000 00000</a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hours</h3>
              <p className="text-slate-500 mb-4">Open every day</p>
              <p className="text-amber-600 font-black text-lg">8:00 AM - 9:30 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const FAQPage: React.FC<{ lang: LanguageState }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="pt-24 pb-20">
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 text-center">{t.sections.faqTitle}</h1>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-3xl border border-slate-100 [&_summary::-webkit-details-marker]:hidden overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer select-none">
                  <h3 className="text-xl font-bold text-slate-900 pr-4">{faq.q}</h3>
                  <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto py-20 prose prose-slate">
        <h1 className="text-4xl font-black text-slate-900 mb-10">Privacy Policy</h1>
        <p className="text-lg text-slate-600 mb-6">
          At Imran Online Services & Kirana Store, we are committed to protecting your privacy. This policy explains how we handle your personal information when you use our services or visit our shop.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Information Collection</h2>
        <p className="text-slate-600 mb-6">
          We collect personal information (such as name, phone number, and documents) only when you voluntarily provide it to us for online services or home delivery. This information is used strictly for processing your requests with government portals or delivering groceries.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Data Protection</h2>
        <p className="text-slate-600 mb-6">
          We do not share your private documents, Aadhaar details, or PAN card information with any third party except the respective government portals required for the service.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Contact Us</h2>
        <p className="text-slate-600 mb-6">
          If you have any questions regarding your data privacy, please reach out to us at our store location.
        </p>
      </div>
    </div>
  );
};
