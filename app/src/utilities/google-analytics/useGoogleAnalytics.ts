import { useState } from 'react';
import AppGoogleAnalytics from './google-analytics';

export const useGoogleAnalytics = (): AppGoogleAnalytics => {
  const initializeAnalytics = (): AppGoogleAnalytics => {
    const trackingId = process.env.REACT_APP_GA_KEY;
    const environment = process.env.REACT_APP_ENV_NAME;
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
