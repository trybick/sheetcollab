import { Badge, Box, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FilterSheetsQuery } from 'graphql/generated/hooks';
import NoResultsMessage from './NoResultsMessage';

const SearchResultsTable = ({
  results,
}: {
  results: FilterSheetsQuery['filterSheets'] | undefined;
}) => {
  const createTable = () => (
    <Table m="30px auto 0" maxW="800px" variant="simple">
      <Thead>
        <Tr>
          <Th>Song</Th>
          <Th>Artist</Th>
          <Th>Added By</Th>
          <Th>Added</Th>
        </Tr>
      </Thead>
      <Tbody>
        {results?.map(({ artist, id, createdAt, title, users }) => (
          <Tr key={id}>
            <Td>{title}</Td>
            <Td>{artist}</Td>
            <Td>{users[users.length - 1].username}</Td>
            <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  return (
    <Box m="25px auto 0" maxW="800px">
      <Flex align="center" justify="space-between">
        <Heading as="h3" fontSize="24px">
          Search
        </Heading>
        <Badge>{results?.length} results</Badge>
      </Flex>

      {results?.length ? createTable() : <NoResultsMessage />}
    </Box>
  );
};

export default SearchResultsTable;
