import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const routeContainer = {
  hidden: { opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren'
    }
  },
  exit: {
    x: '-100vw',
    duration: 1,
    transition: {
      ease: 'easeOut'
    }
  }
};

export const motionProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  variants: routeContainer
};

export const MotionNextRouter = styled(motion.div)``;
