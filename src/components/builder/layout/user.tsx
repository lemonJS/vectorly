import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  align-items: center;
  background: none;
  border: none;
  border-radius: .25rem;
  color: var(--primary-text-color);
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: 14px;
  margin-left: 1rem;
  padding: .5rem;
  
  i {
    margin-left: .5rem;
  }
`;

export function User(): JSX.Element {
  return (
    <button className={styles}>
      <span>Guest</span>
      <i className='ri-arrow-down-s-line' />
    </button>
  );
}
