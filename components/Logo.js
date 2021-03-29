import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Flex align="center" {...props}>
      <Image src="/logo.png" w="40px" h="40px" mr={2} />
      <Text fontSize="xl" fontWeight="bold">
        Beyond News
      </Text>
    </Flex>
  );
}
