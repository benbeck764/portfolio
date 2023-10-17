import { FC } from 'react';
import SectionHeader from '../_common/SectionHeader';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import Link from '@mui/material/Link';

const About: FC = () => {
  return (
    <Box component="section" maxWidth={700} id="about">
      <SectionHeader title="// About Me" />
      <Stack mt={3} gap={1.5}>
        <Typography variant="paragraph">
          At a{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.yellow.symbol }}
          >
            very young age
          </Typography>
          , I{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            developed an interest in technology
          </Typography>
          , always tinkering around with computers. In my pre-teen years, I{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            began to learn the basics of HTML and CSS
          </Typography>{' '}
          while playing aroud with various website builders. Around this time, I learned
          my first programming language,{' '}
          <Link
            href="https://wc3we.fandom.com/wiki/Jass_Coding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="paragraphBold" component="span">
              JASS
            </Typography>
          </Link>
          , whilst building custom maps for the game Warcraft III.
        </Typography>

        <Typography variant="paragraph">
          My passion for technology continued into{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.yellow.symbol }}
          >
            high school
          </Typography>{' '}
          where I focused on{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            engineering courses
          </Typography>{' '}
          and started learning the{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            fundamentals of programming via Visual Basic and Java.
          </Typography>{' '}
          Toward the end of high school, I attended a summer program at the{' '}
          <Link href="https://www.msoe.edu" target="_blank" rel="noopener noreferrer">
            <Typography variant="paragraphBold" component="span">
              Milwaukee School of Engineering (MSOE)
            </Typography>
          </Link>{' '}
          with a focus on computer engineering.
        </Typography>

        <Typography variant="paragraph">
          Next fall, I began my studies at the{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.yellow.symbol }}
          >
            university
          </Typography>{' '}
          of MSOE, graduating in 2016 with a{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            B.S. in Software Engineering
          </Typography>{' '}
          and{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            minors in
          </Typography>{' '}
          both{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            mathematics and psychology.
          </Typography>{' '}
          During this time, I had two separate summer interships where I was able to apply
          the skills I had learned in the real world.
        </Typography>

        <Typography variant="paragraph">
          Fast-forward to{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.yellow.symbol }}
          >
            today
          </Typography>
          , and I've had both the privilege and the pleasure of working as a consultant on{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            dozens of projects
          </Typography>{' '}
          across{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            numerous industries
          </Typography>
          , working for{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            start-ups
          </Typography>
          ,{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            large corporations
          </Typography>
          , and lately -- working{' '}
          <Typography
            variant="paragraph"
            component="span"
            sx={{ color: (theme: Theme) => theme.palette.custom.green.type }}
          >
            independently as a consultant.
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
