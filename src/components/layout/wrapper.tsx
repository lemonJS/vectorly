import React from 'react';

import { css } from '@emotion/css';
import { Content } from '@components/layout/content';
import { Header } from '@components/header/header';
import { Sidebar } from '@components/sidebar/sidebar';
import { Tray } from '@components/trays/tray';
import { Listeners } from '@components/layout/listeners';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = (props: Props): JSX.Element => (
  <Listeners>
    <div className={styles}>
      <Header />
      <Sidebar />
      <Content>
        {props.children}
      </Content>
      <Tray />
    </div>
  </Listeners>
);

