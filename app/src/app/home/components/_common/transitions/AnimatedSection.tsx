import { FC, PropsWithChildren } from 'react';
import FramerAnimation from './Animation';

const AnimatedSection: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <FramerAnimation
      variants={{
        hidden: { opacity: 0, transform: `matrix(1, 0, 0, 1, 0, 20)` },
        visible: { opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' },
      }}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.2 }}
      inView={{ once: true, startVariant: 'visible' }}
    >
      {children}
    </FramerAnimation>
  );
};

export default AnimatedSection;
