import { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';
import { Flex } from '@chakra-ui/react';
import { MdMarkunread } from 'react-icons/md';
import { RiFolderMusicLine } from 'react-icons/ri';
import { ROUTES } from 'helpers/routes/routeMap';
import UnstyledButton from 'components/common/UnstyledButton';
import UserDropdownMenu from './UserDropdownMenu';

const NavLink = ({ icon, text, to }: { icon: ReactElement; text: string; to: string }) => (
  <UnstyledButton as={RouterLink} colorScheme="gray" leftIcon={icon} to={to} variant="ghost">
    {text}
  </UnstyledButton>
);

const LoggedInUserSection = ({ setIsLoggedIn }: { setIsLoggedIn: SetterOrUpdater<boolean> }) => (
  <Flex>
    <NavLink icon={<RiFolderMusicLine />} text="Profile" to={ROUTES.MY_PROFILE} />
    <NavLink icon={<MdMarkunread />} text="Messages" to={ROUTES.MESSAGES} />

    <UserDropdownMenu setIsLoggedIn={setIsLoggedIn} />
  </Flex>
);

export default LoggedInUserSection;
