import { Suspense } from 'react';
import { Outlet, RouteProps } from 'react-router-dom';
import { AppRoutes, RouteName } from '../common/routes';
import { AppPageLoader } from '@benbeck764/react-components';

export const getSiteRoutes = (): RouteProps[] => [
  {
    path: AppRoutes[RouteName.Site].path,
    element: (
      <Suspense fallback={<AppPageLoader />}>
        <Outlet />
      </Suspense>
    ),
  },
];
