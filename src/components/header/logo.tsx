import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';

const styles = css`
  display: block;
  margin: 0 1rem;
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
