import Typography, { TypographyProps } from '@mui/material/Typography';
import { FC } from 'react';
import FramerAnimation, { AnimationProps } from './Animation';

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
    <FramerAnimation
      variants={variants}
      inView={inView}
      initial={initial}
      animate={animate}
      transition={transition}
      containerSx={containerSx}
    >
      <Typography {...typographyProps} />
    </FramerAnimation>
  );
};

export default AnimatedTypography;
