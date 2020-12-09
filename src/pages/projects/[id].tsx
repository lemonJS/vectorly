import React from 'react';

import Head from 'next/head';
import { NextPageContext } from 'next';
import { Provider } from 'react-redux';
import { State } from '@type/redux';
import { SVG } from '@components/builder/svg/svg';
import { Save } from '@components/builder/layout/save';
import { Wrapper } from '@components/builder/layout/wrapper';
import { getOrCreateStore } from '@lib/store';
import { setProject } from '@lib/project/actions';

interface Props {
  state: State;
}

export default function Project(props: Props): JSX.Element {
  const store = getOrCreateStore(props.state);

  return (
    <Provider store={store}>
      <Save>
        <Wrapper>
          <Head>
            <title>SVG Editor</title>
          </Head>
          <SVG />
        </Wrapper>
      </Save>
    </Provider>
  );
}

Project.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const store = getOrCreateStore(undefined);
  const res = await fetch(`http://localhost:3000/api/projects/${id}`);
  const project = await res.json();

  if (res.status !== 200) {
    throw new Error(project.error || 'Unknown error');
  }

  store.dispatch(setProject(project));
  return { state: store.getState() };
};
