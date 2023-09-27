import {
  TypographyVariants,
  Breakpoint,
  BreakpointsOptions,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material';

const breakPointsOptions: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 330,
    md: 400,
    lg: 768,
    xl: 1200,
  },
};

const lineHeights: { [key in keyof TypographyVariants]: number } = {
  h1: 36,
  h2: 30,
  h3: 26,
  h4: 22,
  h5: 18,
  h6: 16,
  paragraph: 18,
  paragraphBold: 18,
  paragraphLink: 18,
  paragraphLarge: 18,
  paragraphSmall: 16,
  paragraphSmallBold: 14,
  paragraphExtraSmall: 14,
  paragraphExtraSmallBold: 16,

  button: 18,

  mobileParagraph: 20,
  mobileParagraphBold: 20,
  mobileParagraphSmall: 18,
  mobileParagraphSmallBold: 18,

  iconSmall: 18,
  iconMedium: 20,
  iconLarge: 29,

  caption: -1,
  overline: -1,
  fontFamily: -1,
  fontSize: -1,
  fontWeightLight: -1,
  fontWeightRegular: -1,
  fontWeightMedium: -1,
  fontWeightBold: -1,
  htmlFontSize: -1,
  pxToRem: -1,
  body1: -1,
  body2: -1,
  subtitle1: -1,
  subtitle2: -1,
};

const paragraph = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: lineHeights.paragraph + 'px',
  letterSpacing: 0,
};

const paragraphBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphBold + 'px',
  letterSpacing: 0,
};

const paragraphLink = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphLink + 'px',
  letterSpacing: 0,
};

const paragraphSmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphSmall + 'px',
  letterSpacing: 0,
};

const paragraphLarge = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphLarge + 'px',
  letterSpacing: 0,
};

const paragraphSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphSmallBold + 'px',
  letterSpacing: 0,
};

const paragraphExtraSmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphExtraSmall + 'px',
  letterSpacing: 0,
};

const paragraphExtraSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphExtraSmallBold + 'px',
  letterSpacing: 0,
};

const mobileParagraph = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraph + 'px',
  letterSpacing: 0,
};

const mobileParagraphBold = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphBold + 'px',
  letterSpacing: 0,
};

const mobileParagraphSmall = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraphSmall + 'px',
  letterSpacing: 0,
};

const mobileParagraphSmallBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphSmallBold + 'px',
  letterSpacing: 0,
};

const spacing = 8;
const pageContentMargin = spacing * 2;

const headerHeights = {
  xs: 48,
  sm: 48,
  md: 48,
  lg: 48,
  xl: 48,
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
      fontFamily: 'Tahoma',
      fontWeightLight: 400,
      fontSize: 14,
      h1: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: lineHeights.h1 + 'px',
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: 22,
        fontWeight: 700,
        lineHeight: lineHeights.h2 + 'px',
        letterSpacing: 0,
      },
      h3: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: lineHeights.h3 + 'px',
        letterSpacing: -0.5,
      },
      h4: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: lineHeights.h4 + 'px',
        letterSpacing: 0,
      },
      h5: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: lineHeights.h5 + 'px',
        letterSpacing: 0.5,
      },
      h6: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: lineHeights.h6 + 'px',
        letterSpacing: 0,
      },
      paragraph: {
        ...paragraph,
      },
      paragraphBold: {
        ...paragraphBold,
      },
      paragraphLink: {
        ...paragraphLink,
      },
      paragraphLarge: {
        ...paragraphLarge,
      },
      paragraphSmall: {
        ...paragraphSmall,
      },
      paragraphSmallBold: {
        ...paragraphSmallBold,
      },
      paragraphExtraSmall: {
        ...paragraphExtraSmall,
      },
      paragraphExtraSmallBold: {
        ...paragraphExtraSmallBold,
      },
      mobileParagraph: {
        ...mobileParagraph,
      },
      mobileParagraphBold: {
        ...mobileParagraphBold,
      },
      mobileParagraphSmall: {
        ...mobileParagraphSmall,
      },
      mobileParagraphSmallBold: {
        ...mobileParagraphSmallBold,
      },
      iconSmall: {
        fontSize: 14,
        lineHeight: lineHeights.iconSmall + 'px',
      },
      iconMedium: {
        fontSize: 20,
        lineHeight: lineHeights.iconMedium + 'px',
      },
      iconLarge: {
        fontSize: 26,
        lineHeight: lineHeights.iconLarge + 'px',
      },
      button: {
        ...paragraphBold,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 4,
    },
    breakpoints: breakPointsOptions,
  };
}
