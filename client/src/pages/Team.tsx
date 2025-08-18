import { useState } from 'react';
import { Language, translations } from '../lib/i18n';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function TeamPage() {
  const [language, setLanguage] = useState<Language>('zh-CN');
  const translation = translations[language];

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: '创始人 & 全栈开发',
      bio: '5年独立开发经验，专注于移动应用和用户体验设计',
      avatar: '👨‍💻',
      skills: ['React Native', 'Node.js', 'UI/UX'],
      social: {
        github: '#',
        twitter: '#',
        linkedin: '#',
        email: 'alex@ziraix.com'
      }
    },
    {
      name: 'Sarah Liu',
      role: '产品设计师',
      bio: '前大厂设计师，擅长将复杂功能转化为简洁易用的界面',
      avatar: '👩‍🎨',
      skills: ['Figma', 'Sketch', 'Prototyping'],
      social: {
        twitter: '#',
        linkedin: '#',
        email: 'sarah@ziraix.com'
      }
    },
    {
      name: 'David Wang',
      role: '后端开发工程师',
      bio: '云架构专家，确保应用的稳定性和可扩展性',
      avatar: '👨‍🔧',
      skills: ['Python', 'AWS', 'Docker'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'david@ziraix.com'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage} 
        translation={translation}
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-yellow-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-nunito font-black text-5xl lg:text-6xl text-gray-900 mb-6">
              团队介绍
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们是一群充满激情的创造者，用技术和设计让生活变得更美好
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="font-nunito font-bold text-2xl text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-primary/10 text-primary border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    {member.social.github && (
                      <a href={member.social.github} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform">
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer translation={translation} />
    </div>
  );
}