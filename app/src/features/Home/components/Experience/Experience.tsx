import { FC } from 'react';
import { Box, Theme } from '@mui/material';
import { AppTabs, useBreakpoint, BreakpointDevice } from '@benbeck764/react-components';
import { experienceTabs } from './Experience.config';
import SectionHeader from '../_common/SectionHeader';

const Experience: FC = () => {
  const { device } = useBreakpoint();
  return (
    <Box component="section">
      <SectionHeader title="// Work Experience" />
      <AppTabs
        tabs={experienceTabs}
        orientation={device === BreakpointDevice.Mobile ? 'horizontal' : 'vertical'}
        reverseIndicator={device !== BreakpointDevice.Mobile}
        smallDivider
        dividerColor={(theme: Theme) => theme.palette.common.white}
        hoverColor={(theme: Theme) => theme.palette.coolGrey[900]}
        containerSx={{ mt: 4 }}
        variant="scrollable"
        scrollButtons={false}
        selectionFollowsFocus
      />
    </Box>
  );
};

export default Experience;
