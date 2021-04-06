import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormHelperText
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

const LoginForm = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
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
          Login
        </Button>
        <FormHelperText textAlign="center">🏠 Welcome Home!</FormHelperText>
      </Stack>
    </form>
  );
};

export default LoginForm;
