import { useState } from 'react';
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { SiX, SiInstagram, SiDiscord, SiReddit } from 'react-icons/si';
import { Translation } from '../lib/i18n';

interface ContactProps {
  translation: Translation;
}

export function Contact({ translation }: ContactProps) {
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
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    { 
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.32 4.13c-.8.35-1.67.59-2.58.69.93-.56 1.64-1.44 1.97-2.49-.87.52-1.83.9-2.85 1.1-.82-.87-1.99-1.42-3.28-1.42-2.48 0-4.49 2.01-4.49 4.49 0 .35.04.69.11 1.02-3.73-.19-7.04-1.97-9.26-4.69-.39.67-.61 1.44-.61 2.27 0 1.56.79 2.93 2 3.74-.74-.02-1.43-.23-2.03-.57v.06c0 2.17 1.55 3.98 3.6 4.4-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.57 1.78 2.24 3.07 4.21 3.11-1.54 1.21-3.48 1.93-5.58 1.93-.36 0-.72-.02-1.07-.06 1.99 1.28 4.35 2.02 6.88 2.02 8.26 0 12.77-6.84 12.77-12.77 0-.19 0-.39-.01-.58.88-.63 1.64-1.42 2.24-2.32z"/>
        </svg>
      ), 
      color: 'bg-red-600 hover:bg-red-700', 
      href: '#', 
      name: 'Weibo' 
    },
    { 
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      color: 'bg-red-500 hover:bg-red-600', 
      href: '#', 
      name: 'Xiaohongshu' 
    },
    { icon: SiX, color: 'bg-black hover:bg-gray-800', href: '#', name: 'X' },
    { icon: SiInstagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600', href: '#', name: 'Instagram' },
    { 
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 16.025 1.5 13.5 1.5 5.387 6.615 0 12.5 0S23.5 5.387 23.5 13.5c0 2.525-.85 4.94-2.495 7.001-1.85 2.304-4.603 3.485-8.184 3.509h-.635zM12.5 2C7.719 2 3.5 6.488 3.5 13.5c0 2.106.666 4.119 1.955 5.897 1.436 1.976 3.577 2.96 6.531 2.985.013.001.025.001.037.001.013 0 .025 0 .037-.001 2.954-.025 5.095-1.009 6.531-2.985C19.834 17.619 21.5 15.606 21.5 13.5 21.5 6.488 17.281 2 12.5 2z"/>
        </svg>
      ), 
      color: 'bg-blue-600 hover:bg-blue-700', 
      href: '#', 
      name: 'Threads' 
    },
    { icon: SiReddit, color: 'bg-orange-500 hover:bg-orange-600', href: '#', name: 'Reddit' },
    { icon: SiDiscord, color: 'bg-indigo-500 hover:bg-indigo-600', href: '#', name: 'Discord' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-black text-4xl lg:text-5xl text-gray-900 mb-4">
            {translation.contact.title}
          </h2>
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
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-xl text-gray-900">{translation.contact.info.social.title}</h3>
                    <p className="text-gray-600">{translation.contact.info.social.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-200 ${social.color}`}
                        title={social.name}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  );
}
