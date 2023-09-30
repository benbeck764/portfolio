import { FC } from 'react';
import { AppChip } from '@benbeck764/react-components';

type TechnologyChipProps = {
  name: string;
};

const TechnologyChip: FC<TechnologyChipProps> = (props: TechnologyChipProps) => {
  const { name } = props;
  return (
    <AppChip
      label={name}
      sx={{ backgroundColor: (theme) => theme.palette.custom.green.type }}
    />
  );
};

export default TechnologyChip;
