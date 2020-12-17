import React from 'react';

import { AppProps } from 'next/app';
import { injectGlobal } from '@emotion/css';
import { ApolloProvider } from '@apollo/client';
import { cssVariables } from '@lib/config';
import { client } from '@lib/client';
import { Wrapper } from '@components/common/wrapper';

injectGlobal`  
  :root {
    ${cssVariables}
  }
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    background: var(--background-color);
    color: var(--primary-text-color);
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps, router } = props;

  return (
    <ApolloProvider client={client}>
      <Wrapper route={router.route}>
        <Component {...pageProps} />
      </Wrapper>
    </ApolloProvider>
  );
}
