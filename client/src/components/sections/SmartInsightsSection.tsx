import React from 'react';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TrendingUp, PieChart, Target, BarChart3, Calculator, Lightbulb } from "lucide-react";

export default function SmartInsightsSection() {
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

    const element = document.getElementById('insights-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="insights-section" className="py-24 gradient-section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Side - 左侧 */}
          <motion.div 
            className="space-y-8 order-1 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--zubo-purple-light)] rounded-full text-[var(--zubo-primary)] font-medium text-sm">
                <BarChart3 className="w-4 h-4" />
                深度分析
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                高级订阅分析{' '}
                <span className="text-[var(--zubo-primary)]">和支出洞察</span>
              </h2>
              
              <p className="text-xl text-[var(--zubo-gray-700)] leading-relaxed">
                通过强大的数据分析引擎，深入了解您的订阅支出模式，获得专业级的财务洞察和优化建议。
              </p>
            </div>

            <div className="space-y-4">
              {[
                { 
                  icon: Calculator,
                  title: "双计算模式支持", 
                  description: "实际支付模式和平均分摊模式，灵活计算订阅成本",
                  color: "var(--zubo-blue)"
                },
                { 
                  icon: TrendingUp,
                  title: "支出趋势分析", 
                  description: "可视化您的订阅支出趋势和变化模式",
                  color: "var(--zubo-green)"
                },
                { 
                  icon: Lightbulb,
                  title: "成本优化建议", 
                  description: "基于AI的个性化节省建议和方案",
                  color: "var(--zubo-orange)"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-[var(--zubo-gray-700)]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side - 占位图片 右侧 */}
          <motion.div 
            className="relative order-2 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="w-80 h-[500px] bg-gray-200 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">分析</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    在这里添加分析洞察截图<br/>
                    (从assets文件夹)
                  </p>
                </div>
              </div>
              
              {/* Floating decorations */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--zubo-primary)] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-[var(--zubo-blue)] rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}