import { FC } from 'react';
import { Box, Typography, Theme } from '@mui/material';
import { AppTabs, useBreakpoint, BreakpointDevice } from '@benbeck764/react-components';
import { experienceTabs } from './Experience.config';

const Experience: FC = () => {
  const { device } = useBreakpoint();
  return (
    <Box component="section">
      <Typography variant="h4" sx={{ color: (theme) => theme.palette.custom.blue.const }}>
        Work Experience
      </Typography>
      <AppTabs
        tabs={experienceTabs}
        orientation={device === BreakpointDevice.Mobile ? 'horizontal' : 'vertical'}
        reverseIndicator
        smallDivider
        dividerColor={(theme: Theme) => theme.palette.common.white}
        hoverColor={(theme: Theme) => theme.palette.coolGrey[900]}
        containerSx={{ mt: 4 }}
        variant="scrollable"
        {...(device === BreakpointDevice.Mobile && {
          scrollButtons: 'auto',
        })}
        selectionFollowsFocus
      />
    </Box>
  );
};

export default Experience;
