import React from 'react';
import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

const ArticleCardSkeleton = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white" maxW="800px">
      <Skeleton height="60px" w="700px" />
      <SkeletonText mt="4" noOfLines={3} spacing="2" w="700px" />
      <Skeleton mt="4" height="300px" w="700px" />
    </Box>
  );
};

export default ArticleCardSkeleton;

// if (!articles) {
//   return Array(3)
//     .fill(0)
//     .map((_, idx) => <ArticleCardSkeleton key={`article-${idx}`} />);
// }
