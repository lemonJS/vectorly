import React from 'react';

import { css } from '@emotion/css';
import { Content } from './content';
import { Header } from './header';
import { Sidebar } from './sidebar';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  display: grid;
  grid-template-areas: 
    'header header'
    'sidebar content';
  grid-template-columns: 360px 1fr;
  grid-template-rows: 64px 1fr;
  height: 100vh;
  width: 100vw;
`;

export function Wrapper(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <Header />
      <Sidebar />
      <Content>
        {props.children}
      </Content>
    </div>
  );
}
