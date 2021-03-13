import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

const AboveLoginMessaging = ({
  isLogin,
  toggleIsLogin,
}: {
  isLogin: boolean;
  toggleIsLogin: () => void;
}) => (
  <Box m="7rem auto 0">
    <Link
      as={RouterLink}
      color="blue.600"
      d="block"
      fontSize={18}
      m="10px 0 0"
      textAlign="center"
      to="/"
    >
      Return Home
    </Link>

    <Heading as="h2" mt={22} textAlign="center">
      {isLogin ? 'Sign in to your account' : 'Create your account'}
    </Heading>

    <Text fontWeight="medium" mt={4} textAlign="center">
      {isLogin ? `Don't have an account?` : 'Already have an account?'}
      <Link color="blue.600" ml={1} onClick={toggleIsLogin}>
        {isLogin ? 'Sign up' : 'Back to Login'}
      </Link>
    </Text>
  </Box>
);

export default AboveLoginMessaging;
