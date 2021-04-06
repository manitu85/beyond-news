import React from 'react';
import useSWR from 'swr';
import { NextSeo } from 'next-seo';
import { Container, Grid } from '@chakra-ui/react';

import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import ArticleCardSkeleton from '@/components/ArticleCardSkeleton';

import { MotionNextRouter, motionProps } from '@/components/MotionNextRouter';
import { fetcher } from 'utils/fetcher';

const NewsFeed = ({ page, articles }) => {
  // cached articles on client side
  const { data, error } = useSWR(`/news/${page}`, fetcher, {
    initialData: articles
  });

  if (!data && !error) {
    return <ArticleCardSkeleton />;
  }

  // console.log('ARTICLES:', articles);
  return (
    <>
      <NextSeo title="News Feed" />
      <MotionNextRouter {...motionProps}>
        <Container maxW="800px">
          <Grid
            templateColumns="1fr"
            autoRows="auto"
            rowGap={{ base: '2rem', md: '3rem', lg: '4rem' }}
          >
            {data &&
              data.map((article, idx) => (
                <ArticleCard key={`article-${idx}`} article={article} />
              ))}
          </Grid>
          <Pagination page={page} />
        </Container>
      </MotionNextRouter>
    </>
  );
};

export default NewsFeed;

export async function getServerSideProps({ query: { slug } }) {
  const page = Number.parseInt(slug);

  const { articles } = await fetcher(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page}`
  );

  if (!page || page < 1 || page > 5) {
    return {
      props: {
        articles: [],
        page: 1
      }
    };
  }

  return {
    props: {
      articles,
      page
    }
  };
}
