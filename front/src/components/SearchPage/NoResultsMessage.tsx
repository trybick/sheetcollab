import { Box, Text } from '@chakra-ui/react';

const NoResultsMessage = ({ query }: { query: string }) => (
  <Box m="125px auto 0" maxW="800px">
    <Text fontSize="20px" fontWeight="500" textAlign="center">
      No results found for{' '}
      <Text d="inline" fontStyle="italic">
        {query}
      </Text>
    </Text>
  </Box>
);

export default NoResultsMessage;
