import { Box, Heading, Link, Skeleton, Stack } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'graphql/generated/hooks';

const RecentlyAddedSheets = () => {
  const { data, loading } = useRecentSheetsQuery();

  const createItems = () =>
    data?.recentSheets.map(({ artist, id, title }) => (
      <Box key={id}>
        <Link color="blue.500">{artist}</Link> - <Link color="blue.500">{title}</Link>
      </Box>
    ));

  const createSkeleton = () => (
    <Stack>
      {Array.from(Array(8).keys()).map(n => (
        <Skeleton height="20px" key={n} mb="4px" />
      ))}
    </Stack>
  );

  return (
    <Box maxW="500px" m="200px auto">
      <Heading as="h3" fontSize="22px" mb="12px" textAlign="center">
        Recent
      </Heading>

      <Box>{loading ? createSkeleton() : createItems()}</Box>
    </Box>
  );
};

export default RecentlyAddedSheets;
