import { Link as RouterLink } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';
import { Button, Flex } from '@chakra-ui/react';
import { MdMarkunread } from 'react-icons/md';
import { RiFolderMusicLine } from 'react-icons/ri';
import { ROUTES } from 'helpers/routes/routeMap';
import UserDropdownMenu from './UserDropdownMenu';

const LoggedInUserSection = ({ setIsLoggedIn }: { setIsLoggedIn: SetterOrUpdater<boolean> }) => (
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

    <UserDropdownMenu setIsLoggedIn={setIsLoggedIn} />
  </Flex>
);

export default LoggedInUserSection;
