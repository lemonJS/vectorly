import React from 'react';

import { css } from '@emotion/css';
import { Input } from './input';

const styles = css`
  align-items: center;
  display: flex;
  
  input {
    border: none;
    color: var(--secondary-text-color);
  }
`;

export function Title(): JSX.Element {
  return (
    <div className={styles}>
      <Input placeholder='Project title' value='Untitled' />
    </div>
  );
}
