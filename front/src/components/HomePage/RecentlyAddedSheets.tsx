import { Box, Heading, Link } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'graphql/generated/hooks';
import { useHasWaitedForInitialLoad } from 'helpers/hooks/useHasWaitedForInitialLoad';
import LoadingSkeleton from 'components/common/LoadingSkeleton';

const RecentlyAddedSheets = () => {
  const { data, loading } = useRecentSheetsQuery();
  const { hasWaited } = useHasWaitedForInitialLoad();

  const createItems = () =>
    data?.recentSheets.map(({ artist, id, title }) => (
      <Box key={id}>
        <Link color="blue.500">{artist}</Link> - <Link color="blue.500">{title}</Link>
      </Box>
    ));

  return (
    <Box maxW="500px" m="200px auto">
      <Heading as="h3" fontSize="18px" mb="6px" textAlign="center">
        Recently Added
      </Heading>

      <Box>
        {loading && hasWaited ? (
          <LoadingSkeleton numRows={8} mb="4px" rowHeight="20px" />
        ) : (
          createItems()
        )}
      </Box>
    </Box>
  );
};

export default RecentlyAddedSheets;
