import { FC } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

type ContactLinksProps = {
  iconFontSize: 'small' | 'inherit' | 'large' | 'medium';
  iconColor?: (theme: Theme) => string;
  sx?: SxProps<Theme>;
};

const ContactLinks: FC<ContactLinksProps> = (props: ContactLinksProps) => {
  const { iconFontSize, iconColor, sx } = props;
  return (
    <Stack
      mt={2}
      gap={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={sx}
    >
      <Link
        href="https://github.com/benbeck764"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my GitHub profile"
      >
        <GitHubIcon
          sx={{
            color: (theme) =>
              iconColor ? iconColor(theme) : theme.palette.custom.yellow.symbol,
          }}
          fontSize={iconFontSize}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ngbenbeck"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my LinkedIn profile"
      >
        <LinkedInIcon
          sx={{
            color: (theme) =>
              iconColor ? iconColor(theme) : theme.palette.custom.yellow.symbol,
          }}
          fontSize={iconFontSize}
        />
      </Link>
      <Link
        href="mailto:ben.beck.764@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send me an email"
      >
        <EmailIcon
          sx={{
            color: (theme) =>
              iconColor ? iconColor(theme) : theme.palette.custom.yellow.symbol,
          }}
          fontSize={iconFontSize}
        />
      </Link>
    </Stack>
  );
};

export default ContactLinks;
