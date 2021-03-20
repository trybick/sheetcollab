import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useFilterSheetsQuery } from 'graphql/generated/hooks';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const { loading, data } = useFilterSheetsQuery({
    variables: { searchString: query },
  });
  console.log('data:', data);

  return <Box>search</Box>;
};

export default SearchPage;
