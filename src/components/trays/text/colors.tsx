import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { ColorPicker } from '@components/trays/color-picker';
import { Label } from '@components/label';
import { Opacity } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  label {
   margin-top: 2rem;
  }
`;

export const Colors = (props: Props): JSX.Element => {
  const { fill, opacity } = props.element.props;

  const handleColor = (hex: string) => {
    props.handleUpdate({ fill: hex });
  };

  const handleOpacity = (value: number) => {
    props.handleUpdate({ opacity: value });
  };

  return (
    <div className={styles}>
      <Label>Colors</Label>
      <ColorPicker selected={fill} handleChange={handleColor} />
      <Opacity selected={opacity} handleUpdate={handleOpacity} />
    </div>
  );
};
