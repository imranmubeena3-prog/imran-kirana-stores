/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ServicesPage } from './pages/ServicesPage';
import { KiranaPage } from './pages/KiranaPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage, FAQPage, PrivacyPolicy } from './pages/OtherPages';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageState } from './constants/translations';

export default function App() {
  const [lang, setLang] = useState<LanguageState>('en');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/services" element={<ServicesPage lang={lang} />} />
          <Route path="/kirana" element={<KiranaPage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route path="/faq" element={<FAQPage lang={lang} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
