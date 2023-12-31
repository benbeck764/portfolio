import { FC } from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SectionHeader from '../_common/SectionHeader';
import ContactLinks from '../_common/ContactLinks';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
        <ContactLinks iconFontSize="large" />
        <Stack
          mt={10}
          gap={0.5}
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
              aria-label="View Brittany Chiang's Portfolio Website"
            >
              <Typography
                variant="paragraphSmallBold"
                component="span"
                sx={{ display: { xs: 'inline-block', xl: 'none' } }}
              >
                Brittany
              </Typography>
              <Typography
                variant="paragraphSmallBold"
                component="span"
                sx={{ display: { xs: 'none', xl: 'inline-block' } }}
              >
                Brittany Chiang
              </Typography>
            </Link>{' '}
            &{' '}
            <Link
              href="https://tamalsen.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Tamal Sen's Portfolio Website"
            >
              <Typography
                variant="paragraphSmallBold"
                component="span"
                sx={{ display: { xs: 'inline-block', xl: 'none' } }}
              >
                Tamal
              </Typography>
              <Typography
                variant="paragraphSmallBold"
                component="span"
                sx={{ display: { xs: 'none', xl: 'inline-block' } }}
              >
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
