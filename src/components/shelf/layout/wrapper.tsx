import React from 'react';

import { css } from '@emotion/css';
import { Content } from '@components/shelf/layout/content';
import { Header } from '@components/shelf/layout/header';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  display: grid;
  grid-template-areas: 
    'header'
    'content';
  grid-template-columns: 1fr;
  grid-template-rows: 64px minmax(0, 1fr);
  height: 100vh;
  width: 100vw;
`;

export function Wrapper(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <Header />
      <Content>
        {props.children}
      </Content>
    </div>
  );
}
