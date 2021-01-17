import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const styles = css`
  align-items: center;
  display: flex;
  height: 42px;
  
  input {
    appearance: none;
    background: transparent;
    width: 100%;
    
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    
    &:focus {
      outline: none;
    }
    
    &::ms-track {
      background: transparent;
      border-color: transparent;
      color: transparent;
      cursor: pointer;
      width: 100%;
    }
    
    &::-webkit-slider-thumb {
      appearance: none;
      background: var(--primary);
      border: 2px solid var(--gray-500);
      border-radius: 50%;
      cursor: pointer;
      height: 1.5rem;
      margin-top: -10px;
      width: 1.5rem;
      
      &:hover {
        background: var(--primary);
      }
    }
    
    &::-moz-range-thumb {
      background: var(--primary);
      border: 2px solid var(--gray-500);
      border-radius: 50%;
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
      
      &:hover {
        background: var(--primary);
      }
    }
    
    &::-webkit-slider-runnable-track {
      background: var(--gray-500);
      height: 2px;
      width: 100%;
    }
    
    &::-moz-range-track {
      background: var(--gray-500);
      height: 2px;
      width: 100%;
    }
  }
`;

export const Slider = (props: Props): JSX.Element => {
  const { className } = props;

  return (
    <div className={`${styles} ${className}`}>
      <input type='range' {...props} />
    </div>
  );
};
