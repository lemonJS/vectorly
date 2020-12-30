import React from 'react';

import { css } from '@emotion/css';
import { Label } from '@components/label';
import { Slider } from '@components/slider';

interface Props {
  title?: string;
  selected: string | number;
  handleUpdate: (value: number) => void;
}

const styles = css`
  label {
    margin-top: 2rem;
  }
`;

export function Opacity(props: Props): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element = event.target as HTMLInputElement;
    props.handleUpdate(Number(element.value));
  }

  return (
    <div className={styles}>
      <Label>{props.title || 'Opacity'}</Label>
      <Slider min={0} max={1} step={0.1} value={props.selected ?? 1} onChange={handleChange} />
    </div>
  );
}
