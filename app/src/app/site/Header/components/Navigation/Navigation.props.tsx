export type NavigationProps = {
  variant: NavigationVariant;
};

export type NavigationVariant = 'bar' | 'drawer';

export enum NavigationOptionVariant {
  Button,
  Menu,
}

export type NavMenuOptions = {
  label: string;
  navigationAction?: () => void;
  navigationRoute?: string;
  disabled?: boolean;
  childOption?: boolean;
};

type ConditionalMenuConfig =
  | {
      variant: NavigationOptionVariant.Button;
      menuItems?: never;
      navigationAction?: () => void;
      navigationRoute?: string;
    }
  | {
      variant: NavigationOptionVariant.Menu;
      menuItems: NavMenuOptions[];
      navigationAction?: never;
      navigationRoute?: never;
    };

export type NavMenuConfig = ConditionalMenuConfig & {
  id?: number;
  label: string;
  disabled?: boolean;
  icon?: React.ReactElement;
};
