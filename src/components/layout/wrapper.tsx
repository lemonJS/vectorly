import React from 'react';

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { Content } from '@components/layout/content';
import { Header } from '@components/layout/header';
import { Sidebar } from '@components/sidebar/sidebar';
import { editorSelector } from '@lib/editor/selectors';

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

  @media only screen and (max-width: 1024px) {
    grid-template-areas:
      'header'
      'content'
      'sidebar';
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 64px minmax(0, 1fr) 5rem;
    
    &.menu-open {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-rows: 64px minmax(0, 1fr) 48px;
  }
`;

export const Wrapper = (props: Props): JSX.Element => {
  const { menuOpen } = useSelector(editorSelector);
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
};
