import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import { ROUTES } from 'helpers/routes/routeMap';
import Header from '../Header/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === ROUTES.LOGIN;

  return (
    <Box>
      {!isLoginPage && <Header />}
      <Box {...(!isLoginPage && { m: '0 auto', maxW: '1200px' })}>{children}</Box>
    </Box>
  );
};

export default Layout;
