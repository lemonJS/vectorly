import React from 'react';

import { css } from '@emotion/css';
import { range } from 'lodash';
import { v4 as uuid } from 'uuid';
import { Design } from '@components/shelf/designs/design';

const styles = css`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-top: 1.5rem;
`;

export function Designs(): JSX.Element {
  const ids = range(32).map(() => uuid());

  return (
    <div className={styles}>
      {ids.map(id => (
        <Design key={id} id={id} />
      ))}
    </div>
  );
}
