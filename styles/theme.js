import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const colors = {
  primary: {
    100: '#E5FCF1',
    200: '#ade8f4ff',
    300: '#90e0efff',
    400: '#48cae4ff',
    500: '#00b4d8ff',
    600: '#0096c7ff',
    700: '#0077b6ff',
    800: '#023e8aff',
    900: '#03045eff'
  },
  secondary: {
    100: '#3ad9c9',
    200: '#626cd5',
    300: '#1273eb'
  }
};

const customTheme = extendTheme({ config, colors });

export default customTheme;
