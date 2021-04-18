import { Link as RouterLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Box, Button, Flex } from '@chakra-ui/react';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { ROUTES } from 'helpers/routes/routeMap';
import SearchInput from './SearchInput';
import LoginAndSignUpButtons from './LoginAndSignUpButtons';
import LoggedInUserSection from './LoggedInUserSection';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Box background="white" boxShadow="md" width="100vw">
      <Flex justify="space-between" m="0 auto" px={8} py={4} maxW="1200px">
        <Button as={RouterLink} colorScheme="gray" mr="20px" to={ROUTES.HOME} variant="ghost">
          Sheet Collab
        </Button>

        <SearchInput />

        {isLoggedIn ? (
          <LoggedInUserSection setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginAndSignUpButtons />
        )}
      </Flex>
    </Box>
  );
};

export default Header;
