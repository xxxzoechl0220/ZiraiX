import React, { useState } from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Language, translations } from './lib/i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppShowcase } from './components/AppShowcase';
import { About } from './components/About';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import AboutPage from './pages/About';
import TeamPage from './pages/Team';
import TermsPage from './pages/Terms';
import PrivacyPage from './pages/Privacy';
import ProductPage from './pages/Product';
import ContactPage from './pages/Contact';

// 内联 Home 组件
function Home() {
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/contact" component={ContactPage} />
      <Route>
        {() => {
          window.location.href = "/";
          return null;
        }}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
