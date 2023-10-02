import { styled, Theme, Stack } from '@mui/material';

export const StyledPageWrapper = styled(Stack)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingLeft: '25px',
    paddingRight: '25px',
    marginTop: '8px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '100px',
    paddingRight: '100px',
    marginTop: '64px',
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '150px',
    paddingRight: '150px',
    marginTop: '80px',
  },
}));
