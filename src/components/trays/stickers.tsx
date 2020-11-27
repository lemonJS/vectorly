import React from 'react';

import { css } from '@emotion/css';
import { Input } from '../input';

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
`;

export function Stickers(): JSX.Element {
  return (
    <div className={styles}>
      <Input placeholder='Search...' />
    </div>
  );
}
