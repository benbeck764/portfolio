import { FC, useEffect, useState } from 'react';
import { experienceTabs } from './Experience.config';
import SectionHeader from '../_common/SectionHeader';
import { AppTabs, useBreakpoint, BreakpointDevice } from '@benbeck764/react-components';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';

const Experience: FC = () => {
  const { device } = useBreakpoint();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box component="section" id="experience">
      <SectionHeader title="// Work Experience" />
      {mounted && (
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
      )}
    </Box>
  );
};

export default Experience;
