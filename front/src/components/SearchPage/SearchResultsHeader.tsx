import { Badge, Flex, Heading } from '@chakra-ui/react';

const SearchResultsHeader = ({ numResults }: { numResults: number }) => (
  <Flex align="center" justify="space-between">
    <Heading as="h3" fontSize="24px">
      Search
    </Heading>
    <Badge>{numResults} results</Badge>
  </Flex>
);

export default SearchResultsHeader;
