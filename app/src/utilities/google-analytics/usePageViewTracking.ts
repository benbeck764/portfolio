'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AppRoute, AppRoutes } from '../../routing/common/routes';
import { useGoogleAnalytics } from './useGoogleAnalytics';

export const usePageViewTracking = (): void => {
  const googleAnalytics = useGoogleAnalytics();
  const pathname = usePathname();

  useEffect(() => {
    if (googleAnalytics) {
      const appRoute = Object.values(AppRoutes).find(
        (appRoute: AppRoute) => appRoute.path === pathname
      );
      if (appRoute) {
        googleAnalytics.pageView({
          page: appRoute.path,
          title: appRoute.displayName,
        });
      }
    }
  }, [googleAnalytics, pathname]);
};
