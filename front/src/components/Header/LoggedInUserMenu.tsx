import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Box, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { ROUTES } from 'helpers/routes/routeMap';
import { userEmailState } from 'atoms/userEmail';

const LoginAndSignUpButtons = ({ setIsLoggedIn }: { setIsLoggedIn: any }) => {
  const history = useHistory();
  const [userEmail] = useRecoilState(userEmailState);

  const onClickLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    history.push(ROUTES.LOGIN);
  };

  return (
    <Box display={{ xs: 'none', md: 'flex' }}>
      <Menu>
        <MenuButton aria-label="user options" mt="7px">
          <Box as={CgProfile} size="26px" />
        </MenuButton>
        <MenuList placement="bottom-end">
          <MenuGroup title={userEmail}>
            <MenuItem onClick={() => history.push('/profile')}>My Profile</MenuItem>
            <MenuItem onClick={onClickLogout}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LoginAndSignUpButtons;
