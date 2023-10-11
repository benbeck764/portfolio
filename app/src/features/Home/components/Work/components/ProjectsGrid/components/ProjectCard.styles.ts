import { styled, Box, Badge, Theme } from '@mui/material';

export const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.coolGrey[900],
  border: `1px solid ${theme.palette.coolGrey[700]}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 9px 9px rgba(0,0,0,0.25)',
  [theme.breakpoints.up('sm')]: {
    height: '320px',
  },
  [theme.breakpoints.up('md')]: {
    height: '300px',
  },
  '&:hover': {
    border: `1px solid ${theme.palette.coolGrey[600]}`,
  },
}));

export const StyledComingSoonBadge = styled(Badge)(({ theme }: { theme: Theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.success.dark,
    borderRadius: '4px',
    border: 'none',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '8px',
    paddingRight: '8px',
    marginRight: '40px',
  },
}));
