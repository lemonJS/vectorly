import React from 'react';

import { AppProps } from 'next/app';
import { injectGlobal } from '@emotion/css';
import { Provider } from 'react-redux';
import { cssVariables } from '@lib/config';
import { store } from '@lib/store';

injectGlobal`  
  :root {
    ${cssVariables}
  }
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    background-color: var(--background-color);
    background-image: radial-gradient(#ccc 10%, var(--background-color) 10%);
    background-position: 0 0;
    background-size: 1rem 1rem;
    color: var(--primary-text-color);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
