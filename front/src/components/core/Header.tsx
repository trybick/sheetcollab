import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button, Flex, HStack } from '@chakra-ui/react';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import SearchInput from './SearchInput';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const history = useHistory();

  const onClickLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('sc-token');
    history.push('/login');
  };

  return (
    <Flex background="white" boxShadow="md" px={8} py={4}>
      <Button as={RouterLink} colorScheme="gray" mr="20px" to="/" variant="ghost">
        Sheet Collab
      </Button>

      <HStack spacing="10px">
        <Button as={RouterLink} colorScheme="gray" to="/add-sheet" variant="ghost">
          Add Sheet
        </Button>
        <Button as={RouterLink} colorScheme="gray" to="/my-profile" variant="ghost">
          My Profile
        </Button>
      </HStack>

      <SearchInput />

      <Flex ml="auto">
        {isLoggedIn ? (
          <Button onClick={onClickLogout} variant="outline">
            Logout
          </Button>
        ) : (
          <RouterLink to="/login">
            <Button>Log in</Button>
          </RouterLink>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
