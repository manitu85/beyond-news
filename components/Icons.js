import React from 'react';
import { createIcon } from '@chakra-ui/icons';

export const CloseIcon = createIcon({
  displayName: 'CloseIcon',
  viewBox: '0 0 18 18',
  path: (
    <path
      fill="currentColor"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  )
});

export const MenuIcon = createIcon({
  displayName: 'MenuIcon',
  viewBox: '0 0 20 20',
  path: (
    <path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  )
});
