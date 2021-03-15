import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { useSignUpMutation } from 'graphql/generated/hooks';
import { SignUpFormData, baseSignUpFormSchema } from './loginHelpers';

const SignUpForm = () => {
  const history = useHistory();
  const [, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [signUp, { loading }] = useSignUpMutation();

  const { handleSubmit, errors, register, setError, watch } = useForm<SignUpFormData>();
  const watchedPassword = useRef({});
  watchedPassword.current = watch('password', '');

  const signUpFormSchema = {
    ...baseSignUpFormSchema,
    confirmPassword: {
      validate: (value: SignUpFormData['confirmPassword']) =>
        value === watchedPassword.current || 'Passwords do not match',
    },
  };

  const onSubmit: SubmitHandler<SignUpFormData> = async ({ email, password, confirmPassword }) => {
    await signUp({ variables: { email, password, confirmPassword } })
      .then(res => {
        const token = res.data!.signUp.token!;
        setIsLoggedIn(true);
        localStorage.setItem('sc-token', token);
        history.push('/');
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
        <Input id="email" name="email" ref={register(signUpFormSchema.email)} autoFocus />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password} mt={4}>
        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          name="password"
          ref={register(signUpFormSchema.password)}
          type="password"
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.confirmPassword} mt={4}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          id="confirm-password"
          name="confirmPassword"
          ref={register(signUpFormSchema.confirmPassword)}
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
