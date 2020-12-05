import React from 'react';

import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { Label } from '../../label';
import { ColorPicker } from '../color-picker';
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
