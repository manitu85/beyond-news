import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { MdSettings } from 'react-icons/md';
import { SiHomeassistant } from 'react-icons/si';
import { GiNewspaper } from 'react-icons/gi';
import { BiLogInCircle } from 'react-icons/bi';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import NavLink from './HeaderLink';
import Logo from './Logo';
import { CloseIcon, MenuIcon } from './Icons';
import styles from '@/styles/navigation.module.css';

import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const textColor = useColorModeValue(
    ['primary.100', 'primary.100', 'primary.700'],
    'primary.100'
  );
  const bgColor = useColorModeValue(
    ['primary.400', 'primary.400', 'transparent', 'transparent'],
    ['primary.800', 'primary.800', 'transparent', 'transparent']
  );
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
      bg={bgColor}
      color={['primary.100', 'primary.100', 'primary.700', 'primary.700']}
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
          <NavLink
            href="/"
            name="About"
            icon={SiHomeassistant}
            className={router.pathname === '/' ? styles.selected : ''}
          />
          <NavLink
            href="/news/1"
            name="News Feed"
            icon={GiNewspaper}
            className={router.pathname === '/news/1' ? styles.selected : ''}
          />
          <NavLink
            href="/how"
            name="How It works"
            icon={MdSettings}
            className={router.pathname === '/how' ? styles.selected : ''}
          />
          <NavLink
            href="/register"
            name="Register"
            icon={BiLogInCircle}
            className={router.pathname === '/register' ? styles.selected : ''}
          />
          {/* <NavLink
            href="/terms"
            name="Terms"
            icon={GiNewspaper}
            className={router.pathname === '/terms' ? styles.selected : ''}
          /> */}
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            color={textColor}
            variant="outline"
            rounded="full"
            aria-label="theme-button"
            ml={4}
            _hover={{ background: 'none' }}
            isLast
          >
            Change Color Mode
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
