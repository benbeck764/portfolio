import { FC } from 'react';
import { Stack, Link, SxProps, Theme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
