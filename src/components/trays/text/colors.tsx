import React from 'react';

import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { ColorPicker } from '../color-picker';
import { Label } from '../../label';

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
  const { fill } = props.element.props;

  function handleColor(hex: string) {
    props.handleUpdate({ fill: hex });
  }

  return (
    <div className={styles}>
      <Label>Colors</Label>
      <ColorPicker selected={fill} handleChange={handleColor} />
    </div>
  );
}