import React from 'react';

import { css } from '@emotion/css';
import { Navigation } from './navigation';
import { Tray } from './tray';

interface Props {
  open: boolean;
}

const styles = css`
  background: var(--sidebar-background-color);
  display: flex;
  grid-area: sidebar;
  overflow: hidden;
  
  &.menu-open {
    overflow: visible;
  }
`;

export function Sidebar(props: Props) {
  const status = props.open ? 'menu-open' : '';

  return (
    <aside className={`${styles} ${status}`}>
      <Navigation />
      <Tray />
    </aside>
  );
}
