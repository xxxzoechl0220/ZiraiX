import React from 'react';
import { SiX, SiInstagram, SiDiscord, SiReddit, SiThreads, SiSinaweibo, SiXiaohongshu } from 'react-icons/si';
import { Translation } from '../lib/i18n';
import { Link } from 'wouter';

interface FooterProps {
  translation: Translation;
}

export function Footer({ translation }: FooterProps) {
  const socialLinks = [
    { icon: SiSinaweibo, href: 'https://weibo.com/u/8011815192', color: 'hover:text-red-500', name: 'Weibo', placeholder: false},
    { icon: SiXiaohongshu, href: 'https://www.xiaohongshu.com/user/profile/571c8e234775a7649595deea?xsec_token=YBlCy3qK-T19kPVNv-9FzY2-1Tcy4zf1j5XNrL4WrJWGo=&xsec_source=app_share&xhsshare=CopyLink&appuid=571c8e234775a7649595deea&apptime=1752601058&share_id=47ce09e36f8c44f9a89ad2b1cc859d5b', color: 'hover:text-red-500', name: 'Xiaohongshu', placeholder: false },
    { icon: SiX, href: 'https://x.com/xxxzoechl0220', color: 'hover:text-gray-600', name: 'X', placeholder: false },
    { icon: SiInstagram, href: 'https://www.instagram.com/zirai_x/', color: 'hover:text-pink-500', name: 'Instagram', placeholder: false },
    { icon: SiThreads, href: 'https://www.threads.com/@zirai_x?igshid=NTc4MTIwNjQ2YQ==', color: 'hover:text-blue-600', name: 'Threads', placeholder: false},
    { icon: SiReddit, href: 'https://www.reddit.com/user/Icy_Training3927/', color: 'hover:text-orange-500', name: 'Reddit', placeholder: false },
    { icon: SiDiscord, href: 'https://discord.gg/FaS5Ucum', color: 'hover:text-indigo-500', name: 'Discord', placeholder: false },
  ];

  const productLinks = [
    { name: translation.apps.list.subscription.name, href: '/product', status: '即将上线', statusColor: 'bg-accent', clickable: true },
    { name: translation.apps.list.showTracker.name, href: '#', status: '开发中', statusColor: 'bg-orange-500', clickable: false },
    { name: translation.apps.list.fitness.name, href: '#', status: '规划中', statusColor: 'bg-gray-400', clickable: false },
    { name: translation.apps.list.sideBusiness.name, href: '#', status: '规划中', statusColor: 'bg-gray-400', clickable: false },
    { name: translation.apps.list.timeGoal.name, href: '#', status: '规划中', statusColor: 'bg-gray-400', clickable: false },
    { name: translation.apps.list.asset.name, href: '#', status: '规划中', statusColor: 'bg-gray-400', clickable: false },
  ];

  const companyLinks = [
    { name: translation.footer.links.about, href: '/about' },
    { name: '联系我们', href: '/contact' },
  ];

  const termsLinks = [
    { name: '用户条款', href: '/terms' },
    { name: '隐私政策', href: '/privacy' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info - 25% width */}
          <div className="space-y-6 lg:col-span-3">
            <div className="flex items-center">
              <img 
                src="/assets/ziraiX-logo.png" 
                alt="ZiraiX Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  // 如果图片加载失败，显示备用logo
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg font-nunito">Z</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {translation.footer.description}
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                if (social.placeholder) {
                  return (
                    <div
                      key={index}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 cursor-not-allowed relative group"
                      title="即将上线"
                    >
                      <IconComponent />
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        即将上线
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white ${social.color} transition-colors hover:scale-110`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="font-nunito font-bold text-lg mb-6">{translation.footer.products}</h3>
            <ul className="space-y-6">
              {productLinks.map((product, index) => (
                <li key={index} className="relative">
                  {product.clickable ? (
                    <Link href={product.href} className="text-gray-400 hover:text-white transition-colors block">
                      <div className="flex items-center gap-3">
                        <span>{product.name}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white ${product.statusColor} shadow-md border border-white/30 hover:scale-110 transition-all duration-200 scale-60`}>
                          {product.status}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <span className="text-gray-400 cursor-not-allowed block">
                      <div className="flex items-center gap-3">
                        <span>{product.name}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white ${product.statusColor} shadow-md border border-white/30 hover:scale-110 transition-all duration-200 scale-60`}>
                          {product.status}
                        </span>
                      </div>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-nunito font-bold text-lg mb-6">公司</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div className="lg:col-span-3">
            <h3 className="font-nunito font-bold text-lg mb-6">条款</h3>
            <ul className="space-y-3">
              {termsLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">© 2025 ZiraiX. All Rights Reserved</p>
            <div className="text-gray-400 text-sm space-x-4">
              <span>上海星迈电子商务有限公司</span>
              <span>沪ICP备2025132017号</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
