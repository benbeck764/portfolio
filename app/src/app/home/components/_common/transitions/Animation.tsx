import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import {
  motion,
  useInView,
  useAnimation,
  Variants,
  Transition,
  VariantLabels,
  AnimationControls,
  Target,
  TargetAndTransition,
} from 'framer-motion';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

export type AnimationProps = {
  variants?: Variants;
  inView?: {
    startVariant?: string;
    once?: boolean;
  };
  initial?: Target | VariantLabels;
  animate?: AnimationControls | TargetAndTransition | VariantLabels;
  transition?: Transition;
  containerSx?: SxProps<Theme>;
};

const FramerAnimation: FC<PropsWithChildren<AnimationProps>> = (
  props: PropsWithChildren<AnimationProps>
) => {
  const { children, variants, inView, initial, animate, transition, containerSx } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: inView?.once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && inView) {
      if (inView?.startVariant) controls.start(inView.startVariant);
    }
  }, [isInView]);

  return (
    <Box ref={ref} sx={containerSx}>
      <motion.div
        variants={variants}
        initial={initial}
        animate={animate || controls}
        transition={transition}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default FramerAnimation;
