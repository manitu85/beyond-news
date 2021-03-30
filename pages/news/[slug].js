import React from 'react';

import { Container, Flex, Grid, Stack, Button } from '@chakra-ui/react';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';

const NewsFeed = ({ page, articles }) => {
  return (
    <Container maxW="800px">
      <Grid
        templateColumns="1fr"
        autoRows="auto"
        rowGap={{ base: '2rem', md: '3rem', lg: '4rem' }}
      >
        {articles.map((article, idx) => (
          <ArticleCard key={`article-${idx}`} article={article} />
        ))}
      </Grid>
      <Pagination page={page} />
    </Container>
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
  const fetcher = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page}`,
    {
      headers: {
        'Content-type': 'application/json',
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
