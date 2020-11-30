import React from 'react';

import type { Transform } from '../../types/editor';
import { css } from '@emotion/css';
import { Move } from './move';
import { Rotate } from './rotate';

interface Props {
  box: SVGRect;
  handleTransform: (transform: Partial<Transform>) => void;
}

const styles = css`  
  .selection-container {
    overflow: visible;
    position: absolute;
    z-index: 2;
  }
  
  .selection {
    border: 1px solid var(--primary-accent-color);
    height: 100%;
    position: relative;
    width: 100%;
  }
  
  .scale {
    background: var(--primary-accent-color);
    border-radius: 50%;
    height: 1rem;
    position: absolute;
    width: 1rem;
    
    &.top-left {
      left: -.5rem;
      top: -.5rem;
    }
    
    &.top-right {
      right: -.5rem;
      top: -.5rem;
    }
    
    &.bottom-right {
      bottom: -.5rem;
      right: -.5rem;
    }
    
    &.bottom-left {
      bottom: -.5rem;
      left: -.5rem;
    }
  }
  
  .handle {
    align-items: center;
    background: var(--primary-accent-color);
    border-radius: 50%;
    display: flex;
    height: 1.5rem;
    justify-content: center;
    left: 50%;
    margin-left: -.75rem;
    position: absolute;
    width: 1.5rem;
    z-index: 3;
    
    i {
      color: white;
      font-size: 1.25rem;
    }
    
    &.top {
      top: -2rem;
    }
    
    &.bottom {
      bottom: -2rem;
    }
  }
`;

export const Selection = React.memo((props: Props) => {
  const padding = 8;
  const { width, height } = props.box;

  return (
    <g className={styles}>
      <foreignObject className='selection-container' width={width + (padding * 2)} height={height + (padding * 2)} x={-padding} y={-padding}>
        <div className='selection'>
          <div className='scale top-left' />
          <div className='scale top-right' />
          <div className='scale bottom-right' />
          <div className='scale bottom-left' />
        </div>
        <Move padding={padding} box={props.box} handleTransform={props.handleTransform}  />
        <Rotate handleTransform={props.handleTransform} />
      </foreignObject>
    </g>
  );
}, () => true);
