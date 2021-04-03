import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import AboveLoginMessaging from 'components/login/AboveLoginMessaging';
import LoginForm from 'components/login/LoginForm';
import SignUpForm from 'components/login/SignUpForm';

interface LocationState {
  isLogin: boolean;
}

const Login = () => {
  const location = useLocation<LocationState>();
  const [isLogin, setIsLogin] = useState(location.state.isLogin);

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
