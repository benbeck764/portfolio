import { Suspense, lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RouteName } from '../common/routes';
import { AppPageLoader } from '@benbeck764/react-components';

const Home = lazy(() => import('../../features/Home/Home'));

export const getSiteRoutes = (): RouteProps[] => [
  {
    path: AppRoutes[RouteName.Site].path,
    element: (
      <Suspense fallback={<AppPageLoader />}>
        <Home />
      </Suspense>
    ),
  },
];
