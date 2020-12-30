import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  color: var(--sidebar-navigation-background-color);
  height: 1px;
`;

export const Divider = () => (
  <hr className={styles} />
);
