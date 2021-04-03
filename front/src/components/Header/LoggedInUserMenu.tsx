import { useHistory } from 'react-router-dom';
import { Box, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { ROUTES } from 'helpers/routes/routeMap';

const LoginAndSignUpButtons = ({ setIsLoggedIn }: { setIsLoggedIn: any }) => {
  const history = useHistory();

  const onClickLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    history.push(ROUTES.LOGIN);
  };

  return (
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
  );
};

export default LoginAndSignUpButtons;
