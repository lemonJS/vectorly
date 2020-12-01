import React from 'react';

import { css } from '@emotion/css';
import { shapes } from '../data/shapes';
import { Input } from '../../input';
import { Shape } from './shape';

const styles = css` 
  .shapes {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    padding-top: 1.5rem;
  }
  
  .shape {
    background: var(--sidebar-navigation-background-color);
    border-radius: .25rem;
    cursor: pointer;
    height: 100px;
    
    &:hover {
      transform: translate(-2px, -2px);
    }
    
    svg {
      height: 100%;
      width: 100%;
    }
  }
`;

export function Create(): JSX.Element {
  return (
    <div className={styles}>
      <Input placeholder='Search...' />

      <div className='shapes'>
        {shapes.map(shape => (
          <Shape key={shape.id} shape={shape} />
        ))}
      </div>
    </div>
  );
}
