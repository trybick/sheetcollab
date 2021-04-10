import { Link as RouterLink } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import { ROUTES } from 'helpers/routes/routeMap';

const LoginAndSignUpButtons = () => (
  <Flex>
    <RouterLink to={{ pathname: ROUTES.LOGIN, state: { isLoginDefault: true } }}>
      <Button>Log In</Button>
    </RouterLink>

    <RouterLink to={{ pathname: ROUTES.LOGIN, state: { isLoginDefault: false } }}>
      <Button colorScheme="blue" ml="8px">
        Sign Up
      </Button>
    </RouterLink>
  </Flex>
);

export default LoginAndSignUpButtons;
