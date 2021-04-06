import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { MotionNextRouter, motionProps } from '@/components/MotionNextRouter';

const HomePage = () => {
  return (
    <MotionNextRouter {...motionProps}>
      <Hero />
    </MotionNextRouter>
  );
};

export default HomePage;
