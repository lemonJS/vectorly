import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  background: var(--gray-100);
  height: 1px;
  margin: 1.5rem 0;
  width: 100%;
`;

export const Divider = (): JSX.Element => (
  <div className={styles} />
);
