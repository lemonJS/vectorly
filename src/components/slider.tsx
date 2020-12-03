import React from 'react';

import { css } from '@emotion/css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

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
      background: var(--sidebar-navigation-background-color);
      border: 2px solid var(--secondary-button-border-color);
      border-radius: 50%;
      cursor: pointer;
      height: 1.5rem;
      margin-top: -10px;
      width: 1.5rem;
    }
    
    &::-moz-range-thumb {
      background: var(--sidebar-navigation-background-color);
      border: 2px solid var(--secondary-button-border-color);
      border-radius: 50%;
      height: 1.5rem;
      width: 1.5rem;
    }
    
    &::-webkit-slider-runnable-track {
      background: var(--secondary-button-border-color);
      height: 2px;
      width: 100%;
    }
    
    &::-moz-range-track {
      background: var(--secondary-button-border-color);
      height: 2px;
      width: 100%;
    }
  }
`;

export function Slider(props: Props): JSX.Element {
  const { className } = props;

  return (
    <div className={`${styles} ${className}`}>
      <input type='range' {...props} />
    </div>
  );
}
