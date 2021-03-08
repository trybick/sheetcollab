import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';
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
      <ChakraProvider theme={theme} resetCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
