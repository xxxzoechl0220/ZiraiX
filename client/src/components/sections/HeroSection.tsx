import { motion } from "framer-motion";
import { Download, ArrowRight, DollarSign, Shield, Users, Star, Play, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToShowcase = () => {
    const element = document.getElementById('showcase-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: <Calendar className="w-5 h-5" />, text: "智能订阅管理", highlight: true },
    { icon: <Shield className="w-5 h-5" />, text: "数据安全保护" },
    { icon: <Star className="w-5 h-5" />, text: "即将震撼上线" }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-30"></div>
      
      {/* Organic floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--zubo-blue)] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[var(--zubo-orange)] rounded-full animate-bounce opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[var(--zubo-green)] rounded-full opacity-30 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-[var(--zubo-purple-light)] rounded-full text-[var(--zubo-purple-dark)] font-medium text-sm"
              >
                📱 全新订阅管理体验
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-7xl font-black leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                管理订阅从未如此{' '}
                <span className="text-[var(--zubo-primary)] relative">
                  简单
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C100 2 200 2 298 10" stroke="var(--zubo-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                </span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-xl text-[var(--zubo-gray-700)] leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Zubo 帮你轻松管理所有订阅服务，智能提醒续费时间，深度分析支出结构，让你的数字生活更加有序高效。
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button className="group bg-[#8E58FF] hover:bg-[#7A4FE6] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                立即开始免费试用
              </button>
              <button 
                onClick={scrollToShowcase}
                className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-[#8E58FF] transition-all duration-300 flex items-center justify-center"
              >
                观看演示
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-center gap-2 ${benefit.highlight ? 'bg-green-50 px-3 py-1 rounded-full' : ''}`}>
                  <div className={`p-1 rounded-full ${benefit.highlight ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    {benefit.icon}
                  </div>
                  <span className={`text-sm font-medium ${benefit.highlight ? 'text-green-700' : 'text-gray-600'}`}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative flex justify-end lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative max-w-sm ml-auto lg:ml-16">
              {/* 占位图片 */}
              <div className="w-80 h-[650px] bg-gray-200 rounded-[3rem] shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">APP</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    在这里添加应用截图<br/>
                    (从assets文件夹)
                  </p>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--zubo-primary)] via-transparent to-[var(--zubo-blue)] opacity-20 rounded-[3rem] blur-xl -z-10 scale-105"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}