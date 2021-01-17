import React from 'react';

import { css } from '@emotion/css';

interface Props {
  name: string;
  disabled: boolean;
  handleClick: VoidFunction;
}

const styles = css`
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  height: 2rem;
  font-size: 1rem;
  margin-bottom: .5rem;
  padding: .25rem .5rem;
  text-align: left;
  width: 100%;

  &:hover {
    background: var(--gray-100);
    color: var(--primary);
  }
  
  &:disabled {
    opacity: .75;
    pointer-events: none;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const MenuItem = (props: Props): JSX.Element => (
  <button disabled={props.disabled} className={styles} onClick={props.handleClick}>
    {props.name}
  </button>
);
