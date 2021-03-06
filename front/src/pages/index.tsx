import { Button, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';

const Index = () => (
  <Flex background="white" boxShadow="md" px={8} py={4}>
    <Flex align="center" mr="20px">
      Sheet Collab
    </Flex>

    <HStack spacing="10px">
      <Button colorScheme="gray" variant="ghost">
        My Sheets
      </Button>
      <Button colorScheme="gray" variant="ghost">
        Add Sheet
      </Button>
      <Button colorScheme="gray" variant="ghost">
        Search
      </Button>
    </HStack>

    <Flex ml="auto">
      <Link href="/login">
        <Button>Log in</Button>
      </Link>
    </Flex>
  </Flex>
);

export default Index;
