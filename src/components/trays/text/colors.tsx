import React from 'react';

import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { ColorPicker } from '../color-picker';
import { Label } from '../../label';
import { Opacity } from '../opacity';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
}

const styles = css`
  label {
   margin-top: 2rem;
  }
`;

export function Colors(props: Props): JSX.Element {
  const { fill, opacity } = props.element.props;

  function handleColor(hex: string) {
    props.handleUpdate({ fill: hex });
  }

  function handleOpacity(value: number) {
    props.handleUpdate({ opacity: value });
  }

  return (
    <div className={styles}>
      <Label>Colors</Label>
      <ColorPicker selected={fill} handleChange={handleColor} />
      <Opacity selected={opacity} handleUpdate={handleOpacity} />
    </div>
  );
}
