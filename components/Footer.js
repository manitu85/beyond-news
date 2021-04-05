import React from 'react';
import NextLink from 'next/link';
import { Link, Flex } from '@chakra-ui/react';

const Footer = props => {
  return (
    <Flex mb={8} mt={8} justify="center">
      <NextLink href="/" passHref>
        <Link fontSize="md" mr={4} fontWeight="medium" color="gray.500">
          About
        </Link>
      </NextLink>
      <NextLink href="/news/1" passHref>
        <Link fontSize="md" mr={4} fontWeight="medium" color="gray.500">
          News Feed
        </Link>
      </NextLink>
      <NextLink href="/how" passHref>
        <Link fontSize="md" mr={4} fontWeight="medium" color="gray.500">
          How it works
        </Link>
      </NextLink>
      <NextLink href="/terms" passHref>
        <Link fontSize="md" mr={4} fontWeight="medium" color="gray.500">
          Terms
        </Link>
      </NextLink>
    </Flex>
  );
};

export default Footer;
