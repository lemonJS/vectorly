import React from 'react';

import { css } from '@emotion/css';
import { colors } from '@components/trays/data/colors';

interface Props {
  selected: string;
  handleChange: (value: string) => void;
}

const styles = css`
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
`;

export function ColorPicker(props: Props): JSX.Element {
  return (
    <div className={styles}>
      {colors.map(color => (
        <div
          key={color.hex}
          className={`color ${color.hex === props.selected ? 'selected' : ''}`}
          style={{ backgroundColor: color.hex }}
          onClick={() => props.handleChange(color.hex)}
        />
      ))}
    </div>
  );
}
