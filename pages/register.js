import {
  Flex,
  Box,
  Heading,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue
} from '@chakra-ui/react';

import { MotionNextRouter, motionProps } from '@/components/MotionNextRouter';
import SignupForm from '@/components/SignupForm';
import LoginForm from '@/components/LoginForm';

const Register = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.700', 'primary.300');
  return (
    <MotionNextRouter {...motionProps}>
      <Flex
        as="main"
        maxW="900px"
        align="center"
        py={['60px', '60px', '100px']}
      >
        <Box bg={bgColor} w="400px" p={4} boxShadow="2xl" rounded="lg">
          <Image src="/logo-preview.png" w="60px" mx="auto" mt={8} mb={4} />
          <Heading
            as="h2"
            textAlign="center"
            fontSize="1.5rem"
            color={headingColor}
            mb={8}
          >
            Beyond News
          </Heading>
          <Tabs variant="enclosed-colored" isFitted m={4}>
            <TabList>
              <Tab>Sign Up</Tab>
              <Tab>Login</Tab>
            </TabList>
            <TabPanels mt={3}>
              <TabPanel>
                <SignupForm />
              </TabPanel>
              <TabPanel>
                <LoginForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </MotionNextRouter>
  );
};

export default Register;
