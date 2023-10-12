import Typography, { TypographyProps } from '@mui/material/Typography';
import { FC } from 'react';
import Animation, { AnimationProps } from './Animation';

export type AnimatedTypographyProps = TypographyProps & AnimationProps;

const AnimatedTypography: FC<AnimatedTypographyProps> = (
  props: AnimatedTypographyProps
) => {
  const {
    variants,
    inView,
    initial,
    animate,
    transition,
    containerSx,
    ...typographyProps
  } = props;
  return (
    <Animation
      variants={variants}
      inView={inView}
      initial={initial}
      animate={animate}
      transition={transition}
      containerSx={containerSx}
    >
      <Typography {...typographyProps} />
    </Animation>
  );
};

export default AnimatedTypography;
