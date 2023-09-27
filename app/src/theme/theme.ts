import { Breakpoint, Theme, createTheme } from '@mui/material';
import { getThemeBase } from './base.theme';
import { getMUITheme } from './mui.theme';
import { getPalette } from './pallete';

declare module '@mui/material/styles' {
  interface Theme {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }

  interface ThemeOptions {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }
}

export const getTheme = (): Theme => {
  return createTheme(getMUITheme(getThemeBase(getPalette())));
};
