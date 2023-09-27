import { Routes, Route, RouteProps } from 'react-router-dom';
import { usePageViewTracking } from '../utilities/google-analytics/usePageViewTracking';
import { getSiteRoutes } from './features/SiteRouting';

export const AppRouting = (): JSX.Element => {
  usePageViewTracking();

  const allRoutes = [...getSiteRoutes()];

  return (
    <Routes>
      {allRoutes.map((props: RouteProps) => (
        <Route key={props.path} {...props} />
      ))}
    </Routes>
  );
};
