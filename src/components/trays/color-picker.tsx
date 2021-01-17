import React from 'react';

import { css } from '@emotion/css';
import { colors } from '@components/trays/data/colors';

interface Props {
  selected: string;
  handleChange: (value: string) => void;
}

const styles = css`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(28px, 1fr));
  
  .color {
    border: 2px solid var(--gray-100);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    
    &:hover {
      transform: scale(2);
    }
    
    &.selected {
      border-color: white;
    }
  }
`;

export const ColorPicker = (props: Props): JSX.Element => (
  <div className={`color-picker ${styles}`}>
    {colors.map(color => (
      <div
        key={color}
        className={`color ${color === props.selected ? 'selected' : ''}`}
        style={{ backgroundColor: color }}
        onClick={() => props.handleChange(color)}
      />
    ))}
  </div>
);

