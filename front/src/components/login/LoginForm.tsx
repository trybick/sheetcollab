import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useLoginMutation } from 'src/generated/graphql';
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
  const router = useRouter();
  const [login, { loading }] = useLoginMutation();
  const { handleSubmit, errors, register, setError } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    await login({ variables: { email, password } })
      .then(res => {
        const token = res.data?.login.token!;
        localStorage.setItem('sc-token', token);
        router.push('/');
      })
      .catch((error: Error) => {
        setError('password', {
          type: 'server',
          message: error.message,
        });
      });
  };

  return (
    <Box
      as="form"
      background="white"
      boxShadow="md"
      borderRadius="4px"
      m="2rem auto 0"
      onSubmit={handleSubmit(onSubmit)}
      p={10}
      w="400px"
    >
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

      <Button isLoading={loading} mt="28px" type="submit" colorScheme="gray" w="100%">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
