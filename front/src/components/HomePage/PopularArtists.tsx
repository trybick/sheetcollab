import { Box, Button, Heading, ListItem, OrderedList, Skeleton } from '@chakra-ui/react';
import { usePopularArtistsQuery } from 'graphql/generated/hooks';

const PopularArists = ({ hasWaited }: { hasWaited: boolean }) => {
  const { data, loading } = usePopularArtistsQuery({ fetchPolicy: 'cache-and-network' });

  return (
    <Box maxW="500px" m="40px auto">
      <Heading as="h3" fontSize="17px" mb="6px">
        Popular Artists
      </Heading>

      <OrderedList>
        {loading && hasWaited
          ? [...Array(5)].map(i => (
              <ListItem key={i}>
                <Skeleton height="14px" position="relative" top="33%" transform="translateY(33%)" />
              </ListItem>
            ))
          : data?.popularArtists.map(({ artist }) => (
              <ListItem key={artist}>
                <Button color="blue.500" fontSize="15.5px" minW={0} variant="link">
                  {artist}
                </Button>
              </ListItem>
            ))}
      </OrderedList>
    </Box>
  );
};

export default PopularArists;
