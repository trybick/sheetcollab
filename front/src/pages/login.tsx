import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import LoginForm from 'src/components/login/LoginForm';

const Login = () => {
  return (
    <Flex background="gray.50" direction="column" minH="100vh">
      <Box m="7rem auto 0">
        <Heading as="h2" textAlign="center">
          Sign in to your account
        </Heading>

        <Text fontWeight="medium" mt={4} textAlign="center">
          Don't have an account?
          <Link color="blue.600" ml={1}>
            Sign up
          </Link>
        </Text>
      </Box>

      <LoginForm />
    </Flex>
  );
};

export default Login;
