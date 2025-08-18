import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SubscriptionPage } from '../components/SubscriptionPage';
import { Language, translations } from '../lib/i18n';

export default function ProductPage() {
  const [language, setLanguage] = useState<Language>('zh-CN');
  const translation = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage} 
        translation={translation} 
      />
      
      {/* Zubo订阅管理助手Landing Page */}
      <main className="pt-24">
        <SubscriptionPage />
      </main>
      
      <Footer translation={translation} />
    </div>
  );
} 