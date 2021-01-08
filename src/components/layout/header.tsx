import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';
import { Options } from '@components/controls/options';

const styles = css`
  align-items: center;
  background: var(--sidebar-navigation-background-color);
  display: flex;
  grid-area: header;
  justify-content: space-between;
  z-index: 1;
  
  .logo {
    align-items: center;
    display: flex;
    justify-content: center;
    transition: transform .5s ease-in-out;
    width: 6rem;
    
    &:hover {
      transform: rotate(360deg);
    }
  }
`;

export const Header = (): JSX.Element => (
  <header className={styles}>
    <Link href='/'>
      <a className='logo'>
        <img src='/logo.svg' alt='logo' height='38' width='38' />
      </a>
    </Link>

    <Options />
  </header>
);
