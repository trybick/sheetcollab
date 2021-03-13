import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'src/theme';

import { apolloEndpoint } from 'src/utils/api';
import App from 'src/components/App';

const client = new ApolloClient({
  uri: apolloEndpoint,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <ChakraProvider theme={theme} resetCSS>
          <App />
        </ChakraProvider>
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
