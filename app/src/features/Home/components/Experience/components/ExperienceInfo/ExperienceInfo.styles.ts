import { styled, Theme, Box } from '@mui/material';

export const StyledExperienceInfoWrapper = styled(Box)(() => ({
  paddingLeft: '16px',
  paddingRight: '16px',
  maxWidth: '650px',
  overflowY: 'auto',
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

export const StyledConnector = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '9px',
}));

export const StyledBullet = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: '8px',
  height: '8px',
  //backgroundColor: theme.palette.common.white,
  backgroundColor: theme.palette.custom.yellow.symbol,
  borderRadius: '50%',
}));

export const StyledLine = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: '2px',
  height: '30px',
  //backgroundColor: theme.palette.common.white,
  backgroundColor: theme.palette.custom.yellow.symbol,
  marginTop: '5px',
  marginBottom: '-3px',
}));
