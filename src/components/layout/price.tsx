import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  border-right: 1px solid var(--secondary-text-color);
  color: var(--primary-text-color);
  font-size: 14px;
  margin: 0;
  padding: 0 1.5rem;
`;

export function Price(): JSX.Element {
  return (
    <p className={styles}>$4.50</p>
  );
}
