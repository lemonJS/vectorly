import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Label } from '@components/trays/label';
import { ColorPicker } from '@components/trays/color-picker';
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

  .color-picker {
    padding: 0 1.5rem;
  }
`;

export const Background = (props: Props): JSX.Element => {
  const { fill, fillOpacity } = props.element.props;

  const opacity = fillOpacity ? Number(fillOpacity) * 100 : 100;

  const handleFill = (color: string) => {
    props.handleUpdate({ fill: color });
  };

  const handleFillOpacity = (value: string) => {
    props.handleUpdate({ fillOpacity: Number(value) * 100 });
  };

  return (
    <div className={styles}>
      <Label>
        <span>Background Color</span>
        <Input
          value={opacity}
          icon={<i className='ri-contrast-drop-line' />}
          suffix='%'
          handleChange={handleFillOpacity}
        />
      </Label>
      <ColorPicker selected={fill} handleChange={handleFill} />
    </div>
  );
};
