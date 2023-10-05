import { FC } from 'react';
import { Box, Theme } from '@mui/material';
import { experienceTabs } from './Experience.config';
import SectionHeader from '../_common/SectionHeader';
import { AppTabs } from '@benbeck764/react-components';
import { useBreakpoint, BreakpointDevice } from '@benbeck764/react-components-common';

const Experience: FC = () => {
  const { device } = useBreakpoint();
  return (
    <Box component="section" id="experience">
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
