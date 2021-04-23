import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Flex, Heading, Skeleton } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useMySheetsQuery } from 'graphql/generated/hooks';
import { parseISO } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ROUTES } from 'helpers/routes/routeMap';
import { useHasWaitedForInitialLoad } from 'helpers/hooks/useHasWaitedForInitialLoad';

const LoadingSkeleton = () => (
  <Td>
    <Skeleton height="20px" />
  </Td>
);

const MySheets = () => {
  const { data, loading } = useMySheetsQuery({ fetchPolicy: 'cache-and-network' });
  const { hasWaited } = useHasWaitedForInitialLoad();

  const onEdit = (id: string) => {
    console.log('Editing sheet:', id);
  };

  const EditButton = ({ id }: { id: string }) => (
    <Button color="blue.500" onClick={() => onEdit(id)} variant="link">
      Edit
    </Button>
  );

  const createTableRows = () =>
    data?.getUserSheets.map(({ artist, id, createdAt, title, year }) => (
      <Tr key={id}>
        <Td>{title}</Td>
        <Td>{artist}</Td>
        <Td>{year}</Td>
        <Td>{formatDistanceToNow(parseISO(createdAt), { addSuffix: true })}</Td>
        <Td>{<EditButton id={id} />}</Td>
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
        <Thead background="gray.100">
          <Tr>
            <Th>Song</Th>
            <Th>Artist</Th>
            <Th>Year</Th>
            <Th>Added</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading && hasWaited
            ? [...Array(8)].map(i => (
                <Tr key={i}>
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                </Tr>
              ))
            : createTableRows()}
        </Tbody>
      </Table>
    </Box>
  );
};

export default MySheets;
