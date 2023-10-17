import Stack from '@mui/material/Stack';
import { styled, Theme } from '@mui/material/styles';

export const StyledPageWrapper = styled(Stack)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '100px',
    paddingRight: '100px',
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '150px',
    paddingRight: '150px',
  },
}));

export const StyledIntroWrapper = styled(Stack)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up('xs')]: {
    minHeight: `calc(100vh - ${theme.headerHeights?.['xs']}px - ${theme.pageContentMargin}px)`,
    marginTop: `calc(-${theme.headerHeights?.['xs']}px + -${theme.pageContentMargin}px)`,
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: `calc(100vh - ${theme.headerHeights?.['sm']}px - ${theme.pageContentMargin}px)`,
    marginTop: `calc(-${theme.headerHeights?.['sm']}px + -${theme.pageContentMargin}px)`,
  },
  [theme.breakpoints.up('md')]: {
    minHeight: `calc(100vh - ${theme.headerHeights?.['md']}px - ${theme.pageContentMargin}px)`,
    marginTop: `calc(-${theme.headerHeights?.['md']}px + -${theme.pageContentMargin}px)`,
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: `calc(100vh - ${theme.headerHeights?.['lg']}px - ${theme.pageContentMargin}px)`,
    marginTop: `calc(-${theme.headerHeights?.['lg']}px + -${theme.pageContentMargin}px)`,
  },
  [theme.breakpoints.up('xl')]: {
    minHeight: `calc(100vh - ${theme.headerHeights?.['xl']}px - ${theme.pageContentMargin}px)`,
    marginTop: `calc(-${theme.headerHeights?.['xl']}px + -${theme.pageContentMargin}px)`,
  },
}));
