import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import AboveLoginMessaging from 'src/components/login/AboveLoginMessaging';
import LoginForm from 'src/components/login/LoginForm';
import SignUpForm from 'src/components/login/SignUpForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Flex background="gray.50" direction="column" minH="100vh">
      <AboveLoginMessaging toggleIsLogin={toggleIsLogin} />
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </Flex>
  );
};

export default Login;
