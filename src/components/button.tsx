import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const styles = css`
  background: var(--primary-button-background-color);
  border: 2px solid var(--primary-button-border-color);
  border-radius: .25rem;
  color: var(--primary-button-text-color);
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  height: 42px;
  line-height: 20px;
  padding: .5rem;
  
  i {
    font-size: 1rem;
    margin-left: .5rem;
    vertical-align: sub;
  }
  
  &.secondary {
    background: var(--secondary-button-background-color);
    border: 2px solid var(--secondary-button-border-color);
    color: var(--secondary-button-text-color);
    
    &:hover {
      background: var(--secondary-button-border-color);
      border-color: var(--secondary-button-border-color);
      color: var(--secondary-button-background-color);
    }
  }
`;

export function Button(props: Props): JSX.Element {
  const { children, className, ...rest } = props;

  return (
    <button className={`${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}