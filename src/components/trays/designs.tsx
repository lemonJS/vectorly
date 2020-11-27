import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  display: flex;
  padding: 1rem;
  width: 100%;
`;

export function Designs(): JSX.Element {
  return (
    <div className={styles}>
      <p>Designs</p>
    </div>
  );
}
