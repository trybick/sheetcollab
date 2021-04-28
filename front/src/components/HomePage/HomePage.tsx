import { Flex } from '@chakra-ui/react';
import { useHasWaitedForInitialLoad } from 'helpers/hooks/useHasWaitedForInitialLoad';
import PopularArists from './PopularArtists';
import PopularSheets from './PopularSheets';
import RecentlyAddedSheets from './RecentlyAddedSheets';

const Homepage = () => {
  const { hasWaited } = useHasWaitedForInitialLoad();

  return (
    <Flex justify="center" m="25px 0">
      <RecentlyAddedSheets hasWaited={hasWaited} />

      <Flex flexDir="column" ml="50px">
        <PopularSheets hasWaited={hasWaited} />
        <PopularArists hasWaited={hasWaited} />
      </Flex>
    </Flex>
  );
};

export default Homepage;
