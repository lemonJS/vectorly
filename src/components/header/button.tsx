import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const styles = css`
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 2.5rem;
  margin: 0 .5rem;
  padding: 0;
  position: relative;
  width: 2.5rem;

  i {
    font-size: 1.5rem;
    margin: 0;
  }
  
  &.disabled {
    color: var(--gray-300);
    pointer-events: none;
  }

  &:hover {
    background: var(--gray-100);
    
    i {
      color: var(--primary);
    }
    
    &:after {
      display: block;
    }
  }
  
  &:after {
    background: var(--gray-700);
    border-radius: var(--border-radius-sm);
    color: white;
    content: attr(data-label);
    display: none;
    left: 50%;
    padding: .35rem;
    position: absolute;
    top: 3.5rem;
    transform: translate(-50%, 0);
    white-space: nowrap;
  }
`;

export const Button = (props: Props): JSX.Element => {
  const { className, children, ...rest } = props;

  return (
    <button className={`${styles} ${className}`} {...rest} data-label={props.label}>
      {children}
    </button>
  );
};
