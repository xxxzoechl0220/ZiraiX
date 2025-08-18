import { useState } from 'react';
import React from 'react';
import { Language, translations } from '../lib/i18n';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AppShowcase } from '../components/AppShowcase';
import { About } from '../components/About';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<Language>('zh-CN');

  const translation = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage} 
        translation={translation}
      />
      <Hero translation={translation} />
      <AppShowcase translation={translation} />
      <About translation={translation} />
      <Newsletter />
      <Footer translation={translation} />
    </div>
  );
}
