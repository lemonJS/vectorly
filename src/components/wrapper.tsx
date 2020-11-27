import React from 'react';

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { layoutSelector } from '../lib/layout/selectors'
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
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 64px 1fr;
  height: 100vh;
  width: 100vw;
  
  &.menu-open {
    grid-template-columns: 360px 1fr;
  }
`;

export function Wrapper(props: Props): JSX.Element {
  const { menuOpen } = useSelector(layoutSelector);
  const status = menuOpen ? 'menu-open' : '';

  return (
    <div className={`${styles} ${status}`}>
      <Header />
      <Sidebar open={menuOpen} />
      <Content>
        {props.children}
      </Content>
    </div>
  );
}
