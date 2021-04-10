import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import Header from '../Header/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const shouldShowHeader = !(location.pathname === '/login');

  return (
    <Box>
      {shouldShowHeader && <Header />}
      <Box w="1200px" m="0 auto">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
