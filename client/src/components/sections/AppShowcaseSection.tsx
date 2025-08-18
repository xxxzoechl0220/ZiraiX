import React from 'react';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AppShowcaseSection() {
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

    const element = document.getElementById('showcase-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="showcase-section"
      className="py-32 relative bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="italic text-gray-600">Learn smarter, every day.</span>
            <br />
            <span className="text-gray-900">Capture words, review cards, and build your language—effortlessly.</span>
          </h2>
        </motion.div>

        {/* Phone Carousel Section */}
        <motion.div 
          className="relative h-[500px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Phone Frame */}
          <div className="relative z-10">
            <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-1 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                {/* Dynamic Island */}
                <div className="w-24 h-6 bg-black rounded-full mx-auto mt-2 mb-4"></div>
                
                {/* Placeholder Content */}
                <div className="px-4 space-y-4">
                  <div className="bg-gray-200 h-20 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500 text-sm">应用截图占位</span>
                  </div>
                  <div className="bg-gray-200 h-16 rounded-xl"></div>
                  <div className="bg-gray-200 h-24 rounded-xl"></div>
                  <div className="bg-gray-200 h-20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Phones for Carousel Effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            {/* Left Phone */}
            <div className="absolute -left-40 top-8 w-56 h-[450px] bg-gray-800 rounded-[2rem] p-1 opacity-30 rotate-[-12deg] shadow-xl">
              <div className="w-full h-full bg-gray-300 rounded-[1.5rem]"></div>
            </div>
            
            {/* Right Phone */}
            <div className="absolute -right-40 top-8 w-56 h-[450px] bg-gray-800 rounded-[2rem] p-1 opacity-30 rotate-[12deg] shadow-xl">
              <div className="w-full h-full bg-gray-300 rounded-[1.5rem]"></div>
            </div>
            
            {/* Far Left Phone */}
            <div className="absolute -left-72 top-16 w-48 h-[400px] bg-gray-700 rounded-[2rem] p-1 opacity-15 rotate-[-20deg] shadow-lg">
              <div className="w-full h-full bg-gray-400 rounded-[1.5rem]"></div>
            </div>
            
            {/* Far Right Phone */}
            <div className="absolute -right-72 top-16 w-48 h-[400px] bg-gray-700 rounded-[2rem] p-1 opacity-15 rotate-[20deg] shadow-lg">
              <div className="w-full h-full bg-gray-400 rounded-[1.5rem]"></div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 left-10 w-8 h-8 bg-blue-500 rounded-full opacity-60"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-6 h-6 bg-purple-500 rounded-full opacity-40"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-20 w-4 h-4 bg-green-500 rounded-full opacity-50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Bottom Text */}
        <motion.p 
          className="text-center text-gray-600 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          在这里可以添加真实的应用截图来替换占位内容，展示您的订阅管理应用的精美界面。
        </motion.p>
      </div>
    </section>
  );
}