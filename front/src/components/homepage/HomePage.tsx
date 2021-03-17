import { Box, Heading } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'graphql/generated/hooks';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Homepage = () => {
  const { data, loading } = useRecentSheetsQuery({ fetchPolicy: 'cache-and-network' });

  const createTableRows = () =>
    data?.recentSheets.map(({ artist, id, createdAt, title, users }) => (
      <Tr key={id}>
        <Td>{title}</Td>
        <Td>{artist}</Td>
        <Td>{users[users.length - 1].username}</Td>
        <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
      </Tr>
    ));

  return loading ? null : (
    <Box maxW="500px" m="200px auto">
      <Heading as="h3" fontSize="22px" mb="12px" textAlign="center">
        Recently Added
      </Heading>

      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th>Song</Th>
            <Th>Artist</Th>
            <Th>Added By</Th>
            <Th>Added</Th>
          </Tr>
        </Thead>
        <Tbody>{createTableRows()}</Tbody>
      </Table>
    </Box>
  );
};

export default Homepage;
