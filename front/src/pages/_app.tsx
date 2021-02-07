import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { AppProps } from 'next/app';

// The Component prop is the active page
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
