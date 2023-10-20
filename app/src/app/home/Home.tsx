'use client';
import { FC, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { StyledIntroWrapper, StyledPageWrapper } from '../../_shared';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Box from '@mui/material/Box';
import AnimatedSection from './components/_common/transitions/AnimatedSection';
import useHash from '@/utilities/hooks/useHash';
import { LazyMotion, domAnimation } from 'framer-motion';

const Home: FC = () => {
  const hash = useHash();

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
    // <LazyMotion features={domAnimation} strict>
    //   <StyledPageWrapper direction="column">
    //     <StyledIntroWrapper alignItems="center" justifyContent="center">
    //       <Introduction />
    //     </StyledIntroWrapper>
    //     <Box py={12.5}>
    //       <AnimatedSection>
    //         <About />
    //       </AnimatedSection>
    //     </Box>
    //     <Stack
    //       sx={{
    //         alignItems: { xs: 'initial', lg: 'center' },
    //         justifyContent: { xs: 'initial', lg: 'center' },
    //       }}
    //       py={12.5}
    //     >
    //       <AnimatedSection>
    //         <Experience />
    //       </AnimatedSection>
    //     </Stack>
    //     <Box py={12.5}>
    //       <AnimatedSection>
    //         <Work />
    //       </AnimatedSection>
    //     </Box>
    //     <Stack
    //       sx={{
    //         alignItems: { xs: 'initial', lg: 'center' },
    //         justifyContent: { xs: 'initial', lg: 'center' },
    //       }}
    //       py={12.5}
    //     >
    //       <AnimatedSection>
    //         <Contact />
    //       </AnimatedSection>
    //     </Stack>
    //   </StyledPageWrapper>
    // </LazyMotion>
    <></>
  );
};

export default Home;
