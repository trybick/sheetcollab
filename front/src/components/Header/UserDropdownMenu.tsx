import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Box, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { ROUTES } from 'helpers/routes/routeMap';
import { userEmailState } from 'atoms/userEmail';

const UserDropdownMenu = ({ setIsLoggedIn }: { setIsLoggedIn: any }) => {
  const history = useHistory();
  const [userEmail] = useRecoilState(userEmailState);

  const onClickLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    history.push(ROUTES.HOME);
  };

  return (
    <Box display={{ xs: 'none', md: 'flex' }} ml="14px">
      <Menu placement="bottom-end">
        <MenuButton aria-label="user options" mt="7px">
          <Box as={CgProfile} size="26px" />
        </MenuButton>
        <MenuList placement="bottom-end">
          <MenuGroup title={userEmail}>
            <MenuItem onClick={onClickLogout}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserDropdownMenu;
