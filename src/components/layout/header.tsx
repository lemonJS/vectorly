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
    width: 6rem;
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
