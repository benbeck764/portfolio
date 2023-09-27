import { RouteName, AppRoutes } from './routes';

export const replaceParams = (routeName: RouteName, paramVals: string[]): string => {
  let path = AppRoutes[routeName].path;
  const pathParams = AppRoutes[routeName].params;
  pathParams?.forEach(
    (param: string, index: number) => (path = path.replace(param, paramVals[index]))
  );
  return path;
};

export const getQueryParamsString = (
  obj: string | Record<string, string> | URLSearchParams | string[][] | undefined
): string => {
  const result = new URLSearchParams(obj).toString();
  if (!result) return '';
  return '?' + result;
};
