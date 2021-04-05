import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { routeContainer } from '@/styles/motion.variants';

const HomePage = () => {
  return (
    <motion.div
      variants={routeContainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <main>
        <Hero />
      </main>
    </motion.div>
  );
};

export default HomePage;
