import { Flex } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'generated/graphql';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Homepage = () => {
  const { data, loading } = useRecentSheetsQuery();

  const createTableRows = () => {
    return data?.recentSheets.map(({ artist, id, createdAt, title }) => (
      <Tr key={id}>
        <Td>{title}</Td>
        <Td>{artist}</Td>
        <Td>{formatDistanceToNow(parseISO(createdAt))}</Td>
      </Tr>
    ));
  };

  return loading ? null : (
    <Flex maxW="500px" m="200px auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Song</Th>
            <Th>Artist</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>{createTableRows()}</Tbody>
      </Table>
    </Flex>
  );
};

export default Homepage;
