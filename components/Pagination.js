import { Stack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import routeToTop from 'utils/routeToTop';

import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import styles from '@/styles/pagination.module.css';

const Pagination = ({ page }) => {
  const router = useRouter();

  return (
    <Stack direction="row" spacing={2} py={6} justify="center">
      <Button
        className={page == 1 ? styles.isDisabled : styles.isActive}
        leftIcon={<MdArrowBack />}
        colorScheme="primary"
        variant="solid"
        onClick={() => {
          if (page > 1) return routeToTop(router, `/news/${page - 1}`);
        }}
      >
        Previous Page
      </Button>
      <Button align="center">{page}</Button>
      <Button
        className={page == 5 ? styles.isDisabled : styles.isActive}
        rightIcon={<MdArrowForward />}
        colorScheme="primary"
        variant="outline"
        onClick={() => {
          if (page < 5) return routeToTop(router, `/news/${page + 1}`);
        }}
      >
        Next Page
      </Button>
    </Stack>
  );
};

export default Pagination;
