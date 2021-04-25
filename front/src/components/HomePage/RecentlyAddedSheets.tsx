import { Box, Button, Heading, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'graphql/generated/hooks';
import { useHasWaitedForInitialLoad } from 'helpers/hooks/useHasWaitedForInitialLoad';
import SkeletonStack from 'components/common/SkeletonStack';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const RecentlyAddedSheets = () => {
  const { data, loading } = useRecentSheetsQuery();
  const { hasWaited } = useHasWaitedForInitialLoad();

  const createRows = () =>
    data?.recentSheets.map(({ artist, createdAt, id, title }) => (
      <Tr key={id}>
        <Td w="170px">
          <Button color="blue.500" variant="link">
            {title}
          </Button>
        </Td>
        <Td w="170px">
          <Button color="blue.500" variant="link">
            {artist}
          </Button>
        </Td>
        <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
      </Tr>
    ));

  return (
    <Box maxW="500px" m="200px auto">
      <Heading as="h3" fontSize="18px" mb="6px">
        Recently added
      </Heading>

      <Box>
        {loading && hasWaited ? (
          <SkeletonStack height="20px" numRows={8} mb="4px" />
        ) : (
          <Table size="sm">
            <Tbody>{createRows()}</Tbody>
          </Table>
        )}
      </Box>
    </Box>
  );
};

export default RecentlyAddedSheets;
