import { FC } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SectionHeader from '../_common/SectionHeader';

const Contact: FC = () => {
  return (
    <Box component="section" id="contact" width="100%" maxWidth={550}>
      <SectionHeader title="// Contact Me" />
      <Stack mt={4} direction="column" alignItems="center" justifyContent="center">
        <Typography variant="paragraph" maxWidth={400}>
          Whether you have an exciting project I could help out with or you just want to
          drop by and say hello, my lines of communication are open. Feel free to send me
          an email or contact me via instant message!
        </Typography>
        <Stack mt={2} gap={2} direction="row" alignItems="center" justifyContent="center">
          <Link
            href="https://github.com/benbeck764"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
              fontSize="large"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ngbenbeck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
              fontSize="large"
            />
          </Link>
          <Link
            href="mailto:ben.beck.764@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon
              sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
              fontSize="large"
            />
          </Link>
        </Stack>
        <Stack
          mt={10}
          gap={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Stack gap={0.25} direction="row" alignItems="center" justifyContent="center">
            <CopyrightIcon
              fontSize="small"
              sx={{ color: (theme) => theme.palette.custom.green.type }}
            />
            <Typography
              variant="paragraphSmallBold"
              sx={{ color: (theme) => theme.palette.custom.green.type }}
            >
              {new Date().getFullYear()}
            </Typography>
          </Stack>
          <Typography variant="paragraphSmallBold">|</Typography>
          <Typography variant="paragraphExtraSmall">
            Inspired by:{' '}
            <Link
              href="https://v4.brittanychiang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="paragraphSmallBold" component="span">
                Brittany Chiang
              </Typography>
            </Link>{' '}
            and{' '}
            <Link href="https://tamalsen.dev/" target="_blank" rel="noopener noreferrer">
              <Typography variant="paragraphSmallBold" component="span">
                Tamal Sen
              </Typography>
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
