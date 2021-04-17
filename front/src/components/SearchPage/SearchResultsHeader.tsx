import { Badge, Flex, Heading } from '@chakra-ui/react';

const SearchResultsHeader = ({ numResults }: { numResults: number }) => (
  <Flex align="center" justify="space-between">
    <Heading as="h3" fontSize="24px">
      Results
    </Heading>
    <Badge>{numResults} matches</Badge>
  </Flex>
);

export default SearchResultsHeader;
