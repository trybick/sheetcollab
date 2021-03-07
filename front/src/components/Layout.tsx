import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const shouldShowHeader = !(router.pathname === '/login');

  return (
    <>
      <Head>
        <title>Sheet Collab</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {shouldShowHeader && <Header />}
      {children}
    </>
  );
};

export default Layout;
