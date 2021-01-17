import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { ColorPicker } from '@components/trays/color-picker';
import { Label } from '@components/trays/label';
import { Scale } from '@components/scale';
import { Button } from '@components/button';
import { ButtonGroup } from '@components/trays/button-group';
import { Input } from '@components/trays/input';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  label {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .input {
      width: 50px;
    }
  }
  
  .scale {
    margin: 0 1rem 1.5rem 1rem;
  }
  
  .button-group {
    margin-bottom: 1.5rem;
  }
  
  .color-picker {
    padding: 0 1.5rem;
  }
`;

export const Border = (props: Props): JSX.Element => {
  const { strokeWidth, strokeDasharray, stroke, strokeOpacity } = props.element.props;

  const opacity = strokeOpacity ? Number(strokeOpacity) * 100 : 100;

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

  const handleStrokeOpacity = (value: string) => {
    props.handleUpdate({ strokeOpacity: Number(value) / 100 });
  };

  return (
    <div className={styles}>
      <Label>Border Thickness</Label>

      <Scale min={1} max={20} value={Number(strokeWidth)} handleChange={handleBorderWidth} />

      <Label>Border Style</Label>

      <ButtonGroup>
        <Button onClick={handleBorderSolid} className={`${strokeDasharray === 'none' ? 'selected' : '' } secondary`}>
          <i className='ri-subtract-line' />
        </Button>
        <Button onClick={handleBorderDashed} className={`${strokeDasharray !== 'none' ? 'selected' : '' } secondary`}>
          <i className='ri-more-fill' />
        </Button>
        <Button onClick={handleBorderHidden} className={`${stroke === 'transparent' ? 'selected' : '' } secondary`}>
          <i className='ri-eye-off-line' />
        </Button>
      </ButtonGroup>

      <Label>
        <span>Border Color</span>
        <Input
          value={opacity}
          icon={<i className='ri-contrast-drop-line' />}
          suffix='%'
          handleChange={handleStrokeOpacity}
        />
      </Label>

      <ColorPicker selected={stroke} handleChange={handleBorderColor} />
    </div>
  );
};
