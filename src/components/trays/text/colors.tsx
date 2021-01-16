import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Label } from '@components/trays/label';
import { Input } from '@components/trays/input';
import { ColorPicker } from '@components/trays/color-picker';

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
  
  .picker {
    padding: 0 1.5rem;
  }
`;

export const Colors = (props: Props): JSX.Element => {
  const { fill, opacity } = props.element.props;

  const value = opacity ? Number(opacity) * 100 : 100;

  const handleColor = (hex: string) => {
    props.handleUpdate({ fill: hex });
  };

  const handleOpacity = (value: string) => {
    props.handleUpdate({ opacity: Number(value) / 100 });
  };

  return (
    <div className={styles}>
      <Label>
        <span>Fill</span>
        <Input
          value={value}
          icon={<i className='ri-contrast-drop-line' />}
          suffix='%'
          handleChange={handleOpacity}
        />
      </Label>
      <div className='picker'>
        <ColorPicker selected={fill} handleChange={handleColor} />
      </div>
    </div>
  );
};
