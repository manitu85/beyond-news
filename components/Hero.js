import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';

import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { chakra, shouldForwardProp, useColorModeValue } from '@chakra-ui/react';

// Chakra factory component with Next js Image Component
const HeroImage = chakra(NextImage, {
  baseStyle: {
    maxH: 475,
    maxW: 700,
    rounded: '1rem',
    shadow: `rgba(0, 180, 216, 0.2) 5px 5px, rgba(72, 202, 228, 0.2) 10px 10px,
    rgba(144, 239, 255, 0.2) 15px 15px`
  },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Hero = ({ title, subtitle, image, ctaLink, ctaText, ...rest }) => {
  const headingColor = useColorModeValue('primary.800', 'primary.300');
  const textColor = useColorModeValue('primary.800', 'primary.100');

  return (
    <>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        wrap="no-wrap"
        minH="75vh"
        px={8}
        mb={16}
        {...rest}
      >
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            as="h1"
            size="xl"
            textTransform="capitalize"
            fontWeight="extrabold"
            color={headingColor}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            size="md"
            color={textColor}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
            my={2}
          >
            {subtitle}
          </Heading>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
          <Text
            fontSize="xs"
            mt={2}
            textAlign="center"
            color={headingColor}
            opacity="0.6"
          >
            *No credit card required.
          </Text>
        </Stack>
        <Box
          w={{ base: '80%', sm: '60%', md: '50%' }}
          mb={{ base: 12, md: 0 }}
          sx={{ '> div ': { overflow: 'visible !important' } }}
        >
          <HeroImage
            src={image}
            layout="intrinsic"
            width={700}
            height={475}
            quality={100}
            w="auto"
            h="auto"
          />
        </Box>
      </Flex>
    </>
  );
};

// const StyledImage = styled(HeroImage)`
//   /* box-shadow: rgba(0, 180, 216, 0.6) 0px 1px 0px,
//     rgba(72, 202, 228, 0.5) 0px 8px 24px, rgba(72, 202, 228, 0.4) 0px 16px 48px; */
//   /* box-shadow: rgba(0, 180, 216, 0.2) 5px 5px, rgba(72, 202, 228, 0.2) 10px 10px,
//     rgba(144, 239, 255, 0.2) 15px 15px; */
// `;

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

Hero.defaultProps = {
  title: 'Next js app page with Chakra UI',
  subtitle:
    'Retrieve articles and breaking news headlines from news sources and blogs across the web with NEWS API',
  image: '/news.jpg',
  // image: '/machine.jpg',
  ctaText: 'Create your account now',
  ctaLink: '/signup'
};

export default Hero;
