import React from 'react';

import type { Element } from '../../../types/project';
import { Label } from '../../label';
import { ColorPicker } from '../color-picker';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
}

export function Background(props: Props): JSX.Element {
  const { fill } = props.element.props;

  function handleFill(color: string) {
    props.handleUpdate({ fill: color });
  }

  return (
    <div>
      <Label>Background Color</Label>
      <ColorPicker selected={fill} handleChange={handleFill} />
    </div>
  );
}