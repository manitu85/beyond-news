export const routeContainer = {
  initial: { opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
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
