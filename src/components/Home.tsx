import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Zap, 
  MapPin, 
  Star, 
  ChevronDown,
  Clock
} from 'lucide-react';
import { services, kiranaCategories, testimonials, faqs } from '../constants/data';
import { translations, LanguageState } from '../constants/translations';

export const Home: React.FC<{ lang: LanguageState }> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-visible">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 backdrop-blur-sm text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-200">
              <Zap className="w-3.5 h-3.5" />
              <span>{t.hero.fastService}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Fast Online Services <br/>& <span className="text-blue-600">Daily Needs</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium opacity-80">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-[2rem] text-lg font-black shadow-2xl shadow-emerald-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group">
                <MessageCircle className="w-6 h-6" />
                <span>{t.hero.ctaWhatsApp}</span>
              </button>
              <button className="bg-white/70 backdrop-blur-md border border-white hover:bg-white text-slate-900 px-10 py-5 rounded-[2rem] text-lg font-black transition-all hover:scale-105 shadow-xl shadow-slate-200/50 flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>{t.hero.ctaCall}</span>
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-500">
                <span className="text-blue-600">1000+</span> Customers trusted us this month
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-200 border-4 border-white/40">
               <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1000" 
                alt="Store Interior" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Overlay Cards */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-8 top-1/4 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/60 hidden sm:block"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Trust Pilot</p>
                  <p className="font-extrabold text-slate-900">MeeSeva Certified</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -left-8 bottom-1/4 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/60 hidden sm:block"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Local Pride</p>
                  <p className="font-extrabold text-slate-900">9+ Years Serving</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges / Stats Section */}
      <section className="bg-white border-y border-slate-100 py-12 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <h3 className="text-3xl font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform">1000+</h3>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">{t.trust.customers}</p>
            </div>
            <div className="text-center group">
              <h3 className="text-3xl font-black text-green-600 mb-1 group-hover:scale-110 transition-transform">100%</h3>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">{t.trust.trusted}</p>
            </div>
            <div className="text-center group">
              <h3 className="text-3xl font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform">5 Min</h3>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">{t.trust.fast}</p>
            </div>
            <div className="text-center group">
              <h3 className="text-3xl font-black text-green-600 mb-1 group-hover:scale-110 transition-transform">24/7</h3>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">{t.trust.support}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Digital Hub</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">{t.sections.servicesTitle}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">{t.sections.servicesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:shadow-blue-200/30 hover:-translate-y-2 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{service.name}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium opacity-80">{service.desc}</p>
                <button className="w-full py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl transition-all hover:bg-emerald-600 shadow-xl shadow-slate-200/50">
                  WhatsApp Inquiry
                </button>
              </motion.div>
            ))}
            <div className="bg-slate-900 p-8 rounded-[2rem] flex flex-col justify-center items-center text-white text-center group cursor-pointer hover:bg-emerald-600 transition-colors">
              <span className="text-2xl font-black mb-2 animate-pulse tracking-tight">+25 More</span>
              <p className="text-xs opacity-60 uppercase font-black tracking-widest">Government Services</p>
              <button className="mt-4 text-emerald-400 font-black text-xs uppercase tracking-widest underline group-hover:text-white">View All</button>
            </div>
          </div>
        </div>
      </section>

      {/* Kirana Store Section */}
      <section id="kirana" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-3xl">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Fresh & Local</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">{t.sections.kiranaTitle}</h2>
                <p className="text-blue-100 text-xl lg:text-2xl mb-12 opacity-90 font-medium">Daily Essentials at Local Prices. Fresh Grocery, Dairy, and Household Goods delivered to your door.</p>
                <div className="grid grid-cols-2 gap-4 mb-12">
                   {['Rice & Grains', 'Dairy & Milk', 'Oils & Ghee', 'Fresh Veggies'].map(item => (
                     <div key={item} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                       <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                       <span className="font-bold text-sm">{item}</span>
                     </div>
                   ))}
                </div>
                <button className="bg-white text-blue-600 px-10 py-5 rounded-3xl font-black text-lg uppercase tracking-wider shadow-2xl hover:scale-105 transition-all active:scale-95">
                  Order via WhatsApp
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {kiranaCategories.slice(0, 4).map((cat, idx) => (
                  <motion.div 
                    key={cat.id}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-2 border-white/20"
                  >
                    <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white">{cat.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 w-full aspect-square rounded-[3rem] p-1 shadow-2xl relative z-10">
                <div className="w-full h-full bg-slate-900 rounded-[2.8rem] flex items-center justify-center p-12">
                   <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <h4 className="text-5xl font-black text-blue-500">09+</h4>
                       <p className="text-slate-400 font-bold text-sm uppercase">Years Exp</p>
                     </div>
                     <div className="space-y-2">
                       <h4 className="text-5xl font-black text-green-500">24h</h4>
                       <p className="text-slate-400 font-bold text-sm uppercase">Delivery</p>
                     </div>
                     <div className="space-y-2">
                       <h4 className="text-5xl font-black text-blue-500">10k+</h4>
                       <p className="text-slate-400 font-bold text-sm uppercase">Orders</p>
                     </div>
                     <div className="space-y-2">
                       <h4 className="text-5xl font-black text-green-500">5.0</h4>
                       <p className="text-slate-400 font-bold text-sm uppercase">Rating</p>
                     </div>
                   </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 blur-[80px]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-600/30 blur-[80px]"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">{t.sections.whyChooseTitle}</h2>
              <div className="space-y-8">
                {[
                  { title: 'Affordable Rates', desc: 'No hidden charges. We provide all services at official government rates with minimal service fee.', icon: CheckCircle2 },
                  { title: 'Privacy & Security', desc: 'Your documents and data are 100% safe with us. We handle sensitive data with professional care.', icon: CheckCircle2 },
                  { title: 'Instant Support', desc: 'Visit our store anytime or call us for instant updates on your application status.', icon: CheckCircle2 },
                  { title: 'Local Expertise', desc: 'We know the local rules and procedures perfectly, helping you get certificates faster.', icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{t.sections.reviewsTitle}</h2>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm relative"
              >
                <div className="absolute top-10 right-10 text-slate-100 italic font-serif text-8xl leading-none select-none">"</div>
                <div className="relative z-10">
                  <div className="flex space-x-1 mb-6">
                    {Array.from({ length: review.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt={review.name} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{review.name}</p>
                      <p className="text-sm text-slate-400">{review.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-16">{t.sections.faqTitle}</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">{t.sections.contactTitle}</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">Have a question or need a service? Reach out to us directly or visit our shop. We're here to help you with everything you need.</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Our Location</h4>
                    <p className="text-slate-500">Main Road, Near Bus Stand, Local Area, Andhra Pradesh, 500000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 p-4 rounded-2xl text-white shadow-lg shadow-green-200">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Phone Number</h4>
                    <p className="text-slate-500">+91 91000 00000</p>
                    <p className="text-slate-500">+91 91222 33333</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                   <div className="bg-amber-500 p-4 rounded-2xl text-white shadow-lg shadow-amber-200">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Business Hours</h4>
                    <p className="text-slate-500">Mon - Sun: 8:00 AM - 9:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col justify-between">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter your name" />
                  </div>
                   <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter your phone" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>Select a service</option>
                    <option>Aadhaar Service</option>
                    <option>PAN Card</option>
                    <option>Ticket Booking</option>
                    <option>Kirana Order</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-slate-900 hover:bg-blue-600 text-white font-black rounded-2xl shadow-xl transition-all hover:-translate-y-1">
                  Send Message
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Or Contact Directly via</p>
                <div className="flex gap-4">
                  <a href="https://wa.me/910000000000" className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl flex items-center justify-center space-x-2 font-bold shadow-lg shadow-green-100 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="tel:+910000000000" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl flex items-center justify-center space-x-2 font-bold shadow-lg shadow-blue-100 transition-all">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-slate-200 grayscale contrast-[0.8] hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.842851167905!2d78.47466185!3d17.43382755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a244463eef3%3A0xe21262d1d0f5e18!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1715434152000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
