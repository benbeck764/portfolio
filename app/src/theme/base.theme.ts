import {
  Breakpoint,
  BreakpointsOptions,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material';

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
  xs: 60,
  sm: 60,
  md: 60,
  lg: 60,
  xl: 60,
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
      fontFamily: 'Roboto Mono, Poppins, -apple-system, system-ui, sans-serif',
      fontWeightLight: 400,
      fontSize: 14,
      h1: {
        fontFamily: 'Poppins, Sans-serif',
        fontSize: 'clamp(56px, 10vw, 96px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -1,
        wordSpacing: '-0.05em',
      },
      h2: {
        fontFamily: 'Poppins, Sans-serif',
        fontSize: 'clamp(46px, 8vw, 72px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.025em',
      },
      h3: {
        fontFamily: 'Poppins, Sans-serif',
        fontSize: 'clamp(30px, 7vw, 56px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.025em',
      },
      h4: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 'clamp(24px, 7vw, 36px)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.25em',
      },
      h5: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 'clamp(20px, 6.6vw, 26px)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.25em',
      },
      h6: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 'clamp(17px, 6vw, 22px)',
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: -0.5,
        wordSpacing: '-0.25em',
      },
      paragraph: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.1,
        letterSpacing: -0.5,
      },
      paragraphBold: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      paragraphLink: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      paragraphLarge: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: -0.75,
      },
      paragraphSmall: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: -0.5,
      },
      paragraphSmallBold: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      paragraphExtraSmall: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: -0.5,
      },
      paragraphExtraSmallBold: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.25,
      },
      mobileParagraph: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: -0.75,
      },
      mobileParagraphBold: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.5,
      },
      mobileParagraphSmall: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: -0.75,
      },
      mobileParagraphSmallBold: {
        fontFamily: 'Roboto Mono, Sans-serif',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: -0.5,
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
