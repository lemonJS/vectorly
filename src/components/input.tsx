import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const styles = css`
  background: white;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-sm);
  display: block;
  font: inherit;
  font-size: 14px;
  height: 42px;
  line-height: 20px;
  padding: .5rem;
  position: relative;
  width: 100%;
  
  &:hover,
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

export const Input = (props: Props): JSX.Element => {
  const { className, ...rest } = props;

  return (
    <input className={`${styles} ${className}`} {...rest} />
  );
};
