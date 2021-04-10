import { Link as RouterLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button, Flex } from '@chakra-ui/react';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { ROUTES } from 'helpers/routes/routeMap';
import SearchInput from './SearchInput';
import LoginAndSignUpButtons from './LoginAndSignUpButtons';
import LoggedInUserMenu from './LoggedInUserMenu';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Flex background="white" boxShadow="md" justify="space-between" px={8} py={4}>
      <Button as={RouterLink} colorScheme="gray" mr="20px" to={ROUTES.HOME} variant="ghost">
        Sheet Collab
      </Button>

      {isLoggedIn && (
        <>
          <Button as={RouterLink} colorScheme="gray" to={ROUTES.MY_PROFILE} variant="ghost">
            My Profile
          </Button>
          <Button as={RouterLink} colorScheme="gray" to={ROUTES.ADD_SHEET} variant="ghost">
            Add Sheet
          </Button>
        </>
      )}

      <SearchInput />

      {isLoggedIn ? <LoggedInUserMenu setIsLoggedIn={setIsLoggedIn} /> : <LoginAndSignUpButtons />}
    </Flex>
  );
};

export default Header;
