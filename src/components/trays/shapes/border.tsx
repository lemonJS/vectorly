import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { ColorPicker } from '@components/trays/color-picker';
import { Label } from '@components/label';
import { Scale } from '@components/scale';
import { Button } from '@components/button';
import { Opacity } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  label {
    margin-top: 2rem;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    
    button {
      padding: 0;
      width: 60px;
      
      i {
        margin: 0;
      }
      
      &.selected {
        background: var(--secondary-button-border-color);
        border-color: var(--secondary-button-border-color);
        color: var(--secondary-button-background-color);
      }
    }
  }
`;

export const Border = (props: Props): JSX.Element => {
  const { strokeWidth, strokeDasharray, stroke, strokeOpacity } = props.element.props;

  const handleBorderWidth = (value: number) => {
    props.handleUpdate({ strokeWidth: value });
  };

  const handleBorderSolid = () => {
    props.handleUpdate({ strokeDasharray: 'none' });
  };

  const handleBorderDashed = () => {
    props.handleUpdate({ strokeDasharray: '5' });
  };

  const handleBorderHidden = () => {
    props.handleUpdate({ stroke: stroke === 'transparent' ? '#000' : 'transparent' });
  };

  const handleBorderColor = (hex: string) => {
    props.handleUpdate({ stroke: hex });
  };

  const handleStrokeOpacity = (value: number) => {
    props.handleUpdate({ strokeOpacity: value });
  };

  return (
    <div className={styles}>
      <Label>Border Thickness</Label>
      <Scale min={1} max={20} value={Number(strokeWidth)} handleChange={handleBorderWidth} />

      <Label>Border Style</Label>
      <div className='button-group'>
        <Button onClick={handleBorderSolid} className={`${strokeDasharray === 'none' ? 'selected' : '' } secondary`}>
          <i className='ri-subtract-line' />
        </Button>
        <Button onClick={handleBorderDashed} className={`${strokeDasharray !== 'none' ? 'selected' : '' } secondary`}>
          <i className='ri-more-fill' />
        </Button>
        <Button onClick={handleBorderHidden} className={`${stroke === 'transparent' ? 'selected' : '' } secondary`}>
          <i className='ri-eye-off-line' />
        </Button>
      </div>

      <Label>Border Color</Label>
      <ColorPicker selected={stroke} handleChange={handleBorderColor} />
      <Opacity title='Border Opacity' selected={strokeOpacity} handleUpdate={handleStrokeOpacity} />
    </div>
  );
};
