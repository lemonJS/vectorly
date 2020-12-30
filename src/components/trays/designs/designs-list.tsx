import React from 'react';

import { range } from 'lodash';
import { css } from '@emotion/css';
import { Design } from '@components/trays/designs/design';

const styles = css`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  padding-top: 1.5rem;
`;

export function DesignsList() {
  return (
    <div className={styles}>
      {range(30).map(i => (
        <Design key={i} />
      ))}
    </div>
  );
}
