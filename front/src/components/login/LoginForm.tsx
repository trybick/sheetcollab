import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../utils/regex';

type FormData = {
  email: string;
  password: string;
};

const formSchema = {
  email: {
    required: { value: true, message: 'Email is required' },
    pattern: { value: emailRegex, message: 'Please enter a valid email' },
  },
  password: {
    required: 'Password is required',
  },
};

const LoginForm = () => {
  const { handleSubmit, errors, register } = useForm<FormData>();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log('email:', email);
    console.log('password:', password);
  });

  return (
    <Box background="white" boxShadow="md" borderRadius="4px" m="2rem auto 0" p={10} w="400px">
      <Box as="form" onSubmit={onSubmit}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            placeholder="Enter email"
            ref={register(formSchema.email)}
            autoFocus
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password} mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            name="password"
            placeholder="Enter password"
            ref={register(formSchema.password)}
            type="password"
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button isLoading={false} mt="28px" type="submit" colorScheme="gray" w="100%">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
