import { Flex, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useFilterSheetsQuery } from 'graphql/generated/hooks';
import SearchResultsTable from './SearchResultsTable';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const { loading, data: { filterSheets: results } = {} } = useFilterSheetsQuery({
    variables: { searchString: query },
  });

  return loading ? (
    <Flex justify="center" maxW="500px" m="200px auto">
      <Spinner size="xl" />
    </Flex>
  ) : (
    <SearchResultsTable results={results} />
  );
};

export default SearchPage;
