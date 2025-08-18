import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Card, CardContent } from './ui/card';
import React from 'react';
import { Button } from './ui/button';
import { 
  CreditCard, 
  Tv, 
  Dumbbell, 
  Briefcase, 
  Clock, 
  TrendingUp,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Translation } from '../lib/i18n';
import { SiApple, SiAndroid } from 'react-icons/si';
import { Link } from 'wouter';

interface AppShowcaseProps {
  translation: Translation;
}

export function AppShowcase({ translation }: AppShowcaseProps) {
  const apps = [
    // 注意：subscription应用的图标当前使用占位图片，稍后将从assets文件夹添加真实图标
    {
      id: 'subscription',
      name: translation.apps.list.subscription.name,
      description: translation.apps.list.subscription.description,
      icon: CreditCard,
      gradient: 'from-purple-500 to-purple-400',
      status: translation.apps.status.launching,
      statusColor: 'bg-accent',
      progress: 95,
      progressColor: 'from-accent to-accent/80',
      platforms: {
        ios: translation.apps.platforms.ios,
        android: translation.apps.platforms.comingSoon,
      },
      clickable: true,
      href: '/product'
    },
    {
      id: 'showTracker',
      name: translation.apps.list.showTracker.name,
      description: translation.apps.list.showTracker.description,
      icon: Tv,
      gradient: 'from-yellow-500 to-yellow-400',
      status: translation.apps.status.development,
      statusColor: 'bg-orange-500',
      progress: 10,
      progressColor: 'from-gray-400 to-gray-300',
      platforms: {
        ios: translation.apps.platforms.planned,
        android: translation.apps.platforms.planned,
      },
      clickable: false,
      href: '#'
    },
    {
      id: 'fitness',
      name: translation.apps.list.fitness.name,
      description: translation.apps.list.fitness.description,
      icon: Dumbbell,
      gradient: 'from-blue-500 to-blue-400',
      status: translation.apps.status.planned,
      statusColor: 'bg-gray-400',
      progress: 0,
      progressColor: 'from-gray-400 to-gray-300',
      platforms: {
        ios: translation.apps.platforms.future,
        android: translation.apps.platforms.future,
      },
      clickable: false,
      href: '#'
    },
    {
      id: 'sideBusiness',
      name: translation.apps.list.sideBusiness.name,
      description: translation.apps.list.sideBusiness.description,
      icon: Briefcase,
      gradient: 'from-orange-500 to-orange-400',
      status: translation.apps.status.planned,
      statusColor: 'bg-gray-400',
      progress: 0,
      progressColor: 'from-gray-400 to-gray-300',
      platforms: {
        ios: translation.apps.platforms.future,
        android: translation.apps.platforms.future,
      },
      clickable: false,
      href: '#'
    },
    {
      id: 'timeGoal',
      name: translation.apps.list.timeGoal.name,
      description: translation.apps.list.timeGoal.description,
      icon: Clock,
      gradient: 'from-pink-500 to-pink-400',
      status: translation.apps.status.planned,
      statusColor: 'bg-gray-400',
      progress: 0,
      progressColor: 'from-gray-400 to-gray-300',
      platforms: {
        ios: translation.apps.platforms.future,
        android: translation.apps.platforms.future,
      },
      clickable: false,
      href: '#'
    },
    {
      id: 'asset',
      name: translation.apps.list.asset.name,
      description: translation.apps.list.asset.description,
      icon: TrendingUp,
      gradient: 'from-green-500 to-green-400',
      status: translation.apps.status.planned,
      statusColor: 'bg-gray-400',
      progress: 0,
      progressColor: 'from-gray-400 to-gray-300',
      platforms: {
        ios: translation.apps.platforms.future,
        android: translation.apps.platforms.future,
      },
      clickable: false,
      href: '#'
    },
  ];

  return (
    <section id="apps" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-yellow-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-black text-4xl lg:text-5xl text-gray-900 mb-4">
            {translation.apps.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translation.apps.description}
          </p>
        </div>

                {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => {
            const IconComponent = app.icon;
            
            const CardElement = (
              <Card 
                className={`group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl overflow-hidden h-full ${app.clickable ? 'cursor-pointer hover:scale-105' : ''}`}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 flex items-center justify-center">
                      {app.id === 'subscription' ? (
                        <img 
                          src="/assets/Zubo_icon.png" 
                          alt="Zubo Icon" 
                          className="w-16 h-16 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className={`w-16 h-16 bg-gradient-to-r ${app.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white/90" />
                        </div>
                      )}
                    </div>
                    <Badge 
                      className={`${app.statusColor} text-white border-0 px-3 py-1 rounded-full flex items-center space-x-1`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold">{app.status}</span>
                    </Badge>
                  </div>
                  
                  <h3 className="font-nunito font-bold text-2xl text-gray-900 mb-3 min-h-[3rem] flex items-center">{app.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{app.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{translation.apps.progress}</span>
                      <span className="text-sm font-bold text-gray-700">
                        {app.progress >= 50 ? `${app.progress}%` : translation.apps.status.planned}
                      </span>
                    </div>
                    <Progress 
                      value={app.progress} 
                      className="h-3 bg-gray-200 rounded-full overflow-hidden"
                    />
                  </div>

                  {/* Platform badges and View Details Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm ${
                        app.platforms.ios === translation.apps.platforms.ios 
                          ? 'bg-gray-900 text-white' 
                          : 'text-gray-400 border border-gray-200'
                      }`}>
                        <SiApple className="h-4 w-4" />
                        <span>{app.platforms.ios}</span>
                      </div>
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm ${
                        app.platforms.android === translation.apps.platforms.android 
                          ? 'bg-green-500 text-white' 
                          : 'text-gray-400 border border-gray-200'
                      }`}>
                        <SiAndroid className="h-4 w-4" />
                        <span>{app.platforms.android}</span>
                      </div>
                    </div>
                    
                    {app.clickable && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-dark flex items-center space-x-1 ml-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">查看</span>
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
            
            return app.clickable ? (
              <Link key={app.id} to={app.href}>
                {CardElement}
              </Link>
            ) : (
              <div key={app.id}>
                {CardElement}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
