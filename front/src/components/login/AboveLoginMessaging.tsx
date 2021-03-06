import { Box, Heading, Link, Text } from '@chakra-ui/react';

const AboveLoginMessaging = ({ toggleIsLogin }: { toggleIsLogin: () => void }) => (
  <Box m="7rem auto 0">
    <Heading as="h2" textAlign="center">
      Sign in to your account
    </Heading>

    <Text fontWeight="medium" mt={4} textAlign="center">
      Don't have an account?
      <Link color="blue.600" ml={1} onClick={toggleIsLogin}>
        Sign up
      </Link>
    </Text>
  </Box>
);

export default AboveLoginMessaging;
