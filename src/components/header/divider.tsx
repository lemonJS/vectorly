import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  background: var(--gray-300);
  height: 2rem;
  margin: .5rem 0;
  width: 1px;
`;

export const Divider = (): JSX.Element => (
  <div className={styles} />
);
