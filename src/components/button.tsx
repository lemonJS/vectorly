import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  secondary?: boolean;
}

const styles = css`
  background: var(--primary-button-background-color);
  border: 1px solid var(--primary-button-border-color);
  border-radius: .25rem;
  cursor: pointer;
  color: white;
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
    background: white;
    border: 1px solid var(--secondary-accent-color);;
    color: #111;
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
    opacity: .5;
    pointer-events: none;
  }
`;

export const Button = (props: Props): JSX.Element => {
  const { children, className, secondary, ...rest } = props;

  return (
    <button className={`${styles} ${secondary ? 'secondary' : ''} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
};
