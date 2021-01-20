import React from 'react';

import { AppProps } from 'next/app';
import { injectGlobal } from '@emotion/css';
import { Provider } from 'react-redux';
import { store } from '@store/store';

injectGlobal`
  @import 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';
  @import 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap';
  
  :root {
    --primary: #6946F6;
    --background: #e5e5e5;
    --foreground: #ffffff;

    --gray-100: #eeeeee;
    --gray-200: #cccccc;
    --gray-300: #bbbbbb;
    --gray-500: #999999;
    --gray-700: #111111;
  
    --border-radius-sm: .25rem;
    --border-radius-md: .5rem;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    background-color: var(--background);
    background-image: radial-gradient(var(--gray-200) 10%, var(--background) 10%);
    background-position: 0 0;
    background-size: 1rem 1rem;
    color: var(--gray-700);
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
