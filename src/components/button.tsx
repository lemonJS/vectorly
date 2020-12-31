import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

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
  outline: none;
  padding: .5rem;
  
  i {
    font-size: 1rem;
    margin-left: .5rem;
    vertical-align: sub;
  }
  
  &:focus {
    outline: 1px solid var(--primary-accent-color);
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
  
  &.tertiary {
    background: var(--tertiary-button-background-color);
    border: 2px solid var(--tertiary-button-border-color);
    color: var(--tertiary-button-text-color);
    
    &:hover {
      background: var(--tertiary-button-border-color);
      border-color: var(--tertiary-button-border-color);
      color: var(--tertiary-button-background-color);
    }
  }
  
  &:disabled {
    opacity: .8;
    pointer-events: none;
  }
`;

export const Button = (props: Props): JSX.Element => {
  const { children, className, ...rest } = props;

  return (
    <button className={`${styles} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
};
