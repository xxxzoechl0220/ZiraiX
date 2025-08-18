import React from 'react';
import HeroSection from './sections/HeroSection';
import TrackingFeatureSection from './sections/TrackingFeatureSection';
import SmartInsightsSection from './sections/SmartInsightsSection';
import CalendarViewSection from './sections/CalendarViewSection';
import NotificationSection from './sections/NotificationSection';
import AllInOneSection from './sections/AllInOneSection';
import AppShowcaseSection from './sections/AppShowcaseSection';
import FinalCTASection from './sections/FinalCTASection';

export function SubscriptionPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrackingFeatureSection />
      <SmartInsightsSection />
      <CalendarViewSection />
      <NotificationSection />
      <AllInOneSection />
      <AppShowcaseSection />
      <FinalCTASection />
    </div>
  );
} 