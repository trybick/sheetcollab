import { Box, Flex, Heading, Link, Spinner } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'graphql/generated/hooks';

const RecentlyAddedSheets = () => {
  const { data, loading } = useRecentSheetsQuery();

  const createItems = () =>
    data?.recentSheets.map(({ artist, id, title }) => (
      <Box key={id}>
        <Link color="blue.500">{artist}</Link> - <Link color="blue.500">{title}</Link>
      </Box>
    ));

  return loading ? (
    <Flex justify="center" maxW="500px" m="200px auto">
      <Spinner size="xl" />
    </Flex>
  ) : (
    <Box maxW="500px" m="200px auto">
      <Heading as="h3" fontSize="22px" mb="12px" textAlign="center">
        Recent
      </Heading>

      <Box>{createItems()}</Box>
    </Box>
  );
};

export default RecentlyAddedSheets;
