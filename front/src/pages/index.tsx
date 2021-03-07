import { useQuery, gql } from '@apollo/client';
import { Flex } from '@chakra-ui/react';

const SHEET_BY_ID = gql`
  query sheetById($id: Int!) {
    sheet(id: $id) {
      title
      artist
      id
      year
    }
  }
`;

const Index = () => {
  const { loading, error, data } = useQuery(SHEET_BY_ID, { variables: { id: 1 } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <Flex>Home page</Flex>;
};

export default Index;
