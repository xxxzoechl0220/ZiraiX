import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Language, translations } from '../lib/i18n';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { Mail, Clock, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [language, setLanguage] = useState<Language>('zh-CN');
  const translation = translations[language];
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "请填写必填字段",
        description: "姓名、邮箱和消息内容为必填项",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "消息发送成功！",
      description: "我们会在24小时内回复您",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage} 
        translation={translation} 
      />
      
      <main className="pt-20 pb-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-nunito font-black text-4xl lg:text-5xl text-gray-900 mb-4">
                {translation.contact.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {translation.contact.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3 space-y-8">
                <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-nunito font-bold text-2xl text-gray-900 mb-6">{translation.contact.form.title}</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                            {translation.contact.form.name}
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder={translation.contact.form.placeholders.name}
                            className="rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            {translation.contact.form.email}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder={translation.contact.form.placeholders.email}
                            className="rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          {translation.contact.form.subject}
                        </Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business">{translation.contact.form.subjects.business}</SelectItem>
                            <SelectItem value="support">{translation.contact.form.subjects.support}</SelectItem>
                            <SelectItem value="suggestion">{translation.contact.form.subjects.suggestion}</SelectItem>
                            <SelectItem value="other">{translation.contact.form.subjects.other}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          {translation.contact.form.message}
                        </Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder={translation.contact.form.placeholders.message}
                          className="rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 h-auto"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        {translation.contact.form.submit}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-nunito font-bold text-xl text-gray-900">{translation.contact.info.email.title}</h3>
                        <p className="text-gray-600">zoecong@ziraix.com</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{translation.contact.info.email.subtitle}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-nunito font-bold text-xl text-gray-900">{translation.contact.info.hours.title}</h3>
                        <p className="text-gray-600">{translation.contact.info.hours.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{translation.contact.info.hours.timezone}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-nunito font-bold text-xl text-gray-900">办公地址</h3>
                        <p className="text-gray-600">中国（远程工作）</p>
                      </div>
                    </div>
                    <p className="text-gray-600">我们采用远程工作模式，为全球客户提供服务</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer translation={translation} />
    </div>
  );
} 