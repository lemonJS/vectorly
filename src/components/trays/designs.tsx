import React from 'react';

import { css } from '@emotion/css';
import { Select } from '../select';

const styles = css`
  display: flex;
  padding: 1.5rem;
  width: 100%;
`;

export function Designs(): JSX.Element {
  return (
    <div className={styles}>
      <Select>
        <option>Most popular</option>
        <option>Newest</option>
        <option>Top rated</option>
      </Select>
    </div>
  );
}
