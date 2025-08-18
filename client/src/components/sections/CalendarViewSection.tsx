import React from 'react';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, Clock, Eye, Grid3X3 } from "lucide-react";

export default function CalendarViewSection() {
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

    const element = document.getElementById('calendar-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="calendar-section" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* 占位图片 - 左侧 */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative max-w-sm mx-auto">
              <div className="w-80 h-[600px] bg-gray-200 rounded-[2.5rem] shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">日历</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    在这里添加日历视图截图<br/>
                    (从assets文件夹)
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--zubo-green)] rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[var(--zubo-purple)] rounded-full opacity-60 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Content - 右侧 */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--zubo-green-light)] rounded-full text-[var(--zubo-green)] font-medium text-sm">
                <Calendar className="w-4 h-4" />
                智能日历
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                所有订阅的{' '}
                <span className="text-[var(--zubo-primary)]">智能日历视图</span>
              </h2>
              
              <p className="text-xl text-[var(--zubo-gray-700)] leading-relaxed">
                直观的日历界面让您一目了然地查看所有订阅的续费时间，提前规划和管理您的财务支出。
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Grid3X3, text: "支持切换月视图、周视图、时间轴3种视图", color: "var(--zubo-green)" },
                { icon: Clock, text: "精确的续费时间提醒", color: "var(--zubo-blue)" },
                { icon: Eye, text: "订阅状态一览无余", color: "var(--zubo-orange)" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="text-[var(--zubo-gray-700)] font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 