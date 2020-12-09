import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { ColorPicker } from '@components/builder/trays/color-picker';
import { Label } from '@components/common/label';
import { Opacity } from '@components/builder/trays/opacity';

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
