import { Box, Flex } from '@chakra-ui/react';

const Login = () => (
  <Flex background="gray.50" justify="center" minH="100vh">
    <Box background="white" boxShadow="md" borderRadius="4px" m="auto" p={10} w="400px">
      <Flex as="form">Login</Flex>
    </Box>
  </Flex>
);

export default Login;
