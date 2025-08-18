import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from 'react';
import { Language, translations } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AppShowcase } from '@/components/AppShowcase';
import { About } from '@/components/About';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

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
      <Route path="/about">
        {() => <div>关于我们页面</div>}
      </Route>
      <Route path="/team">
        {() => <div>团队页面</div>}
      </Route>
      <Route path="/terms">
        {() => <div>条款页面</div>}
      </Route>
      <Route path="/privacy">
        {() => <div>隐私页面</div>}
      </Route>
      <Route path="/product">
        {() => <div>产品页面</div>}
      </Route>
      <Route path="/contact">
        {() => <div>联系我们页面</div>}
      </Route>
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

