import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bell, Zap, Shield, AlertTriangle, Clock, RefreshCw, MessageSquare } from "lucide-react";

export default function NotificationSection() {
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

    const element = document.getElementById('notification-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="notification-section" className="py-24 gradient-section relative">
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--zubo-orange-light)] rounded-full text-[var(--zubo-orange)] font-medium text-sm">
                <Bell className="w-4 h-4" />
                智能提醒
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                智能续订{' '}
                <span className="text-[var(--zubo-primary)]">通知</span>
              </h2>
              
              <p className="text-xl text-[var(--zubo-gray-700)] leading-relaxed">
                永远不会错过任何续费！智能通知系统提前提醒您即将到期的订阅，让您有充足时间做出决策。
              </p>
            </div>

            <div className="space-y-4">
              {[
                { 
                  icon: Clock,
                  title: "提前通知提醒", 
                  description: "可自定义的续费前提醒时间设置",
                  color: "var(--zubo-orange)"
                },
                { 
                  icon: RefreshCw,
                  title: "多次通知提醒", 
                  description: "允许设置多次通知提醒，确保不会错过",
                  color: "var(--zubo-blue)"
                },
                { 
                  icon: MessageSquare,
                  title: "智能建议推送", 
                  description: "基于使用情况的个性化订阅建议",
                  color: "var(--zubo-green)"
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
                    <span className="text-white font-bold">通知</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    在这里添加通知界面截图<br/>
                    (从assets文件夹)
                  </p>
                </div>
              </div>
              
              {/* Floating decorations */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--zubo-orange)] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-[var(--zubo-red)] rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 