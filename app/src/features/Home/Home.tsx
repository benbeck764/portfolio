import { FC, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { BreakpointDevice, useBreakpoint } from '@benbeck764/react-components';
import { useLocation } from 'react-router-dom';
import { StyledIntroWrapper, StyledPageWrapper } from '../../_shared';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Box from '@mui/material/Box';
import AnimatedSection from './components/_common/transitions/AnimatedSection';

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
    <StyledPageWrapper direction="column">
      <StyledIntroWrapper alignItems="center" justifyContent="center">
        <Introduction />
      </StyledIntroWrapper>
      <Box py={12.5}>
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </Box>
      <Stack
        {...(device !== BreakpointDevice.Mobile && {
          alignItems: 'center',
          justifyContent: 'center',
        })}
        py={12.5}
      >
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
      </Stack>
      <Box py={12.5}>
        <AnimatedSection>
          <Work />
        </AnimatedSection>
      </Box>
      <Stack
        {...(device !== BreakpointDevice.Mobile && {
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </Stack>
    </StyledPageWrapper>
  );
};

export default Home;
