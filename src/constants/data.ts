import { 
  CreditCard, 
  UserCheck, 
  FileText, 
  Plane, 
  Train, 
  Bus, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Printer, 
  Camera, 
  Search, 
  Briefcase, 
  Lock, 
  HelpCircle,
  ShoppingBag,
  Milk,
  Apple,
  Droplets,
  Package,
  Coffee
} from 'lucide-react';

export const services = [
  { id: 'aadhaar', name: 'Aadhaar Services', icon: UserCheck, desc: 'New registration, address updates, and photo changes.' },
  { id: 'pancard', name: 'PAN Card Services', icon: CreditCard, desc: 'New PAN application, corrections, and re-printing.' },
  { id: 'voterid', name: 'Voter ID Services', icon: FileText, desc: 'New ID registration, corrections, and card printing.' },
  { id: 'meeseva', name: 'MeeSeva Services', icon: Briefcase, desc: 'All government certificates (Income, Caste, Birth, Death).' },
  { id: 'tickets', name: 'Ticket Booking', icon: Plane, desc: 'Railway, Flight, and Bus ticket bookings at best rates.' },
  { id: 'bills', name: 'Bill Payments', icon: Zap, desc: 'Electricity, Water, Gas, and FASTag recharge services.' },
  { id: 'recharge', name: 'Mobile Recharge', icon: Smartphone, desc: 'All network recharges and DTH subscription plans.' },
  { id: 'banking', name: 'Banking Services', icon: ShieldCheck, desc: 'Cash withdrawal, deposits, and mini statements (Mini ATM).' },
  { id: 'xerox', name: 'Xerox & Printing', icon: Printer, desc: 'High-quality Xerox, printing, and document lamination.' },
  { id: 'passport', name: 'Passport Photos', icon: Camera, desc: 'Instant professional passport size photos within minutes.' },
  { id: 'forms', name: 'Online Form Filling', icon: Search, desc: 'Job applications, exam registrations, and scholarships.' },
  { id: 'insurance', name: 'Insurance Payments', icon: Lock, desc: 'Life, health, and vehicle insurance premium payments.' },
];

export const kiranaCategories = [
  { id: 'grocery', name: 'Groceries', icon: ShoppingBag, items: ['Rice', 'Dal', 'Sugar', 'Salt'], image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400' },
  { id: 'oil', name: 'Oils & Ghee', icon: Droplets, items: ['Sunflower Oil', 'Groundnut Oil', 'Ghee'], image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400' },
  { id: 'dairy', name: 'Dairy Products', icon: Milk, items: ['Milk', 'Curd', 'Paneer', 'Butter'], image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400' },
  { id: 'snacks', name: 'Snacks & Drinks', icon: Coffee, items: ['Biscuits', 'Chips', 'Soft Drinks'], image: 'https://images.unsplash.com/photo-1599490659223-930b44c00b3f?auto=format&fit=crop&q=80&w=400' },
  { id: 'household', name: 'Home Needs', icon: Package, items: ['Soaps', 'Detergents', 'Cleaning Tools'], image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
  { id: 'veggies', name: 'Vegetables', icon: Apple, items: ['Onions', 'Potatoes', 'Tomatoes'], image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c12e8c?auto=format&fit=crop&q=80&w=400' },
];

export const testimonials = [
  { name: 'Ravi Kumar', text: 'Very fast Aadhaar service and good grocery prices. Highly recommended for students.', location: 'Local Area', rating: 5 },
  { name: 'S Lakshmi', text: 'Imran Bhai is very helpful. He helped me get my Ration Card and Income Certificate easily.', location: 'Nearby Village', rating: 5 },
  { name: 'Mohammed Ali', text: 'Best place for ticket booking and monthly groceries. They also have home delivery!', location: 'Main Town', rating: 4 },
];

export const faqs = [
  { q: 'What online services are available?', a: 'We provide Aadhaar, PAN, Voter ID, MeeSeva certificates, Passport assistance, and all government scheme registrations.' },
  { q: 'Do you provide railway ticket booking?', a: 'Yes, we provide IRCTC railway ticket booking, flight tickets, and bus ticket booking (RedBus/APSRTC).' },
  { q: 'Do you accept UPI payments?', a: 'Yes, we accept all major UPI apps like PhonePe, Google Pay, and Paytm, along with cash.' },
  { q: 'Is home delivery available for Kirana items?', a: 'Yes, we provide free home delivery for grocery orders above ₹500 within 3km of the shop.' },
  { q: 'What are your shop timings?', a: 'We are open from 8:00 AM to 9:30 PM, all days of the week.' },
];
