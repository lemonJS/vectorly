import React from 'react';

import { css } from '@emotion/css';
import { range } from 'lodash';
import { Label } from '@components/common/label';
import { Select } from '@components/common/select';

const styles = css`
  border-color: var(--secondary-font-color);
  
  select {
    color: var(--primary-text-color);
  }
`;

export function Quantity(): JSX.Element {
  return (
    <React.Fragment>
      <Label htmlFor='quantity'>Quantity</Label>

      <Select className={styles} name='quantity' id='quantity'>
        {range(30).map(i => (
          <option key={i} value={i}>{i}</option>
        ))}
      </Select>
    </React.Fragment>
  );
}
