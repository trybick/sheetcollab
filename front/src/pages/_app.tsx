import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@theme';
import Layout from 'components/Layout';
import { apolloEndpoint } from 'utils/api';

const client = new ApolloClient({
  uri: apolloEndpoint,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <ChakraProvider theme={theme} resetCSS>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
