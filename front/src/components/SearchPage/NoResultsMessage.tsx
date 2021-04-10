import { Box, Text } from '@chakra-ui/react';

const NoResultsMessage = () => (
  <Box m="125px auto 0" maxW="800px">
    <Text fontSize="20px" fontWeight="500" textAlign="center">
      No results found.
    </Text>
  </Box>
);

export default NoResultsMessage;
