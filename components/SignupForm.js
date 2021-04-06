import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  Divider,
  FormHelperText
} from '@chakra-ui/react';
import { EmailIcon, InfoIcon, LockIcon } from '@chakra-ui/icons';

const SignupForm = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<InfoIcon color="primary.300" />} />
            <Input
              type="name"
              placeholder="First name"
              aria-lable="First name"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<InfoIcon color="primary.300" />} />
            <Input type="name" placeholder="Last name" aria-lable="Last name" />
          </InputGroup>
        </FormControl>
        <Divider borderColor="gray.300" />
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<EmailIcon color="primary.300" />} />
            <Input type="email" placeholder="Email" aria-lable="Email" />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<LockIcon color="primary.300" />} />
            <Input
              type="password"
              placeholder="Password"
              aria-lable="Password"
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Sign up!
        </Button>
        <FormHelperText textAlign="center">
          🤞🏼 This form is example and doesn't work.
        </FormHelperText>
      </Stack>
    </form>
  );
};

export default SignupForm;
