import React from 'react';
import { Box, Heading, Flex, Stack, Text, Image } from '@chakra-ui/react';

const NewsFeed = ({ page, articles }) => {
  return (
    <div>
      {articles.map((article, idx) => (
        <Stack key={`article-${idx}`} maxW="900px" my={12}>
          <Heading as="h1" onClick={() => (window.location.href = article.url)}>
            {article?.title}
          </Heading>
          <Text>{article.description}</Text>
          {!!article.urlToImage && (
            <Image
              src={article?.urlToImage}
              alt={article.author}
              maxH="500px"
              objectFit="cover"
            />
          )}
        </Stack>
      ))}
    </div>
  );
};

export default NewsFeed;

export async function getServerSideProps(context) {
  const page = Number.parseInt(context.query.slug);

  if (!page || page < 1 || page > 5) {
    return {
      props: {
        articles: [],
        page: 1
      }
    };
  }
  // fetch function
  const fetcher = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
      }
    }
  );

  const { articles } = await fetcher.json();

  return {
    props: {
      articles,
      page
    }
  };
}
