import { FC } from 'react';
import { Box, Link } from '@mui/material';
import { useBreakpoint, BreakpointDevice } from '@benbeck764/react-components';

type CompanyLogoProps = {
  logo: string;
  name: string;
  url: string;
  height?: number;
  width?: number;
};

const CompanyLogo: FC<CompanyLogoProps> = (props: CompanyLogoProps) => {
  const { logo, name, url, height, width } = props;
  const { device } = useBreakpoint();

  if (device !== BreakpointDevice.Desktop) return <></>;

  return (
    <Link href={url} target="_blank">
      <Box
        component="img"
        alt={name}
        src={logo}
        display="flex"
        height={height || 50}
        width={width || 50}
        sx={{
          '&:hover': {
            transition: 'all .25s ease-in-out',
            transform: 'scale(1.025)',
          },
        }}
      ></Box>
    </Link>
  );
};

export default CompanyLogo;
