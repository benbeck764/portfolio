import { FC } from 'react';
import { Typography, Theme } from '@mui/material';

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: FC<SectionHeaderProps> = (props: SectionHeaderProps) => {
  const { title } = props;
  return (
    <Typography
      variant="h4"
      noWrap
      sx={{
        color: (theme: Theme) => theme.palette.custom.blue.const,
        display: 'flex',
        alignItems: 'center',
        '::after': {
          content: '""',
          display: 'block',
          position: 'relative',
          width: '100%',
          maxWidth: '350px',
          height: '1px',
          marginTop: '6px',
          marginLeft: '20px',
          backgroundColor: (theme: Theme) => theme.palette.common.white,
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
