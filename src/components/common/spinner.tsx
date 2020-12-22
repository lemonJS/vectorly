import React from 'react';

import { css } from '@emotion/css';

interface Props {
  className?: string;
}

const styles = css`
  display: flex;
  justify-content: center;
  width: 100%;
  
  .spinner {
    display: inline-block;
    height: 1.25rem;
    position: relative;
    width: 1.25rem;
    
    div {
      animation: spinner 1.2s cubic-bezier(.5, 0, .5, 1) infinite;
      border: 3px solid white;
      border-color: white transparent transparent transparent;
      border-radius: 50%;
      display: block;
      height: 1.25rem;
      position: absolute;
      width: 1.25rem;
      
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

export function Spinner(props: Props): JSX.Element {
  return (
    <div className={`${styles} ${props.className}`}>
      <div className='spinner'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
