import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { ROUTES } from 'helpers/routes/routeMap';
import SearchInput from './SearchInput';
import LoginAndSignUpButtons from './LoginAndSignUpButtons';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const history = useHistory();

  const onClickLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    history.push(ROUTES.LOGIN);
  };

  return (
    <Flex background="white" boxShadow="md" px={8} py={4}>
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

      <Flex ml="auto">
        {isLoggedIn ? (
          <>
            <Box display={{ xs: 'none', md: 'flex' }}>
              <Menu>
                <MenuButton aria-label="Page Options">
                  <Box as={CgProfile} size="24px" />
                </MenuButton>
                <MenuList placement="bottom-end">
                  <MenuGroup title={'email'}>
                    <MenuItem onClick={() => history.push('/profile')}>My Profile</MenuItem>
                    <MenuItem onClick={onClickLogout}>Logout</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Box>
          </>
        ) : (
          <LoginAndSignUpButtons />
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
