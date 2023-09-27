import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, AppRoutes } from '../../routing/common/routes';
import { useGoogleAnalytics } from './useGoogleAnalytics';

export const usePageViewTracking = (): void => {
  const googleAnalytics = useGoogleAnalytics();
  const location = useLocation();

  useEffect(() => {
    if (googleAnalytics) {
      const appRoute = Object.values(AppRoutes).find(
        (appRoute: AppRoute) => appRoute.path === location.pathname
      );
      if (appRoute) {
        googleAnalytics.pageView({
          page: appRoute.path,
          title: appRoute.displayName,
        });
      }
    }
  }, [googleAnalytics, location.pathname]);
};
