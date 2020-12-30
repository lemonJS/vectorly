import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  background: var(--sidebar-navigation-background-color);
  border: 2px solid var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  cursor: pointer;
  height: 200px;
  margin-bottom: 1.5rem;

  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export const Design = () => (
  <div className={styles} />
);
