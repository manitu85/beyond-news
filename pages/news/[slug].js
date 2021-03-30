import React from 'react';
import { Grid } from '@chakra-ui/react';
import ArticleCard from '@/components/ArticleCard';

const NewsFeed = ({ page, articles }) => {
  return (
    <Grid
      templateColumns="1fr"
      autoRows="auto"
      rowGap={{ base: '2rem', md: '3rem', lg: '4rem' }}
      maxW="800px"
    >
      {articles.map((article, idx) => (
        <ArticleCard key={`article-${idx}`} article={article} />
      ))}
    </Grid>
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
        method: 'GET',
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
