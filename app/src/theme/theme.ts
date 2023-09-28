import { Breakpoint, Theme, createTheme } from '@mui/material';
import { getThemeBase } from './base.theme';
import { getMUITheme } from './mui.theme';
import { getPalette } from './pallete';

type CustomPaletteColors = {
  constBlue: string;
  variableBlue: string;
  commentGreen: {
    main: string;
    light: string;
  };
  bracketYellow: string;
  typeGreen: string;
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
