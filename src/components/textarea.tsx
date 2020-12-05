import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const styles = css`
  background: var(--secondary-button-background-color);
  border: 2px solid var(--secondary-button-border-color);
  border-radius: .25rem;
  color: var(--secondary-button-text-color);
  display: block;
  font: inherit;
  font-size: 14px;
  line-height: 20px;
  min-height: 42px;
  padding: .5rem;
  position: relative;
  width: 100%;
`;

export function TextArea(props: Props): JSX.Element {
  const { className, ...rest } = props;

  return (
    <textarea className={`${styles} ${className}`} {...rest} />
  );
}
