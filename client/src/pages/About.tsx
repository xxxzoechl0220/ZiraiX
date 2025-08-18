import { useState } from 'react';
import { Language, translations } from '../lib/i18n';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Lightbulb, Users, Rocket, Target, Code, Heart, Award, Globe, Zap, Shield, Sparkles, Coffee, ArrowRight, Star, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>('zh-CN');
  const translation = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage} 
        translation={translation}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-yellow-50 to-teal-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 mb-8 shadow-lg">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              关于我们的故事
            </div>
            <h1 className="font-nunito font-black text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              {translation.about.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {translation.about.description}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-4">我们的使命</h3>
                <p className="text-gray-600">创造有趣而实用的应用，让每个人的生活变得更美好、更有效率。</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-4">我们的方法</h3>
                <p className="text-gray-600">以用户为中心，快速迭代，将复杂的功能转化为简单直观的体验。</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-4">我们的价值观</h3>
                <p className="text-gray-600">用心做产品，诚信对用户，持续学习进步，追求卓越品质。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  我们的成长历程
                </div>
                <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gray-900 mb-6">
                  我们的故事
                </h2>
              </div>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    ZiraiX 诞生于对技术改变生活的坚定信念。我们相信，优秀的应用不仅仅是代码的集合，
                    更是连接人与技术、梦想与现实的桥梁。
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    从第一行代码开始，我们就致力于创造真正有价值的产品。每一个功能的设计，
                    每一次用户体验的优化，都承载着我们对用户生活品质提升的期望。
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    我们不追求华而不实的功能，而是专注于解决用户真正的痛点。
                    通过深入了解用户需求，我们将复杂的技术转化为简单直观的体验。
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">2024.04</span>
                    </div>
                    <h3 className="font-nunito font-bold text-lg text-gray-900 mb-2">公司成立</h3>
                    <p className="text-gray-600 leading-relaxed">创立上海星迈电子商务有限公司（ZiraiX），开始我们的创业之旅，致力于打造有趣实用的数字产品。</p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">2025.08</span>
                    </div>
                    <h3 className="font-nunito font-bold text-lg text-gray-900 mb-2">首款产品上线</h3>
                    <p className="text-gray-600 leading-relaxed">推出首款APP「Zubo」- 智能订阅管理助手，帮助用户轻松管理各种订阅服务，避免不必要的支出，让数字生活更有序。</p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">2025.09</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">开发中</span>
                    </div>
                    <h3 className="font-nunito font-bold text-lg text-gray-900 mb-2">追剧进度管家</h3>
                    <p className="text-gray-600 leading-relaxed">即将推出的影视追踪应用，帮助用户记录观看进度、发现新剧集、与朋友分享观影体验，让追剧变得更有趣更有条理。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-800 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              核心价值观
            </div>
            <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gray-900 mb-4">
              我们的核心价值
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              这些价值观指引着我们的每一个决策，塑造着我们的产品和文化
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-4 text-gray-900">创新驱动</h3>
                <p className="text-gray-600 leading-relaxed">持续探索新技术，用创新思维解决用户问题，让每一个产品都具有独特价值。</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-4 text-gray-900">用户至上</h3>
                <p className="text-gray-600 leading-relaxed">以用户需求为核心，保护用户隐私，提供安全可靠的产品体验。</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-4 text-gray-900">品质追求</h3>
                <p className="text-gray-600 leading-relaxed">精益求精，注重每一个细节，确保产品的稳定性和优秀的用户体验。</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-4 text-gray-900">团队协作</h3>
                <p className="text-gray-600 leading-relaxed">相互尊重，开放沟通，共同成长，打造充满活力的创新团队。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-8 shadow-lg">
              <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
              未来愿景
            </div>
            <h2 className="font-nunito font-black text-3xl lg:text-4xl text-gray-900 mb-6">
              展望未来
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              我们正在构建一个更加智能、便捷、有趣的数字世界。通过人工智能、机器学习等前沿技术，
              我们将继续推出更多创新产品，让技术真正服务于人类的美好生活。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-3 text-gray-900">AI 驱动</h3>
                <p className="text-gray-600 leading-relaxed">集成人工智能，提供更智能的用户体验</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-3 text-gray-900">全球化</h3>
                <p className="text-gray-600 leading-relaxed">服务全球用户，打造国际化产品</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-xl mb-3 text-gray-900">社会责任</h3>
                <p className="text-gray-600 leading-relaxed">用技术创造社会价值，让世界更美好</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer translation={translation} />
    </div>
  );
}