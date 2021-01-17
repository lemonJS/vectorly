import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  border: 1px solid transparent;
  border-radius: var(--border-radius-sm);
  display: flex;
  margin: 0 1.5rem;
  width: 6rem;

  button {
    align-items: center;
    border: none !important;
    display: flex;
    height: 2rem;
    justify-content: center;
    padding: 0;
    width: 2rem;

    i {
      margin: 0;
    }
    
    &:hover,
    &.selected {
      background: var(--gray-100);
      color: var(--primary);
    }
  }
  
  &:hover {
    border-color: var(--gray-300);
  }
`;

export const ButtonGroup = (props: Props): JSX.Element => (
  <div className={`button-group ${styles}`}>
    {props.children}
  </div>
);

