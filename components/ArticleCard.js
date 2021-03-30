import React from 'react';
import {
  Box,
  LinkBox,
  Heading,
  Text,
  Image,
  LinkOverlay
} from '@chakra-ui/react';

const ArticleCard = ({ article }) => {
  return (
    <LinkBox
      as="article"
      maxW="800px"
      px={{ base: '5vw', md: '3vw', lg: '1vw' }}
    >
      <LinkOverlay href={article?.url} isExternal>
        <Heading as="h1" fontSize={['xl', '2xl', '3xl', '4xl']}>
          {article?.title}
        </Heading>
      </LinkOverlay>
      <Text py="1rem">{article.description}</Text>
      <Box>
        {!!article.urlToImage && (
          <Image
            src={article?.urlToImage}
            alt={article?.author}
            maxH="500px"
            objectFit="cover"
            h="100%"
            w="100%"
          />
        )}
      </Box>
    </LinkBox>
  );
};

export default ArticleCard;
