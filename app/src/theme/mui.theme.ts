import { Theme, ThemeOptions } from '@mui/material';

export const getMUITheme = (themeBaseOptions: ThemeOptions): ThemeOptions => {
  const themeBase = themeBaseOptions as Theme;

  return {
    ...themeBaseOptions,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            '*::-webkit-scrollbar': {
              width: '14px',
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: themeBase.palette.grey[300],
              borderRadius: '10px',
              border: '4px solid rgba(0,0,0,0)',
              backgroundClip: 'padding-box',
            },
            '*::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
          },
          // Hide Chrome auto-fill color
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: `0 0 0 100px ${themeBase.palette.common.white} inset`,
              WebKitTextFillColor: `${themeBase.palette.common.white}`,
            },
          },
        },
      },
    },
  };
};
