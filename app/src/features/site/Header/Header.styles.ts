import { styled, Theme, Box, Toolbar, AppBar } from '@mui/material';

export const StyledHeaderContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up('xs')]: {
    maxHeight: theme.headerHeights?.['xs'],
    height: theme.headerHeights?.['xs'],
  },
  [theme.breakpoints.up('sm')]: {
    maxHeight: theme.headerHeights?.['sm'],
    height: theme.headerHeights?.['sm'],
  },
  [theme.breakpoints.up('md')]: {
    maxHeight: theme.headerHeights?.['md'],
    height: theme.headerHeights?.['md'],
  },
  [theme.breakpoints.up('lg')]: {
    maxHeight: theme.headerHeights?.['lg'],
    height: theme.headerHeights?.['lg'],
  },
  [theme.breakpoints.up('xl')]: {
    maxHeight: theme.headerHeights?.['xl'],
    height: theme.headerHeights?.['xl'],
  },
}));

export const StyledHeader = styled(AppBar)(() => ({
  background: 'transparent',
  opacity: 1,
  height: 'inherit',

  '&::before': {
    content: '""',
    backdropFilter: 'saturate(180%) blur(20px)',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },

  '&::after': {
    content: '""',
    clear: 'both',
  },
}));

export const StyledHeaderWrapper = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  [theme.breakpoints.up('xl')]: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 8,
  },
}));
