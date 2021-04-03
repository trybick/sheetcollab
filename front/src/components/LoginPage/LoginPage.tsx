import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import AboveLoginMessaging from './AboveLoginMessaging';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Login = () => {
  const location = useLocation<{ isLoginDefault: boolean }>();
  const [isLogin, setIsLogin] = useState(location.state?.isLoginDefault ?? true);

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Flex background="gray.50" direction="column" minH="100vh">
      <AboveLoginMessaging isLogin={isLogin} toggleIsLogin={toggleIsLogin} />
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </Flex>
  );
};

export default Login;
