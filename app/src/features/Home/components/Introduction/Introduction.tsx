import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AnimatedTypography from '../_common/transitions/AnimatedTypography';

const Introduction: FC = () => {
  return (
    <Box component="section" id="home">
      <Box>
        <AnimatedTypography
          variant="paragraphLarge"
          sx={(theme) => ({
            color: theme.palette.custom.blue.const,
            ...theme.typography.h6,
          })}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.25 }}
          inView={{ once: true, startVariant: 'visible' }}
        >
          Hello, my name is
        </AnimatedTypography>
        <AnimatedTypography
          variant="h1"
          sx={{ color: (theme) => theme.palette.custom.green.type }}
          variants={{
            hidden: { opacity: 0, x: -175 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.5 }}
          inView={{ once: true, startVariant: 'visible' }}
        >
          Ben Beck
          <AnimatedTypography
            variant="h1"
            sx={(theme) => ({
              color: theme.palette.custom.yellow.symbol,
              fontSize: theme.typography.h3.fontSize,
            })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.75,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
              delay: 1.25,
            }}
            inView={{ once: true, startVariant: 'visible' }}
            containerSx={{ display: 'inline-block' }}
          >
            .
          </AnimatedTypography>
        </AnimatedTypography>

        <AnimatedTypography
          variant="h3"
          sx={{ color: (theme) => theme.palette.custom.pink.symbol }}
          variants={{
            hidden: { opacity: 0, x: 175 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.75 }}
          inView={{ once: true, startVariant: 'visible' }}
        >
          Full-Stack Software Engineer
        </AnimatedTypography>
      </Box>
      <Box mt={2.5} sx={{ maxWidth: '500px' }}>
        <AnimatedTypography
          variant="paragraphLarge"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1 }}
          inView={{ once: true, startVariant: 'visible' }}
        >
          I am a software engineer primarily specializing in the architecture, design and
          implementation of custom, full-stack, cloud-based web solutions.
        </AnimatedTypography>
      </Box>
    </Box>
  );
};

export default Introduction;
