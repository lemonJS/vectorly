import React from 'react';

import type { NavigationData } from '../types/navigation';
import { css } from '@emotion/css';
import { NavigationItem } from './navigation-item';

const styles = css`
  background: var(--sidebar-navigation-background-color);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 6rem
`;

export function Navigation(): JSX.Element {
  const navigation: NavigationData[] = [
    {
      title: 'Photos',
      name: 'photos',
      icon: 'ri-image-line',
      selected: true
    },
    {
      title: 'Text',
      name: 'text',
      icon: 'ri-font-size',
      selected: false
    },
    {
      title: 'Shapes',
      name: 'shapes',
      icon: 'ri-shape-2-line',
      selected: false
    },
    {
      title: 'Designs',
      name: 'designs',
      icon: 'ri-paint-brush-line',
      selected: false
    }
  ];

  return (
    <nav className={styles}>
      {navigation.map(nav => <NavigationItem {...nav} key={nav.name} />)}
    </nav>
  );
}
