import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  background: white;
  border: 2px solid transparent;
  border-radius: .25rem;
  cursor: pointer;
  height: 300px;
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export function Design(): JSX.Element {
  return (
    <div className={styles}>

    </div>
  );
}
