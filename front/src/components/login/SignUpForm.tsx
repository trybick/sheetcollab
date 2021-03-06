import { useRef } from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../utils/regex';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const { handleSubmit, errors, register, watch } = useForm<FormData>();
  const watchedPassword = useRef({});
  watchedPassword.current = watch('password', '');

  const formSchema = {
    email: {
      required: { value: true, message: 'Email is required' },
      pattern: { value: emailRegex, message: 'Please enter a valid email' },
    },
    password: {
      required: 'Password is required',
    },
    confirmPassword: {
      validate: (value: FormData['confirmPassword']) =>
        value === watchedPassword.current || 'Passwords do not match',
    },
  };

  const onSubmit = handleSubmit(({ email, password, confirmPassword }) => {
    console.log('email:', email);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);
  });

  return (
    <Box background="white" boxShadow="md" borderRadius="4px" m="2rem auto 0" p={10} w="400px">
      <Box as="form" onSubmit={onSubmit}>
        <FormControl isInvalid={Boolean(errors.email)}>
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

        <FormControl isInvalid={Boolean(errors.password)} mt={4}>
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

        <Box textAlign="right">
          <Button isLoading={false} mt="28px" type="submit" colorScheme="gray" w="100%">
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
