import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  width: 100%;
  
  .spinner {
    display: inline-block;
    height: 5rem;
    position: relative;
    width: 5rem;
    
    div {
      animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border: .5rem solid var(--primary-accent-color);
      border-color: var(--primary-accent-color) transparent transparent transparent;
      border-radius: 50%;
      display: block;
      height: 4rem;
      margin: .5rem;
      position: absolute;
      width: 4rem;
      
      &:nth-child(1) {
        animation-delay: -0.45s;
      }
      
      &:nth-child(2) {
        animation-delay: -0.3s;
      }
      
      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
    
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export function Spinner(): JSX.Element {
  return (
    <div className={styles}>
      <div className='spinner'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
