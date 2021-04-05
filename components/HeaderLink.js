import NextLink from 'next/link';
import { Text, Link, Icon, useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ href = '/', name, icon, isLast, ...rest }) => {
  const linkColor = useColorModeValue(
    ['white', 'white', 'primary.700', 'primary.700'],
    ['white', 'white', 'primary.100', 'primary.100']
  );

  return (
    <Text
      as="li"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight="bold"
      fontSize="14px"
      color={linkColor}
      _hover={{ color: 'primary.500' }}
      _active={{ color: 'primary.500' }}
      {...rest}
    >
      <Icon as={icon} mr={2} boxSize={4} transform="translateY(-1px)" />
      <NextLink href={href} passHref>
        <Link _hover={{ decoration: 'none' }}>{name}</Link>
      </NextLink>
    </Text>
  );
};

export default NavLink;
