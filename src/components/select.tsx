import React from 'react';

import { css } from '@emotion/css';

type Props = React.InputHTMLAttributes<HTMLSelectElement>

const styles = css`
  background: white;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  height: 42px;
  line-height: 20px;
  position: relative;
  width: 100%;
  
  select {
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    padding: .5rem 1.5rem .5rem .5rem;
    width: 100%;
  }
  
  i {
    font-size: 1.25rem;
    pointer-events: none;
    position: absolute;
    right: .5rem;
    top: .5rem;
  }
  
  &:hover {
    border-color: var(--primary);
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
