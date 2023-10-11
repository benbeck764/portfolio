import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const Introduction: FC = () => {
  return (
    <Box component="section" id="home">
      <Box>
        <Typography
          variant="paragraphLarge"
          sx={(theme) => ({
            color: theme.palette.custom.blue.const,
            ...theme.typography.h6,
          })}
        >
          Hello, my name is
        </Typography>
        <Typography
          variant="h1"
          sx={{ color: (theme) => theme.palette.custom.green.type }}
        >
          Ben Beck
          <Typography
            component="span"
            variant="h3"
            sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
          >
            .
          </Typography>
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: (theme) => theme.palette.custom.pink.symbol }}
        >
          Full-Stack Software Engineer
        </Typography>
      </Box>
      <Box mt={2.5} sx={{ maxWidth: '500px' }}>
        <Typography variant="paragraphLarge">
          I am a software engineer primarily specializing in the architecture, design and
          implementation of custom, full-stack, cloud-based web solutions.
        </Typography>
      </Box>
    </Box>
  );
};

export default Introduction;
