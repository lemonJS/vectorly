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
  
  .avatar {
    align-items: center;
    background: var(--primary-accent-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-left: .75rem;
    height: 1.5rem;
    width: 1.5rem;
  }
  
  i {
     color: white;
  }
`;

export function User(): JSX.Element {
  return (
    <button className={styles}>
      <span>Guest</span>
      <span className='avatar'>
        <i className='ri-user-line' />
      </span>
    </button>
  );
}
