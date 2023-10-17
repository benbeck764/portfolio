import {
  Breakpoint,
  BreakpointsOptions,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material/styles';
import { Poppins, Roboto_Mono } from 'next/font/google';

const poppins = Poppins({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const breakPointsOptions: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 330,
    md: 414,
    lg: 768,
    xl: 1200,
  },
};

const spacing = 8;
const pageContentMargin = spacing * 2;

const headerHeights = {
  xs: 80,
  sm: 80,
  md: 80,
  lg: 80,
  xl: 80,
};

const pageWidths: { [key in Breakpoint]: number } = {
  xs: 375,
  sm: 414,
  md: 429,
  lg: 792,
  xl: 1280,
};

const contentWidths: { [key in Breakpoint]: number } = {
  xs: pageWidths['xs'] - 48,
  sm: pageWidths['sm'] - 48,
  md: pageWidths['md'] - 48,
  lg: pageWidths['lg'] - 48,
  xl: pageWidths['xl'] - 48,
};

export function getThemeBase(palette: PaletteOptions): ThemeOptions {
  return {
    headerHeights: {
      ...headerHeights,
    },
    pageContentMargin: pageContentMargin,
    pageWidths: pageWidths,
    contentWidths: contentWidths,
    spacing,
    palette: palette,
    typography: {
      fontFamily: poppins.style.fontFamily,
      fontWeightLight: 400,
      fontSize: 14,
      h1: {
        fontFamily: robotoMono.style.fontFamily,
        fontSize: 'clamp(56px, 10vw, 96px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -1,
        wordSpacing: '-0.05em',
      },
      h2: {
        fontFamily: robotoMono.style.fontFamily,
        fontSize: 'clamp(46px, 8vw, 72px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.025em',
      },
      h3: {
        fontFamily: robotoMono.style.fontFamily,
        fontSize: 'clamp(30px, 7vw, 56px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.025em',
      },
      h4: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 'clamp(24px, 7vw, 36px)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.25em',
      },
      h5: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 'clamp(20px, 6.6vw, 26px)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.25em',
      },
      h6: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 'clamp(17px, 6vw, 22px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.25em',
      },
      paragraph: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.1,
        letterSpacing: -0.5,
      },
      paragraphBold: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      paragraphLink: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      paragraphLarge: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: -0.75,
      },
      paragraphSmall: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: -0.5,
      },
      paragraphSmallBold: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      paragraphExtraSmall: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: -0.5,
      },
      paragraphExtraSmallBold: {
        fontFamily: poppins.style.fontFamily,
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      iconSmall: {
        fontSize: 14,
        lineHeight: 1.3,
      },
      iconMedium: {
        fontSize: 20,
        lineHeight: 1,
      },
      iconLarge: {
        fontSize: 26,
        lineHeight: 1.1,
      },
      button: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 4,
    },
    breakpoints: breakPointsOptions,
  };
}
