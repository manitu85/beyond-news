import { extendTheme } from '@chakra-ui/react';

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
  }
};

// const colors = {
//   primary: {
//     100: '#E5FCF1',
//     200: '#27EF96',
//     300: '#10DE82',
//     400: '#0EBE6F',
//     500: '#0CA25F',
//     600: '#0A864F',
//     700: '#086F42',
//     800: '#075C37',
//     900: '#064C2E'
//   }
// };

const customTheme = extendTheme({ colors });

export default customTheme;
