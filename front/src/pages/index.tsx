import { Flex } from '@chakra-ui/react';
import { useRecentSheetsQuery } from '../generated/graphql';

const Index = () => {
  const { data, loading, error } = useRecentSheetsQuery();
  console.log('data:', data);

  return <Flex>Home page</Flex>;
};

export default Index;
