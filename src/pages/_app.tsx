import React from 'react';

import type { AppProps } from 'next/app';
import { injectGlobal } from '@emotion/css';

injectGlobal`  
  :root {
    --header-background-color: #ffffff;
    --sidebar-background-color: #36404a;
    --sidebar-navigation-background-color: #283037;
    
    --background-color: #ebeff2;
    --foreground-color: #ffffff;
    
    --primary-button-background-color: #4aacd9;
    --primary-button-border-color: #51aacc;
    --primary-button-text-color: #ffffff;
    
    --secondary-button-background-color: #ffffff;
    --secondary-button-border-color: #d9e0e6;
    --secondary-button-font-color: #d9e0e6;
    
    --primary-text-color: #2a2e37;
    --secondary-text-color: #878787;
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
  const { Component, pageProps } = props;
  return <Component {...pageProps} />
}
