import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {}

const styles = css`
  background: white;
  border: 1px solid transparent;
  border-radius: .25rem;
  cursor: pointer;
  height: 32px;
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
    padding: .3rem 1.5rem .3rem .5rem;
    width: 100%;
  }
  
  span {
    align-items: center;
    background: #eee;
    border-radius: 0 .25rem .25rem 0;
    display: none;
    height: 30px;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
  }
  
  i {
    font-size: 1.5rem;
    margin: 0;
  }
  
  &:hover {
    border-color: #bbb;
    
    span {
      display: flex;
    }
  }
`;

export const Select = (props: Props): JSX.Element => {
  const { className, children, ...rest } = props;

  return (
    <div className={`${styles} ${className}`}>
      <select {...rest}>
        {children}
      </select>
      <span>
        <i className='ri-arrow-drop-down-line' />
      </span>
    </div>
  );
};
