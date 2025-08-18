import { useState } from 'react';
import { Language, translations } from '../lib/i18n';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function PrivacyPage() {
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
            <h1 className="font-nunito font-black text-4xl text-gray-900 mb-8">Privacy Policy</h1>
            
            <h2 className="font-nunito font-bold text-2xl text-gray-900 mb-4">Welcome to ZiraiX. Your privacy matters to us.</h2>
            
            <p className="text-gray-600 mb-6">Last Updated on: July 03, 2025</p>
            
            <p className="mb-8">ZiraiX and our affiliates ("ZiraiX", "us", " our" or "we") are dedicated to protecting the privacy rights of our users ("users" or "you"). This Privacy Policy (the " Policy") describes the ways we collect, store, use, and secure the information that you provide or we collect in connection with our websites at ZiraiX.app (the "Sites") or any ZiraiX games and applications provided on any platform (collectively, the "Services"). This Privacy Policy also describes the rights you have. By accessing and/or using our Services, you are expressing that you have read and fully understand the information you shared with us and the rights you have. Please do NOT use or access the Services if you do not agree or have any concerns with this Policy. If you have any questions, concerns or requests about this Policy, you can contact us through the methods described at the end of this Policy.</p>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">The Legal Basis of Collecting and Processing the Information</h2>
            <p className="mb-4">ZiraiX collects and processes the information users provide in accordance with one of the legal bases set out under General Data Protection Regulation (GDPR) and other applicable laws, regulations, codes and principals. The legal bases which we rely upon are described below:</p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Consent:</strong> The users have given consent for one or more specific purposes and authorized ZiraiX to collect and process the information.</li>
              <li><strong>Contractual Necessity:</strong> When the data collecting and processing is necessary for the performance of a contract between users and ZiraiX, or in order to take steps prior to entering the contract.</li>
              <li><strong>Legal Obligation:</strong> When the data collecting and processing is necessary for fulfilling a legal obligation to which the ZiraiX is subject, such as the prevention of crime or fraud.</li>
              <li><strong>Vital Interests:</strong> When the data collecting and processing is necessary for protecting the vital interests of the users or of another person.</li>
              <li><strong>Public task:</strong> When the data collecting and processing is necessary for performing a task carried out in the public interest or as contained under the official authority given to ZiraiX.</li>
              <li><strong>Legitimate Interests:</strong> When the data collecting and processing is necessary for the purpose of the legitimate interests pursued by ZiraiX or by a third party, except when such interests are overridden by the interests or fundamental rights and freedoms of the users which require protection of personal data, especially where the data subject is a child.</li>
            </ul>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">The Purpose of Collecting the Information</h2>
            <p className="mb-4">The purpose of collecting the Information are described below:</p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>to create accounts and allow users to access our applications or play our games</li>
              <li>to understand users' preferences so as to enhance users' experiences and enjoyment by using our Services</li>
              <li>to make an announcement of promotions, rewards, upcoming events, and other news about our Services</li>
              <li>to send the related information, including confirmations, invoices, technical notices, updates, push notifications, security alerts, support and administrative messages to the users</li>
              <li>to send targeted advertising, offers and other sponsored content based on the behaviors and preferences of users but exclude data concerning users' personal health, medical and fitness condition</li>
              <li>to identify and suggest connections with other users</li>
              <li>to operate and improve our Services</li>
              <li>to respond to users' comments and questions</li>
              <li>to enable the users to communicate with other users</li>
              <li>to resolve disputes</li>
              <li>to collect fees from users</li>
              <li>to link or combine it with other information we get from third parties</li>
              <li>to conduct research, big data analytics and create reports for internal use</li>
              <li>to personalize and provide users with better online experiences and customer support</li>
            </ul>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">The Information We Collect and How We Use It</h2>
            <p className="mb-6">The information we collect depend on how you use our Services.</p>

            <h3 className="font-nunito font-semibold text-xl text-gray-900 mt-6 mb-3">Information we collect automatically</h3>
            <p className="mb-6">While you are browsing ZiraiX's Sites, certain information may be logged automatically, such information including but not limited to your computer's operating system, Internet Protocol (IP) address, access times, browser type and language and referring Web site addresses. We may use this information to monitor, develop and analyze your use of the Services.</p>

            <h3 className="font-nunito font-semibold text-xl text-gray-900 mt-6 mb-3">Game progress</h3>
            <p className="mb-6">Whenever you play our games, we collect anonymous data about all of your interactions with the game and with the other players inside the game via server log files. This information may be associated with your player ID, Internet Protocol ("IP") address or device ID for the purpose of providing you our Services and improving them. This data is stored within AWS (Amazon Web Services)</p>

            <h3 className="font-nunito font-semibold text-xl text-gray-900 mt-6 mb-3">Mobile Analytics</h3>
            <p className="mb-6">We use mobile analytics tools to better understand the functionality of our Services on your device. This software may record information such as how often you use the Services, the events that occur within the Services, aggregated usage, performance data, and where the Services were downloaded from. We do not link the information we store within the analytics software to any personal information you submit within the Services.</p>

            <h2 className="font-nunito font-bold text-2xl text-gray-900 mt-8 mb-4">Disclosure of Your information</h2>
            <p className="mb-6">ZiraiX does not share, exchange or sell your personal information except as approved by you or as described below:</p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>With your consent, for example, when you authorize or agree to share your information with other third parties for their own marketing purposes subject to their separate privacy policies.</li>
              <li>ZiraiX may engage or assign trusted third parties to perform services on behalf of us, including but not limited to analyzing data, sending personalized ads and providing customer support. ZiraiX will share your personal information with these third parties, but only to the extent necessary to perform such services.</li>
              <li>We may disclose your information as permitted by law, such as to comply with legal process (including subpoenas), or when we believe necessary or appropriate to respond to claims; investigate fraud, respond to a government request, enforce or apply our rights; protect the rights, property, or safety of us, our users, or others.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer translation={translation} />
    </div>
  );
}