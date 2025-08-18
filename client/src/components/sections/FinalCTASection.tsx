import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, ArrowRight, Smartphone, Star } from "lucide-react";

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('cta-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-white/20 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-8"
          >
            <Star className="w-4 h-4" />
            加入数千名明智的储蓄者
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            准备好掌控一切了吗？
          </motion.h2>
          
          <motion.p 
            className="text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            立即下载Zubo，开始节省您的订阅费用。免费下载，无广告，专为iOS设计。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a 
              href="#"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-16"
              />
            </a>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 h-16 px-10 rounded-2xl text-xl font-bold transition-all duration-300 group flex items-center justify-center gap-3"
            >
              了解更多
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">免费</div>
              <div className="text-sm opacity-80">无订阅费用</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">安全</div>
              <div className="text-sm opacity-80">银行级加密</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">仅iOS</div>
              <div className="text-sm opacity-80">专为iPhone和iPad打造</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}