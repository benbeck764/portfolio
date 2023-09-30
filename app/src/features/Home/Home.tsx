import { FC, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { BreakpointDevice, useBreakpoint } from '@benbeck764/react-components';
import { useLocation } from 'react-router-dom';
import { StyledPageWrapper } from '../../_shared';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';

const Home: FC = () => {
  const { device } = useBreakpoint();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    }
  }, [hash]);

  return (
    <StyledPageWrapper direction="column" gap={25}>
      <Introduction />
      <About />
      <Stack
        {...(device !== BreakpointDevice.Mobile && {
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Experience />
      </Stack>
      <Work />
      {/* [TODO]: Temporary for spacing */}
      <Box mt={20}></Box>
    </StyledPageWrapper>
  );
};

export default Home;
