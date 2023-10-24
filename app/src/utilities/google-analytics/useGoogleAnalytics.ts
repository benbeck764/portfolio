'use client';
import { useState } from 'react';
import AppGoogleAnalytics from './google-analytics';

export const useGoogleAnalytics = (): AppGoogleAnalytics => {
  const initializeAnalytics = (): AppGoogleAnalytics => {
    const trackingId = process.env.NEXT_PUBLIC_GA_KEY;
    const environment = process.env.NEXT_PUBLIC_ENV_NAME;
    const analytics = AppGoogleAnalytics.getInstance();

    if (trackingId && !analytics.isInitialized()) {
      analytics.initialize({
        trackingId,
        testMode: environment !== 'prod',
      });
    }

    return analytics;
  };

  const [ga] = useState<AppGoogleAnalytics>(initializeAnalytics());
  return ga;
};
