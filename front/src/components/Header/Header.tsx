import { Link as RouterLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Box, Button, Flex } from '@chakra-ui/react';
import { MdMarkunread } from 'react-icons/md';
import { RiFolderMusicLine } from 'react-icons/ri';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { ROUTES } from 'helpers/routes/routeMap';
import SearchInput from './SearchInput';
import LoginAndSignUpButtons from './LoginAndSignUpButtons';
import LoggedInUserMenu from './LoggedInUserMenu';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Box background="white" boxShadow="md">
      <Flex justify="space-between" m="0 auto" px={8} py={4} maxW="1200px">
        <Flex>
          <Button as={RouterLink} colorScheme="gray" mr="20px" to={ROUTES.HOME} variant="ghost">
            Sheet Collab
          </Button>

          <SearchInput />
        </Flex>

        {isLoggedIn ? (
          <Flex>
            <Button
              as={RouterLink}
              colorScheme="gray"
              leftIcon={<RiFolderMusicLine />}
              to={ROUTES.MY_PROFILE}
              variant="ghost"
            >
              Profile
            </Button>
            <Button
              as={RouterLink}
              colorScheme="gray"
              leftIcon={<MdMarkunread />}
              to={ROUTES.MESSAGES}
              variant="ghost"
            >
              Messages
            </Button>

            <LoggedInUserMenu setIsLoggedIn={setIsLoggedIn} />
          </Flex>
        ) : (
          <LoginAndSignUpButtons />
        )}
      </Flex>
    </Box>
  );
};

export default Header;
