import { Badge, Box, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useFilterSheetsQuery } from 'graphql/generated/hooks';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const { loading, data: { filterSheets: results } = {} } = useFilterSheetsQuery({
    variables: { searchString: query },
  });
  console.log('results:', results);

  const createTableRows = () =>
    results?.map(({ artist, id, createdAt, title, users }) => (
      <Tr key={id}>
        <Td>{title}</Td>
        <Td>{artist}</Td>
        <Td>{users[users.length - 1].username}</Td>
        <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
      </Tr>
    ));

  return (
    <Box m="25px auto 0" maxW="800px">
      <Flex align="center" justify="space-between">
        <Heading as="h3" fontSize="24px">
          Search
        </Heading>

        <Badge>{results?.length} results</Badge>
      </Flex>

      <Table m="30px" variant="simple">
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

export default SearchPage;
