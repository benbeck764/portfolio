import { PaletteOptions } from '@mui/material';

const paletteBase: PaletteOptions = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  custom: {
    constBlue: '#569CD6',
    variableBlue: '#4FC1FF',
    commentGreen: {
      main: '#6A9955',
      light: '#6A782D',
    },
    bracketYellow: '#FFD700',
    typeGreen: '#4EC9B0',
  },
  grey: {
    100: '#F4F4F4',
    200: '#E0E0E0',
    300: '#C6C6C6',
    400: '#A8A8A8',
    500: '#8D8D8D',
    600: '#6F6F6F',
    700: '#525252',
    800: '#393939',
    900: '#262626',
  },
  coolGrey: {
    100: '#F2F4F8',
    200: '#DDE1E6',
    300: '#C1C7CD',
    400: '#A2A9B0',
    500: '#878D96',
    600: '#697077',
    700: '#4D5358',
    800: '#343A3F',
    900: '#21272A',
  },
};

export const getPalette = (): PaletteOptions => {
  return {
    ...paletteBase,
    mode: 'light',
    background: {
      default: '#1F1F1F',
    },
    primary: {
      main: '#FFFFFF',
      light: '#1FC3FF',
      dark: '#004B66',
    },
    secondary: {
      main: '#DDE1E6',
      light: '#58B7ED',
      dark: '#C1C7CD',
    },
    action: {
      disabled: '#C1C7CD',
      focus: '#000000',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
    success: {
      main: '#00C853',
      dark: '#1B8031',
    },
    error: {
      main: '#B5121B',
    },
    warning: {
      main: '#E27800',
    },
    info: {
      main: '#000000',
    },
  };
};
