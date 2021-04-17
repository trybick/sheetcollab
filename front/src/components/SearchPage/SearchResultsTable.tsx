import { Flex, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FilterSheetsQuery } from 'graphql/generated/hooks';
import { useHasWaitedForInitialLoad } from 'helpers/hooks/useHasWaitedForInitialLoad';

const SearchResultsTable = ({
  loading,
  results,
}: {
  loading: boolean;
  results: FilterSheetsQuery['filterSheets'] | undefined;
}) => {
  const { hasWaited } = useHasWaitedForInitialLoad();

  return loading && hasWaited ? (
    <Flex justify="center" maxW="500px" m="200px auto">
      <Spinner size="xl" />
    </Flex>
  ) : (
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
};

export default SearchResultsTable;
