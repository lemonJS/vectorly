import React from 'react';

import Image from 'next/image';
import { css } from '@emotion/css';

const styles = css`
  background: var(--header-background-color);
  display: flex;
  grid-area: header;
  justify-content: space-between;
  
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
        <a href='/' className='logo'>
          <Image src='/logo.svg' alt='logo' height='48' width='48' />
        </a>
      </div>
    </header>
  );
}
