import RouterLink from 'next/link';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

const AboveLoginMessaging = ({
  isLogin,
  toggleIsLogin,
}: {
  isLogin: boolean;
  toggleIsLogin: () => void;
}) => (
  <Box m="7rem auto 0">
    <RouterLink href="/">
      <Link color="blue.600" d="block" fontSize={18} m="10px 0 0" textAlign="center">
        Return Home
      </Link>
    </RouterLink>

    <Heading as="h2" mt={22} textAlign="center">
      {isLogin ? 'Sign in to your account' : 'Sign Up'}
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
