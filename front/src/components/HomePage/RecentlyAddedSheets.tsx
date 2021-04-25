import { Box, Button, Heading, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'graphql/generated/hooks';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import SkeletonTableRows from 'components/common/SkeletonTableRows';

const RecentlyAddedSheets = ({ hasWaited }: { hasWaited: boolean }) => {
  const { data, loading } = useRecentSheetsQuery();

  const createRows = () =>
    data?.recentSheets.map(({ artist, createdAt, id, title }) => (
      <Tr key={id}>
        <Td w="170px">
          <Button color="blue.500" fontSize="15.5px" minW={0} variant="link">
            {title}
          </Button>
        </Td>
        <Td w="170px">
          <Button color="blue.500" fontSize="15.5px" minW={0} variant="link">
            {artist}
          </Button>
        </Td>
        <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
      </Tr>
    ));

  return (
    <Box w="500px" m="40px auto">
      <Heading as="h3" fontSize="17px" mb="6px">
        Recently Added
      </Heading>

      <Table size="sm">
        <Tbody>
          {loading && hasWaited ? (
            <SkeletonTableRows numCells={3} numRows={10} height="20px" />
          ) : (
            createRows()
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default RecentlyAddedSheets;
