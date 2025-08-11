import { Button } from '@/components/ui/button';
import { Rocket, Info, CreditCard, Tv, Dumbbell, Clock, TrendingUp, Briefcase, CheckCircle, Code, Lightbulb, TimerIcon } from 'lucide-react';
import { Translation } from '@/lib/i18n';

interface HeroProps {
  translation: Translation;
}

export function Hero({ translation }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-purple-50 via-yellow-50 to-teal-50 overflow-hidden"
    >
      {/* 背景特效 */}
      <div className="absolute inset-0 bg-gradient-sparkful opacity-20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animation-float"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-accent rounded-full opacity-25 animation-float-delayed"></div>
    
      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="flex flex-col justify-between w-full max-h-[800px] h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">{translation.hero.badge}</span>
                </div>
                <h1 className="font-nunito font-black text-5xl lg:text-6xl text-gray-900 leading-tight">
                  {translation.hero.title}
                  <span className="text-gradient-fun block bg-clip-text text-transparent">
                    {translation.hero.subtitle}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {translation.hero.description}
                </p>
              </div>
    
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('apps')}
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 h-auto"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  {translation.hero.exploreApps}
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')}
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold border-gray-200 hover:bg-white hover:shadow-md transition-all duration-200 h-auto"
                >
                  <Info className="h-5 w-5 mr-2" />
                  {translation.hero.learnMore}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="font-nunito font-bold text-3xl text-green-900">1</div>
                  <div className="text-sm text-gray-600 mt-2">即将上线App</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <TimerIcon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="font-nunito font-bold text-3xl text-blue-900">1</div>
                  <div className="text-sm text-gray-600 mt-2">开发中App</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="font-nunito font-bold text-3xl text-purple-900">4</div>
                  <div className="text-sm text-gray-600 mt-2">规划中App</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Floating phone mockups showing app interfaces */}
              <div className="relative w-full h-96 lg:h-[500px] pt-16">
                {/* Main phone mockup in center - moved down and adjusted position */}
                <div className="absolute top-8 left-1/3 transform -translate-x-1/2 w-64 h-80 bg-white rounded-3xl shadow-2xl border-8 border-gray-200 overflow-hidden animation-bounce-soft">
                  <div className="bg-gradient-primary h-full p-6 text-white">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                        <CreditCard className="h-8 w-8" />
                      </div>
                      <h3 className="font-bold text-lg font-nunito">{translation.apps.list.subscription.name}</h3>
                      <div className="space-y-2">
                        <div className="bg-white/20 rounded-lg p-3 text-left">
                          <div className="text-sm opacity-90">Netflix</div>
                          <div className="font-semibold">¥30/月</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 text-left">
                          <div className="text-sm opacity-90">Spotify</div>
                          <div className="font-semibold">¥15/月</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements - further spread out to avoid overlap */}
                <div className="absolute top-2 right-12 w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center animation-pulse-soft">
                  <Tv className="h-6 w-6 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center animation-float">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-12 right-16 w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center animation-float-delayed">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="absolute bottom-1/2 right-2 w-14 h-14 bg-green-400 rounded-xl flex items-center justify-center animation-pulse-soft">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="absolute top-4/5 left-16 w-10 h-10 bg-orange-400 rounded-xl flex items-center justify-center animation-float">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
