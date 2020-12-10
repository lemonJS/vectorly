import React from 'react';

import { css } from '@emotion/css';
import { range } from 'lodash';
import { Design } from '@components/shelf/designs/design';

const styles = css`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-top: 2rem;
`;

export function Designs(): JSX.Element {
  return (
    <div className={styles}>
      {range(32).map(index => (
        <Design key={index} />
      ))}
    </div>
  );
}
