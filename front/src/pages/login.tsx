import { Flex } from '@chakra-ui/react';
import AboveLoginMessaging from 'src/components/login/AboveLoginMessaging';
import LoginForm from 'src/components/login/LoginForm';

const Login = () => (
  <Flex background="gray.50" direction="column" minH="100vh">
    <AboveLoginMessaging />
    <LoginForm />
  </Flex>
);

export default Login;
