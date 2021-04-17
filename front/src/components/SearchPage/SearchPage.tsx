import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useFilterSheetsQuery } from 'graphql/generated/hooks';
import SearchResultsTable from './SearchResultsTable';
import NoResultsMessage from './NoResultsMessage';
import SearchResultsHeader from './SearchResultsHeader';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const { loading, data: { filterSheets: results } = {} } = useFilterSheetsQuery({
    variables: { searchString: query },
  });

  return (
    <Box m="25px auto 0" maxW="800px">
      <SearchResultsHeader numResults={results?.length || 0} />

      {loading || results?.length ? (
        <SearchResultsTable loading={loading} results={results} />
      ) : (
        <NoResultsMessage />
      )}
    </Box>
  );
};

export default SearchPage;
