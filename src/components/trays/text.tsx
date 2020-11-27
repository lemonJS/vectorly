import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  display: flex;
  padding: 1rem;
  width: 100%;
`;

export function Text(): JSX.Element {
  return (
    <div className={styles}>
      <p>Text</p>
    </div>
  );
}
