import { useRef } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useSignUpMutation } from 'src/generated/graphql';
import { emailRegex } from '../../utils/regex';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const router = useRouter();
  const [signUp, { loading }] = useSignUpMutation();

  const { handleSubmit, errors, register, setError, watch } = useForm<FormData>();
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

  const onSubmit: SubmitHandler<FormData> = async ({ email, password, confirmPassword }) => {
    await signUp({ variables: { email, password, confirmPassword } })
      .then(res => {
        const token = res.data?.signUp.token!;
        localStorage.setItem('sc-token', token);
        router.push('/');
      })
      .catch((error: Error) => {
        setError('confirmPassword', {
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

      <FormControl isInvalid={!!errors.confirmPassword} mt={4}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          id="confirm-password"
          name="confirmPassword"
          placeholder="Re-enter password"
          ref={register(formSchema.confirmPassword)}
          type="password"
        />
        <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
      </FormControl>

      <Button isLoading={loading} mt="28px" type="submit" colorScheme="gray" w="100%">
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpForm;
