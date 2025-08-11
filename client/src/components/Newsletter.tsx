import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "请输入邮箱地址",
        description: "邮箱地址不能为空",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    toast({
      title: "订阅成功！",
      description: "感谢您的订阅，我们会定期发送最新动态到您的邮箱",
    });

    setEmail('');
  };

    return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-nunito font-black text-2xl lg:text-3xl text-white mb-4">
              关注我们的最新动态
            </h2>
            
            <p className="text-lg text-gray-300 max-w-xl">
              获取关于产品更新、技术趋势的第一手咨询，掌握每一次创新动态
            </p>
          </div>

          <div className="flex-1 max-w-lg">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入您的邮箱地址"
                className="flex-1 h-11 rounded-lg border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <Button 
                type="submit"
                className="h-11 px-6 bg-gradient-primary text-white rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                订阅
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 