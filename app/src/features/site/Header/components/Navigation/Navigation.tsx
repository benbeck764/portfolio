import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  NavMenuOptions,
  NavMenuConfig,
  NavigationOptionVariant,
  NavigationProps,
} from './Navigation.props';
import { NavigationBar } from './NavigationBar/NavigationBar';
import { NavigationDrawer } from './NavigationDrawer/NavigationDrawer';

export const Navigation: FC<NavigationProps> = (props: NavigationProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClickOption = ({ navigationAction, navigationRoute }: NavMenuOptions) => {
    if (pathname !== navigationRoute) {
      if (navigationRoute) navigate(navigationRoute);
      else {
        if (navigationAction) navigationAction();
      }
    }
  };

  const navigationConfiguration: NavMenuConfig[] = [
    {
      label: '// Home',
      variant: NavigationOptionVariant.Button,
      navigationRoute: '#home',
    },
    {
      label: '// About',
      variant: NavigationOptionVariant.Button,
      navigationRoute: '#about',
    },
    {
      label: '// Experience',
      variant: NavigationOptionVariant.Button,
      navigationRoute: '#experience',
    },
    {
      label: '// Work',
      variant: NavigationOptionVariant.Button,
      navigationRoute: '#work',
    },
    {
      label: '// Contact',
      variant: NavigationOptionVariant.Button,
      navigationRoute: '#contact',
    },
  ];

  if (props.variant === 'bar') {
    return (
      <NavigationBar
        navigationConfig={navigationConfiguration}
        onClickOption={handleClickOption}
      />
    );
  } else {
    return (
      <NavigationDrawer
        navigationConfig={navigationConfiguration}
        onClickOption={handleClickOption}
      />
    );
  }
};
