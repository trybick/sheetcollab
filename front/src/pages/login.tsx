import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../utils/regex';

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

const Login = () => {
  const { handleSubmit, errors, register, setError, setValue } = useForm<FormData>();

  const onSubmit = () => {
    console.log('a');
  };

  return (
    <Flex background="gray.50" justify="center" minH="100vh">
      <Box background="white" boxShadow="md" borderRadius="4px" m="auto" p={10} w="400px">
        <Box as="form" onSubmit={onSubmit}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input name="email" placeholder="Email" ref={register(formSchema.email)} autoFocus />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.password)} mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              placeholder="Enter password"
              ref={register(formSchema.password)}
              type="password"
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Box textAlign="right">
            <Button isLoading={false} mt="22px" type="submit" variantColor="gray">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
