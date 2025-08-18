import { useState } from 'react';
import { Language, translations } from '../lib/i18n';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function TermsPage() {
  const [language, setLanguage] = useState<Language>('zh-CN');
  const translation = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage} 
        translation={translation}
      />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="font-nunito font-black text-4xl text-gray-900 mb-8">Terms of Service</h1>
            
            <p className="text-gray-600 mb-6">Last Updated on: July 3, 2025</p>
            
            <p className="mb-6">These Terms of Use (hereinafter referred to as the terms) apply to all users of ZiraiX&apos;s products and services (hereinafter referred to as users, or you) under ZiraiX INC. (hereinafter referred to as ZiraiX, us, our or we). When you apply and register to use o use our products and related applications (hereinafter referred to as the applications), it means that you have read, understood, and agreed to accept all the contents of the terms. ZiraiX reserves the right to amend and change these terms at any time. You are advised to pay attention to the website announcements or such modifications and changes at any time. If you continue to use ZiraiX&apos;s products or services after the changes or modifications, it is deemed that you have accepted and agreed to the changes or modifications to the terms. If you do not agree with the changes or modifications of these terms, please stop using ZiraiX&apos;s products or services.</p>

            <p className="mb-8">If you are a minor, you should only use or continue to use ZiraiX&apos;s products or services after your parents (or guardians) have read, understood and agreed to all the contents of this terms (including the subsequent changes and modifications). When you use or continue to use, it is deemed that your parents (or guardians) have read, understood, and agreed to accept all the contents of these terms.</p>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">User Content</h2>
            <p className="mb-6">"User Content" (hereinafter referred to as User Content, or Content) means information, text, software, music, audio, photographs, graphics, video, information, or other materials posted on the applications by users of the applications. You own all User Content that you provide, post, share, display, and publish on the applications.</p>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">User Content License</h2>
            <p className="mb-6">Once you provide User Content on the application, it is deemed that you have granted ZiraiX a non-exclusive, royalty-free, sublicensable worldwide license to that content, and we will have the right to apply, reproduce, process, adapt, adjust, publish, transfer, display, and disseminate the above content. Your authorization includes agreeing that other application users may adapt, apply, publish your content subject to these terms, and allowing ZiraiX to display user content on the application for other users to publish, transmit or utilize. ZiraiX and others may use the content you provide, post, post, and transmit on the application as described above without payment or compensation to you.</p>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">Access Rights</h2>
            <p className="mb-6">The intellectual property rights of the services, software, content, text files and any codes (whether stored on disk, readable storage media or any other media) provided by ZiraiX belong to ZiraiX or third-party licensors. You only have the right to use the content within the scope stipulated in these terms; for the avoidance of disputes, any rights not expressly granted to you by ZiraiX in these terms are reserved by ZiraiX.</p>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">User Obligations</h2>
            <p className="mb-4">You promise not to use ZiraiX's products or services for any illegal purpose or in any illegal way and agree to abide by the relevant laws and regulations of the Republic of China and all international practices for using the Internet. If you are a user outside the Republic of China, you should abide by the laws and regulations of your country or region. You agree and warrant that you will not use ZiraiX's products or services to engage in acts that violate the rights of others or violate the law, including but not limited to:</p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Upload, post, publish or transmit any defamatory, abusive, threatening, offensive, indecent, obscene, false, contrary to public order or good customs or other unlawful text, pictures, or files of any kind on ZiraiX&apos;s products or service</li>
              <li>Infringe on the reputation, privacy, trade secrets, trademarks, copyrights, patents, and other rights of others</li>
              <li>Unauthorized access to the user's service system or fraudulent use of another person's account or forgery of other's identification information</li>
              <li>Use ZiraiX&apos;s products or services in the name of another person</li>
              <li>Upload, post, transmit or distribute any material that contains computer viruses or any code that interrupts, destroys, or restricts the functionality of computer software or hardware</li>
              <li>Engage in illegal transactions or post false and criminal information</li>
              <li>Other behaviors that do not conform to the purpose of ZiraiX products and services</li>
            </ul>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">Purchase Terms</h2>
            <p className="mb-6">ZiraiX&apos;s products provide digital content for consumers to purchase. In-app purchases are non-refundable. If you have not received the corresponding product due to system problems, you can hold the purchase certificate through &quot;Products &gt; Menu &gt; Settings &gt; FAQ &amp; Player Support &gt; FAQ &gt; Purchase Problems &gt; Contact Us in the upper right corner&quot; and provide it to us, we will assist you to check it, and will reissue the product after confirming that the purchase is correct.</p>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-6">For the various products or services provided by ZiraiX, they are only provided for use according to the functions and current conditions at the time; for the specific requirements or needs of users, including but not limited to speed, security, reliability, integrity, correctness, and accuracy There will be disconnection and errors, etc., ZiraiX does not assume any form or content guarantee or guarantee responsibility.</p>

            <p className="mb-6">The information provided by ZiraiX for general informational purposes only. All information on the application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the application or reliance on any information provided on the application. Your use of the application and your reliance on any information on the application is solely at your own risk.</p>
          </div>
        </div>
      </div>

      <Footer translation={translation} />
    </div>
  );
}