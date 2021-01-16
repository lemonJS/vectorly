import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { ColorPicker } from '@components/trays/color-picker';
import { Label } from '@components/label';
import { Input } from '@components/trays/input';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  padding: 0 1.5rem;
  
  .heading {
    align-items: center;
    display: flex;
    justify-content: space-between;
    
    label {
      width: 90px;
    }
  }
`;

export const Colors = (props: Props): JSX.Element => {
  const { fill, opacity } = props.element.props;

  const value = opacity ? Number(opacity) * 100 : 100;

  const handleColor = (hex: string) => {
    props.handleUpdate({ fill: hex });
  };

  const handleOpacity = (value: number) => {
    props.handleUpdate({ opacity: value / 100 });
  };

  return (
    <div className={styles}>
      <Label className='heading'>
        <div>
          Fill
        </div>
        <Input
          value={value}
          icon={<i className='ri-contrast-drop-line' />}
          suffix='%'
          handleChange={handleOpacity}
        />
      </Label>
      <ColorPicker selected={fill} handleChange={handleColor} />
    </div>
  );
};
