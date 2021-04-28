import { Box, Button, Heading, ListItem, OrderedList, Skeleton } from '@chakra-ui/react';
import { usePopularSheetsQuery } from 'graphql/generated/hooks';

const PopularArists = ({ hasWaited }: { hasWaited: boolean }) => {
  const { data, loading } = usePopularSheetsQuery();

  return (
    <Box mb="18px">
      <Heading as="h3" fontSize="17px" mb="6px">
        Popular Songs
      </Heading>

      <OrderedList>
        {loading && hasWaited
          ? [...Array(5)].map(i => (
              <ListItem key={i}>
                <Skeleton height="14px" position="relative" top="33%" transform="translateY(33%)" />
              </ListItem>
            ))
          : data?.popularSheets.map(({ title }) => (
              <ListItem key={title}>
                <Button color="blue.500" fontSize="15.5px" minW={0} variant="link">
                  {title}
                </Button>
              </ListItem>
            ))}
      </OrderedList>
    </Box>
  );
};

export default PopularArists;
