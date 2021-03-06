import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/sidebar/button';

const styles = css`
  background: var(--foreground);
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  left: 1.5rem;
  padding: .5rem;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 3.5rem;
  z-index: 1;
`;

export const Sidebar = (): JSX.Element => {
  const navigation = [
    {
      title: 'Select',
      name: 'select',
      icon: 'ri-cursor-fill'
    },
    {
      title: 'Move',
      name: 'move',
      icon: 'ri-drag-move-2-fill'
    },
    {
      title: 'Photos',
      name: 'photos',
      icon: 'ri-image-line',
    },
    {
      title: 'Text',
      name: 'text',
      icon: 'ri-font-size-2',
    },
    {
      title: 'Draw',
      name: 'draw',
      icon: 'ri-brush-line'
    },
    {
      title: 'Shapes',
      name: 'shapes',
      icon: 'ri-shape-2-line',
    }
  ];

  return (
    <nav className={styles}>
      {navigation.map(nav => <Button {...nav} key={nav.name} />)}
    </nav>
  );
};
