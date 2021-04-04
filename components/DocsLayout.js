import React from 'react';
import { Box } from '@chakra-ui/react';

const DocsLayout = ({ children }) => (
  <>
    <Box as="main" maxW="800px" mx="auto" px={8} w="100%" wordBreak="break-all">
      {children}
    </Box>
  </>
);

export default DocsLayout;
