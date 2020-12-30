import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {}

const styles = css`
  background: var(--secondary-button-background-color);
  border: 2px solid var(--secondary-button-border-color);
  border-radius: .25rem;
  cursor: pointer;
  height: 42px;
  line-height: 20px;
  position: relative;
  width: 100%;
  
  select {
    appearance: none;
    background: none;
    border: none;
    color: var(--secondary-button-text-color);
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    padding: .5rem 1.5rem .5rem .5rem;
    width: 100%;
  }
  
  i {
    color: var(--secondary-button-text-color);
    font-size: 1.25rem;
    pointer-events: none;
    position: absolute;
    right: .5rem;
    top: .5rem;
  }
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export const Select = (props: Props): JSX.Element => {
  const { className, children, ...rest } = props;

  return (
    <div className={`${styles} ${className}`}>
      <select {...rest}>
        {children}
      </select>
      <i className='ri-arrow-drop-down-line' />
    </div>
  );
};
