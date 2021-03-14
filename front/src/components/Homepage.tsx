import { Flex } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useRecentSheetsQuery } from 'graphql/generated/graphql';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Homepage = () => {
  const { data, loading } = useRecentSheetsQuery();

  const createTableRows = () => {
    return data?.recentSheets.map(({ artist, id, createdAt, title, users }) => {
      const lastUser = users[users.length - 1];
      // @ts-ignore
      const username = lastUser.username;
      console.log('username:', username);
      return (
        <Tr key={id}>
          <Td>{title}</Td>
          <Td>{artist}</Td>
          <Td>{formatDistanceToNow(parseISO(createdAt))}</Td>
          <Td>{username}</Td>
        </Tr>
      );
    });
  };

  return loading ? null : (
    <Flex maxW="500px" m="200px auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Song</Th>
            <Th>Artist</Th>
            <Th>Date</Th>
            <Th>Added By</Th>
          </Tr>
        </Thead>
        <Tbody>{createTableRows()}</Tbody>
      </Table>
    </Flex>
  );
};

export default Homepage;
