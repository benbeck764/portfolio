import { FC } from 'react';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import { StyledPageWrapper } from '../../_shared';
import { Box, Stack } from '@mui/material';
import { BreakpointDevice, useBreakpoint } from '@benbeck764/react-components';

const Home: FC = () => {
  const { device } = useBreakpoint();
  return (
    <StyledPageWrapper direction="column" gap={20}>
      <About />
      <Stack
        {...(device !== BreakpointDevice.Mobile && {
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Experience />
      </Stack>
      {/* [TODO]: Temporary for spacing */}
      <Box mt={20}></Box>
    </StyledPageWrapper>
  );
};

export default Home;
