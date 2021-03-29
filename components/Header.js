import NextLink from 'next/link';
import React, { useState } from 'react';

import { MdSettings } from 'react-icons/md';
import { SiHomeassistant } from 'react-icons/si';
import { GiNewspaper } from 'react-icons/gi';

import { Box, Flex, Text, Button, Link, Icon } from '@chakra-ui/react';
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
      <Flex align="center" cursor="pointer">
        <NextLink href="/">
          <Logo
            w="auto"
            color={['white', 'white', 'primary.700', 'primary.700']}
          />
        </NextLink>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon boxSize={6} /> : <MenuIcon boxSize={6} />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          as="ul"
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <NavLink href="/" name="home" icon={SiHomeassistant} />
          <NavLink href="/news" name="news feed" icon={GiNewspaper} />
          <NavLink href="/how" name="How It works" isLast icon={MdSettings} />
        </Flex>
      </Box>
    </Flex>
  );
};

function NavLink({ href = '/', name, isLast, icon, ...rest }) {
  return (
    <Text
      as="li"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight="bold"
      fontSize="14px"
      _hover={{ color: 'primary.500' }}
      _active={{ color: 'primary.500' }}
      {...rest}
    >
      <Icon as={icon} mr={2} boxSize={4} transform="translateY(-1px)" />
      {/* Must add passHref to Link from chakra-ui */}
      <NextLink href={href} passHref>
        <Link _hover={{ decoration: 'none' }}>{name}</Link>
      </NextLink>
    </Text>
  );
}

export default Header;
