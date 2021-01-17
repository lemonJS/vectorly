import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  secondary?: boolean;
}

const styles = css`
  background: var(--primary);
  border: 1px solid var(--primary);
  border-radius: var(--border-radius-sm);
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
    outline: 1px solid var(--primary);
  }
  
  &.secondary {
    background: white;
    border: 1px solid var(--gray-300);
    color: var(--gray-700);
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
