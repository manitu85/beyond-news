import NextLink from 'next/link';
import React, { useState } from 'react';

import Logo from './Logo';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md';
import { SiHomeassistant } from 'react-icons/si';
import { GiNewspaper } from 'react-icons/gi';
import { CloseIcon, MenuIcon } from './Icons';

// first way to use theme change
const bgColor = { light: 'gray.300', dark: 'gray.600' };
const textColor = { light: 'primary.700', dark: 'primary.100' };

import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  Icon,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  // Second way to use theme change
  const bgColor = useColorModeValue('gray.300', 'gray.600');
  const textColor = useColorModeValue('primary.700', 'primary.100');
  const logoColor = useColorModeValue(
    ['white', 'white', 'primary.700', 'primary.700'],
    ['white', 'white', 'primary.200', 'primary.200']
  );

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <Logo w="auto" color={logoColor} />
        </NextLink>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {isOpen ? <CloseIcon boxSize={6} /> : <MenuIcon boxSize={6} />}
      </Box>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          as="ul"
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <NavLink href="/" name="about" icon={SiHomeassistant} />
          <NavLink href="/news" name="news feed" icon={GiNewspaper} />
          <NavLink href="/how" name="How It works" isLast icon={MdSettings} />
          <IconButton
            variant="outline"
            rounded="full"
            aria-label="theme-button"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            color={textColor}
            ml={4}
            _hover={{ background: 'none' }}
            onClick={toggleColorMode}
          >
            Change Color Mode
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
};

function NavLink({ href = '/', name, isLast, icon, ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Text
      as="li"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight="bold"
      fontSize="14px"
      color={textColor[colorMode]}
      _hover={{ color: 'primary.500' }}
      _active={{ color: 'primary.500' }}
      {...rest}
    >
      <Icon as={icon} mr={2} boxSize={4} transform="translateY(-1px)" />
      <NextLink href={href} passHref>
        {/* Must add passHref to Link from chakra-ui */}
        <Link _hover={{ decoration: 'none' }}>{name}</Link>
      </NextLink>
    </Text>
  );
}

export default Header;
