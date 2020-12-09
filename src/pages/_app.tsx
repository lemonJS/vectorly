import React from 'react';

import type { AppContext, AppProps } from 'next/app';
import { injectGlobal } from '@emotion/css';
import { Provider } from 'react-redux';
import { cssVariables } from '../lib/config';
import { getOrCreateStore } from '../lib/store';
import { setProject } from '../lib/project/actions';

interface Props extends AppProps {
  state: any;
}

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
