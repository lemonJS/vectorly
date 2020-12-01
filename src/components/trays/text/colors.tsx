import React from 'react';

import { css } from '@emotion/css';
import { colors } from '../data/colors';
import { Label } from '../../label';

const styles = css`
  label {
   margin-top: 2rem;
  }
  
  .color-grid {
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    
    .color {
      border: 3px solid var(--sidebar-navigation-background-color);
      border-radius: 50%;
      height: 2rem;
      width: 2rem;
      
      &:hover {
        scale: 2;
      }
    }
  }
`;

export function Colors(): JSX.Element {
  return (
    <div className={styles}>
      <Label>Colors</Label>

      <div className='color-grid'>
        {colors.map(color => (
          <div className='color' style={{ backgroundColor: color.hex }} />
        ))}
      </div>
    </div>
  );
}