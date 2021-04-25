import { Box, Button, Heading, ListItem, OrderedList } from '@chakra-ui/react';
import { usePopularArtistsQuery } from 'graphql/generated/hooks';

const PopularArists = () => {
  const { data, loading } = usePopularArtistsQuery({ fetchPolicy: 'cache-and-network' });

  return (
    <Box maxW="500px" m="40px auto">
      <Heading as="h3" fontSize="17px" mb="6px">
        Popular artists
      </Heading>

      <Box>
        <OrderedList>
          {data?.popularArtists.map(({ artist }) => (
            <ListItem key={artist}>
              <Button color="blue.500" fontSize="15.5px" minW={0} variant="link">
                {artist}
              </Button>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    </Box>
  );
};

export default PopularArists;
