import { Link as RouterLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Box, Flex } from '@chakra-ui/react';
import { isLoggedInState } from 'atoms/IsLoggedIn';
import { ROUTES } from 'helpers/routes/routeMap';
import UnstyledButton from 'components/common/UnstyledButton';
import SearchInput from './SearchInput';
import LoginAndSignUpButtons from './LoginAndSignUpButtons';
import LoggedInUserSection from './LoggedInUserSection';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Box background="white" boxShadow="md" width="100vw">
      <Flex align="center" justify="space-between" m="0 auto" px={8} py={4} maxW="1200px">
        <UnstyledButton
          as={RouterLink}
          colorScheme="gray"
          fontSize="18px"
          mr="20px"
          to={ROUTES.HOME}
          variant="ghost"
        >
          Sheet Collab
        </UnstyledButton>

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
