import React from 'react';

import { css } from '@emotion/css';
import { Navigation } from '@components/builder/layout/navigation';
import { Tray } from '@components/builder/trays/tray';

interface Props {
  open: boolean;
}

const styles = css`
  background: var(--sidebar-background-color);
  display: flex;
  grid-area: sidebar;
  overflow: hidden;
  z-index: 1;
  
  &.menu-open {
    overflow: visible;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
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
