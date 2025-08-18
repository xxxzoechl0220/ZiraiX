import React from 'react';
import { Card, CardContent } from './ui/card';
import { Lightbulb, Users, Rocket } from 'lucide-react';
import { Translation } from '../lib/i18n';

interface AboutProps {
  translation: Translation;
}

export function About({ translation }: AboutProps) {
  const features = [
    {
      icon: Lightbulb,
      title: translation.about.features.innovation.title,
      description: translation.about.features.innovation.description,
      gradient: 'from-primary/10 to-primary/5',
      iconColor: 'text-primary',
    },
    {
      icon: Users,
      title: translation.about.features.userFirst.title,
      description: translation.about.features.userFirst.description,
      gradient: 'from-secondary/10 to-secondary/5',
      iconColor: 'text-secondary',
    },
    {
      icon: Rocket,
      title: translation.about.features.fastIteration.title,
      description: translation.about.features.fastIteration.description,
      gradient: 'from-accent/10 to-accent/5',
      iconColor: 'text-accent',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-nunito font-black text-4xl lg:text-5xl text-gray-900">
                {translation.about.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {translation.about.description}
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-nunito font-bold text-xl text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-nunito font-bold text-purple-900">创新</h4>
                    <p className="text-sm text-purple-700">不断探索新技术</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 transform -rotate-2 hover:-rotate-4 transition-transform duration-300 mt-8">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-nunito font-bold text-blue-900">用户至上</h4>
                    <p className="text-sm text-blue-700">以用户需求为核心</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 transform rotate-1 hover:rotate-3 transition-transform duration-300 -mt-4">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-nunito font-bold text-green-900">快速迭代</h4>
                    <p className="text-sm text-green-700">敏捷开发理念</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 transform -rotate-1 hover:-rotate-2 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl mx-auto flex items-center justify-center">
                      <span className="text-white font-bold">品质</span>
                    </div>
                    <h4 className="font-nunito font-bold text-orange-900">高品质</h4>
                    <p className="text-sm text-orange-700">追求极致体验</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
