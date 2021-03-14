import { useHistory } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useLoginMutation } from 'graphql/generated/hooks';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { LoginFormData, loginFormSchema } from './loginHelpers';

const LoginForm = () => {
  const history = useHistory();
  const [login, { loading }] = useLoginMutation();
  const { handleSubmit, errors, register, setError } = useForm<LoginFormData>();
  const [, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const onSubmit: SubmitHandler<LoginFormData> = async ({ email, password }) => {
    await login({ variables: { email, password } })
      .then(res => {
        const token = res.data!.login.token!;
        setIsLoggedIn(true);
        localStorage.setItem('sc-token', token);
        history.push('/');
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
          ref={register(loginFormSchema.email)}
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
          ref={register(loginFormSchema.password)}
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
