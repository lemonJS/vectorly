import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const styles = css`
  background: var(--secondary-button-background-color);
  border: 2px solid var(--secondary-button-border-color);
  border-radius: .25rem;
  color: var(--secondary-button-text-color);
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  height: 42px;
  line-height: 20px;
  padding: .5rem;
  position: relative;
  width: 100%;
`;

export function Input(props: Props): JSX.Element {
  const { className, ...rest } = props;

  return (
    <input className={`${styles} ${className}`} {...rest} />
  );
}
