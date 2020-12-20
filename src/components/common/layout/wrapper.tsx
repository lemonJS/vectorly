import React from 'react';

import { css } from '@emotion/css';
import { Content } from '@components/common/layout/content';
import { Header } from '@components/common/layout/header';
import { Footer } from '@components/common/layout/footer';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  display: grid;
  grid-template-areas: 
    'header'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 64px minmax(0, 1fr) 64px;
`;

export function Wrapper(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <Header />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </div>
  );
}
