import React from 'react';

import Link from 'next/link';
import { css } from '@emotion/css';

const styles = css`
  background: var(--foreground-color);
  border-radius: .25rem;
  padding: 1.5rem;
  
  .back-button {
    align-items: center;
    color: var(--primary-text-color);
    display: flex;
    text-decoration: none;
    
    i {
      display: block;
      margin-right: .5rem;
    }
    
    &:hover {
      color: var(--primary-accent-color);
    }
  }
`;

export function Title(): JSX.Element {
  return (
    <div className={styles}>
      <Link href='/'>
        <a className='back-button'>
          <i className='ri-arrow-left-line' />
          Back
        </a>
      </Link>
    </div>
  );
}
