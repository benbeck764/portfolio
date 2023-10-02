import { FC } from 'react';
import { AppChip } from '@benbeck764/react-components';
import { Typography } from '@mui/material';

type TechnologyChipProps = {
  name: string;
};

const TechnologyChip: FC<TechnologyChipProps> = (props: TechnologyChipProps) => {
  const { name } = props;
  return (
    <AppChip
      label={<Typography variant="paragraphExtraSmall">{name}</Typography>}
      sx={{
        backgroundColor: (theme) => theme.palette.custom.blue.const,
      }}
    />
  );
};

export default TechnologyChip;
