import React from 'react';

import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { colors } from '../data/colors';
import { Label } from '../../label';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
}

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
      
      &.selected {
        border-color: white;
      }
    }
  }
`;

export function Colors(props: Props): JSX.Element {
  const { fill } = props.element.props;

  function handleColor(hex: string) {
    props.handleUpdate({ fill: hex });
  }

  return (
    <div className={styles}>
      <Label>Colors</Label>

      <div className='color-grid'>
        {colors.map(color => (
          <div
            key={color.hex}
            className={`color ${color.hex === fill ? 'selected' : ''}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleColor(color.hex)}
          />
        ))}
      </div>
    </div>
  );
}