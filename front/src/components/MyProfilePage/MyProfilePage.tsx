import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Flex, Heading, Spinner } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useMySheetsQuery } from 'graphql/generated/hooks';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ROUTES } from 'helpers/routes/routeMap';

const MyProfilePage = () => {
  const { data, loading } = useMySheetsQuery({ fetchPolicy: 'cache-and-network' });

  const createTableRows = () =>
    data?.getUserSheets.map(({ artist, id, createdAt, title, notes, year }) => (
      <Tr key={id}>
        <Td>{title}</Td>
        <Td>{artist}</Td>
        <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
        <Td>{year}</Td>
        <Td>{notes}</Td>
      </Tr>
    ));

  return loading ? (
    <Flex justify="center" maxW="500px" m="200px auto">
      <Spinner size="xl" />
    </Flex>
  ) : (
    <>
      <Box m="40px 80px" textAlign="right">
        <Button
          as={RouterLink}
          colorScheme="blue"
          size="sm"
          textAlign="right"
          to={ROUTES.ADD_SHEET}
        >
          Add New
        </Button>
      </Box>

      <Box maxW="500px" m="40px auto">
        <Heading as="h3" fontSize="22px" mb="12px" textAlign="center">
          My Sheets
        </Heading>

        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Song</Th>
              <Th>Artist</Th>
              <Th>Added</Th>
              <Th>Year</Th>
              <Th>Notes</Th>
            </Tr>
          </Thead>
          <Tbody>{createTableRows()}</Tbody>
        </Table>
      </Box>
    </>
  );
};

export default MyProfilePage;
