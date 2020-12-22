import React from 'react';

import { css } from '@emotion/css';
import { Element, ElementProps } from '@type/project';
import { Label } from '@components/common/label';
import { ColorPicker } from '@components/builder/trays/color-picker';
import { Opacity } from '@components/builder/trays/opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<ElementProps>) => void;
}

const styles = css`
  label {
    margin-top: 2rem;
  }
`;

export function Background(props: Props): JSX.Element {
  const { fill, fillOpacity } = props.element.props;

  function handleFill(color: string) {
    props.handleUpdate({ fill: color });
  }

  function handleFillOpacity(value: number) {
    props.handleUpdate({ fillOpacity: value });
  }

  return (
    <div className={styles}>
      <Label>Background Color</Label>
      <ColorPicker selected={fill} handleChange={handleFill} />
      <Opacity title='Background Opacity' selected={fillOpacity} handleUpdate={handleFillOpacity} />
    </div>
  );
}
