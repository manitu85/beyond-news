import NextLink from 'next/link';
import React, { useState } from 'react';

import { Box, Flex, Text, Button, Link } from '@chakra-ui/react';
import Logo from './Logo';
import { CloseIcon, MenuIcon } from './Icons';

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      textTransform="uppercase"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <NavLink href="/" name="home" />
          <NavLink href="/news" name="news feed" />
          <NavLink href="/how" name="How It works" />
          <NavLink href="/pricing" name="pricing" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

function NavLink({ href = '/', name, isLast, ...rest }) {
  // Must add passHref to Link from chakra-ui
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <NextLink href={href} passHref>
        <Link>{name}</Link>
      </NextLink>
    </Text>
  );
}
