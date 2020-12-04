import React from 'react';

import type { AppContext, AppProps } from 'next/app';
import { injectGlobal } from '@emotion/css';
import { Provider } from 'react-redux';
import { getOrCreateStore } from '../lib/store';
import { setProject } from '../lib/project/actions';

interface Props extends AppProps {
  state: any;
}

injectGlobal`  
  :root {
    --header-background-color: #ffffff;
    --sidebar-background-color: #36404a;
    --sidebar-navigation-background-color: #283037;
    
    --primary-accent-color: #4aacd9;
    
    --background-color: #ebeff2;
    --foreground-color: #ffffff;
    
    --primary-button-background-color: #4aacd9;
    --primary-button-border-color: #51aacc;
    --primary-button-text-color: #ffffff;
    
    --secondary-button-background-color: none;
    --secondary-button-border-color: #d9e0e6;
    --secondary-button-text-color: #d9e0e6;
    
    --secondary-button-background-color: none;
    --secondary-button-border-color: #d9e0e6;
    --secondary-button-text-color: #d9e0e6;
    
    --tertiary-button-background-color: none;
    --tertiary-button-border-color: #e66767;
    --tertiary-button-text-color: #e66767;
    
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

const App = (props: Props) => {
  const { Component } = props;
  const store = getOrCreateStore(props.state);

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

App.getInitialProps = async (ctx: AppContext) => {
  const { id } = ctx.router.query;
  const store = getOrCreateStore(undefined);
  const res = await fetch(`http://localhost:3000/api/projects/${id}`);
  const project = await res.json();

  if (res.status !== 200) {
    throw new Error(project.error || 'Unknown error');
  }

  store.dispatch(setProject(project));
  return { state: store.getState() };
};

export default App;
