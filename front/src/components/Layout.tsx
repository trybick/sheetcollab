import { useRouter } from 'next/router';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const shouldShowHeader = !(router.pathname === '/login');

  return (
    <>
      {shouldShowHeader && <Header />}
      {children}
    </>
  );
};

export default Layout;
