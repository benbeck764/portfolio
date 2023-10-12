import { FC, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { BreakpointDevice, useBreakpoint } from '@benbeck764/react-components';
import { useLocation } from 'react-router-dom';
import { StyledPageWrapper } from '../../_shared';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

const Home: FC = () => {
  const { device } = useBreakpoint();
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
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
  }, [location]);

  return (
    <StyledPageWrapper direction="column" gap={15}>
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
      <Stack
        {...(device !== BreakpointDevice.Mobile && {
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Contact />
      </Stack>
    </StyledPageWrapper>
  );
};

export default Home;
