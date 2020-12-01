import React from 'react';

import { css } from '@emotion/css';
import { Label } from '../../label';
import { Select } from '../../select';
import { Scale } from '../../scale';

const styles = css`
  .select {
    margin-bottom: 1rem;
  }
`;

export function FontAndSize(): JSX.Element {
  return (
    <div className={styles}>
      <Label>Font &amp; Size</Label>

      <Select className='select'>
        <option>Arial</option>
      </Select>

      <Scale max={40} min={12} value={16} handleChange={console.log} />
    </div>
  );
}