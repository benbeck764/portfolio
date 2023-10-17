import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const StyledNavigationLink = styled(Link)(() => ({
  textDecoration: 'none',
}));

export const StyledNavigationLinkTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: theme.palette.common.black,
    '&: hover': {
      backgroundColor: theme.palette.coolGrey[100],
      boxRadius: 8,
    },
  },
}));

export const StyledNavigationButton = styled(Button)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    color: theme.palette.common.white,
    '&:focus': {
      color: theme.palette.custom.pink.symbol,
    },
    '&:hover': {
      color: theme.palette.custom.pink.symbol,
    },
  },
}));
