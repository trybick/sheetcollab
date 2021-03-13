import { useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const shouldShowHeader = !(location.pathname === '/login');

  return (
    <>
      {shouldShowHeader && <Header />}
      {children}
    </>
  );
};

export default Layout;
