import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { ColorPicker } from '@components/trays/color-picker';
import { Label } from '@components/label';
// import { Opacity } from '@components/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  padding: 0 1.5rem;
`;

export const Colors = (props: Props): JSX.Element => {
  const { fill } = props.element.props;

  const handleColor = (hex: string) => {
    props.handleUpdate({ fill: hex });
  };

  // const handleOpacity = (value: number) => {
  //   props.handleUpdate({ opacity: value });
  // };

  return (
    <div className={styles}>
      <Label>Fill</Label>
      <ColorPicker selected={fill} handleChange={handleColor} />
      {/*<Opacity selected={opacity} handleUpdate={handleOpacity} />*/}
    </div>
  );
};
