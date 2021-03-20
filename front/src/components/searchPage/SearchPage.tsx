import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();

  return <Box>search</Box>;
};

export default SearchPage;
