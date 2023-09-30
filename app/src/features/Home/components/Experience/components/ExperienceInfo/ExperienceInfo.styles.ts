import { styled, Theme, Box, ListItem } from '@mui/material';

export const StyledExperienceInfoWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  maxWidth: '730px',
}));

export const StyledExperienceStickyHeader = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    top: 0,
    position: 'sticky',
    zIndex: 99,
    width: '100%',
    backgroundColor: theme.palette.background.default,
  })
);

export const StyledExperienceConnector = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '9px',
}));

export const StyledExperienceBullet = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: '8px',
  height: '8px',
  backgroundColor: theme.palette.custom.yellow.symbol,
  borderRadius: '50%',
}));

export const StyledExperienceLine = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: '2px',
  height: '30px',
  backgroundColor: theme.palette.custom.yellow.symbol,
  marginTop: '5px',
  marginBottom: '-3px',
}));

export const StyledExperienceListItem = styled(ListItem)(
  ({ theme }: { theme: Theme }) => ({
    display: 'list-item',
    paddingTop: 0.5,
    paddingBottom: 0.5,

    [theme.breakpoints.down('lg')]: {
      paddingLeft: '4px',
      paddingRight: '4px',
    },
  })
);
