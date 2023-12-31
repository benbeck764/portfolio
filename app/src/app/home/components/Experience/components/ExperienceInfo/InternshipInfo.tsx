import Typography from '@mui/material/Typography';
import { FC } from 'react';

const InternshipInfo: FC = () => {
  return (
    <Typography
      variant="paragraphSmall"
      sx={{ color: (theme) => theme.palette.custom.green.type }}
    >
      <Typography
        variant="paragraphSmall"
        component="span"
        sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
      >
        {'['}
      </Typography>

      <Typography
        variant="paragraphSmall"
        component="span"
        sx={{ color: (theme) => theme.palette.custom.green.type }}
      >
        {'Internship'}
      </Typography>

      <Typography
        variant="paragraphSmall"
        component="span"
        sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
      >
        {']'}
      </Typography>
    </Typography>
  );
};

export default InternshipInfo;
