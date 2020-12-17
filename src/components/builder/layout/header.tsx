import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/css';
import { Menu } from '@components/builder/layout/menu';
import { Title } from '@components/builder/layout/title';

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
        <Link href='/'>
          <a className='logo'>
            <Image src='/logo.svg' alt='logo' height='48' width='48' />
          </a>
        </Link>
        <Title />
      </div>
      <Menu />
    </header>
  );
}
