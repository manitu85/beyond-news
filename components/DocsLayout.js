import React from 'react';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { Box } from '@chakra-ui/react';
import { routeContainer } from '@/styles/motion.variants';

const DocsLayout = ({ children, title }) => (
  <>
    <NextSeo title={title} />
    <motion.div
      variants={routeContainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Box
        as="main"
        maxW="800px"
        mx="auto"
        px={8}
        w="100%"
        wordBreak="break-all"
      >
        {children}
      </Box>
    </motion.div>
  </>
);

export default DocsLayout;
