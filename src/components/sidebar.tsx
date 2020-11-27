import React from 'react';

import { css } from '@emotion/css';
import { Navigation } from './navigation';

const styles = css`
  background: var(--sidebar-background-color);
  display: flex;
  grid-area: sidebar;
`;

export function Sidebar() {
  return (
    <aside className={styles}>
      <Navigation />
    </aside>
  );
}
