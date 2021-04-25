import { Flex } from '@chakra-ui/react';
import { useHasWaitedForInitialLoad } from 'helpers/hooks/useHasWaitedForInitialLoad';
import PopularArists from './PopularArtists';
import RecentlyAddedSheets from './RecentlyAddedSheets';

const Homepage = () => {
  const { hasWaited } = useHasWaitedForInitialLoad();

  return (
    <Flex flexDir="column">
      <PopularArists hasWaited={hasWaited} />
      <RecentlyAddedSheets hasWaited={hasWaited} />
    </Flex>
  );
};

export default Homepage;
