import React from 'react';

import { AppProps } from 'next/app';
import { injectGlobal } from '@emotion/css';
import { cssVariables } from '@lib/config';

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

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default App;
