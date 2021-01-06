import React from 'react';

import { css } from '@emotion/css';
import { Label } from '@components/label';
import { presets } from '@components/trays/data/canvas';
import { PresetsItem } from '@components/trays/canvas/presets-item';

interface Props {
  height: number;
  width: number;
  handleChange: (width: number, height: number) => void;
}

const styles = css`
  .presets {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  }
`;

export const Presets = (props: Props): JSX.Element => {
  const getActivePresetId = presets
    .filter(p => p.height === props.height && p.width === props.width)
    .map(p => p.id);

  return (
    <div className={styles}>
      <Label>Presets</Label>

      <div className='presets'>
        {presets.map(preset => (
          <PresetsItem
            key={preset.id}
            active={getActivePresetId.includes(preset.id)}
            preset={preset}
            handleChange={props.handleChange}
          />
        ))}
      </div>
    </div>
  );
};
