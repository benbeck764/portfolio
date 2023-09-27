import { styled, Theme, Box, Toolbar, AppBar } from '@mui/material';

export const StyledHeaderContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  justifyContent: 'center',

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
  backgroundColor: 'transparent',
}));

export const StyledHeaderWrapper = styled(Toolbar)(() => ({
  backgroundColor: 'transparent',
}));
