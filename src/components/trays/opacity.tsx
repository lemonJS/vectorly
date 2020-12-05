import React from 'react';

import type { Element } from '../../types/project';
import { css } from '@emotion/css';
import { Label } from '../label';
import { Slider } from '../slider';

interface Props {
  element: Element;
  handleUpdate: (update: Partial<React.SVGProps<SVGElement>>) => void;
}

const styles = css`
  label {
    margin-top: 2rem;
  }
`;

export function Opacity(props: Props): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element = event.target as HTMLInputElement;
    props.handleUpdate({ opacity: Number(element.value) });
  }

  return (
    <div className={styles}>
      <Label>Opacity</Label>
      <Slider min={0} max={1} step={0.1} value={props.element.props.opacity ?? 1} onChange={handleChange} />
    </div>
  );
}
