import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';

const styles = css`
  background: var(--header-background-color);
  display: flex;
  grid-area: header;
  justify-content: space-between;
  z-index: 1;
  
  .title {
    display: flex;
    
    .logo {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 6rem;    
    }
  }
`;

export function Header(): JSX.Element {
  return (
    <header className={styles}>
      <div className='title'>
        <Link href='/'>
          <a className='logo'>
            <img src='/logo.svg' alt='logo' height='48' width='48' />
          </a>
        </Link>
      </div>
    </header>
  );
}
