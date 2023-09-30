import { Link, Typography } from '@mui/material';
import { FC } from 'react';

type ContractInfoProps = {
  company?: string;
  companyUrl?: string;
};

const ContractInfo: FC<ContractInfoProps> = (props: ContractInfoProps) => {
  const { company, companyUrl } = props;

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
      Contract
      <Typography
        variant="paragraphSmall"
        component="span"
        sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
      >
        {' via '}
      </Typography>
      <Link href={companyUrl} target="_blank">
        {company}
      </Link>
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

export default ContractInfo;
