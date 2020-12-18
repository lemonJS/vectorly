import React from 'react';

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { Content } from '@components/builder/layout/content';
import { Header } from '@components/builder/layout/header';
import { Sidebar } from '@components/builder/layout/sidebar';
import { layoutSelector } from '@lib/layout/selectors';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  display: grid;
  grid-template-areas: 
    'header header'
    'sidebar content';
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 64px minmax(0, 1fr);
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
