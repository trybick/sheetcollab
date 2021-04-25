import { Flex } from '@chakra-ui/react';
import PopularArists from './PopularArtists';
import RecentlyAddedSheets from './RecentlyAddedSheets';

const Homepage = () => {
  return (
    <Flex flexDir="column">
      <PopularArists />
      <RecentlyAddedSheets />
    </Flex>
  );
};

export default Homepage;
