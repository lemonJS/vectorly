import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  background: #eee;
  height: 1px;
  margin: 1.5rem 0;
  width: 100%;
`;

export const Divider = () => (
  <div className={styles} />
);
