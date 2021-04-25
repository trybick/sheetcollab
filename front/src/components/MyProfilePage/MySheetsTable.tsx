import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useMySheetsQuery } from 'graphql/generated/hooks';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ROUTES } from 'helpers/routes/routeMap';
import { useHasWaitedForInitialLoad } from 'helpers/hooks/useHasWaitedForInitialLoad';
import SkeletonTableRows from 'components/common/SkeletonTableRows';

const MySheets = () => {
  const { data, loading } = useMySheetsQuery({ fetchPolicy: 'cache-and-network' });
  const { hasWaited } = useHasWaitedForInitialLoad();

  const EditButton = ({ id }: { id: string }) => (
    <Button color="blue.500" onClick={() => console.log('Editing sheet:', id)} variant="link">
      Edit
    </Button>
  );

  const createTableRows = () =>
    data?.getUserSheets.map(({ artist, id, createdAt, title, year }) => (
      <Tr key={id}>
        <Td>
          <Button color="blue.500" variant="link">
            {title}
          </Button>
        </Td>
        <Td>
          <Button color="blue.500" variant="link">
            {artist}
          </Button>
        </Td>
        <Td>{year}</Td>
        <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
        <Td>
          <Button color="blue.500" variant="link">
            {<EditButton id={id} />}
          </Button>
        </Td>
      </Tr>
    ));

  return (
    <Box maxW="900px" m="40px auto">
      <Flex align="center" justify="space-between" mb="12px">
        <Heading as="h3" fontSize="20px">
          My Sheets
        </Heading>
        <Box>
          <Button as={RouterLink} colorScheme="blue" size="sm" to={ROUTES.ADD_SHEET}>
            Add New
          </Button>
        </Box>
      </Flex>

      <Table>
        <Thead height={1} background="gray.100">
          <Tr>
            <Th>Song</Th>
            <Th>Artist</Th>
            <Th>Year</Th>
            <Th>Added</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {loading && hasWaited ? (
            <SkeletonTableRows numCells={4} numRows={10} height="20px" />
          ) : (
            createTableRows()
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default MySheets;
