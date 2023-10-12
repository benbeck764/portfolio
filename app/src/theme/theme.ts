import { Breakpoint, Theme, createTheme } from '@mui/material/styles';
import { getThemeBase } from './base.theme';
import { getMUITheme } from './mui.theme';
import { getPalette } from './pallete';

type CustomPaletteColors = {
  blue: {
    const: string;
    variable: string;
  };
  green: {
    comment: {
      main: string;
      light: string;
    };
    type: string;
  };
  pink: {
    symbol: string;
  };
  yellow: {
    symbol: string;
  };
};

declare module '@mui/material/styles' {
  interface Theme {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }

  interface ThemeOptions {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }

  interface Palette {
    custom: CustomPaletteColors;
  }

  interface PaletteOptions {
    custom: CustomPaletteColors;
  }
}

export const getTheme = (): Theme => {
  return createTheme(getMUITheme(getThemeBase(getPalette())));
};
