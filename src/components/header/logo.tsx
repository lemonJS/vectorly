import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';

const styles = css`
  margin: 0 1rem;
  
  img {
    display: block;
  }
`;

export const Logo = (): JSX.Element => (
  <Link href='/'>
    <a>
      <img
        alt='logo'
        className={styles}
        height='14'
        src='/logo.svg'
        width='103'
      />
    </a>
  </Link>
);
