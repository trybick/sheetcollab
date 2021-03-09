import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { Button, Flex, HStack } from '@chakra-ui/react';
import { isLoggedInState } from '../atoms/IsLoggedIn';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const router = useRouter();

  const onClickLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('sc-token');
    router.push('/login');
  };

  return (
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
        {isLoggedIn ? (
          <Button onClick={onClickLogout} variant="outline">
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button>Log in</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
