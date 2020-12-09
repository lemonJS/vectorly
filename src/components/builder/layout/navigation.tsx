import React from 'react';

import { NavigationData } from '@type/navigation';
import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { NavigationItem } from './navigation-item';
import { NavigationToggle } from './navigation-toggle';
import { layoutSelector } from '@lib/layout/selectors';

const styles = css`
  background: var(--sidebar-navigation-background-color);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 6rem;
  
  .navigation {
    flex: 1;
  }
`;

export function Navigation(): JSX.Element {
  const { menuOpen, menuSelected } = useSelector(layoutSelector);

  const navigation: NavigationData[] = [
    {
      title: 'Photos',
      name: 'photos',
      icon: 'ri-image-line',
      selected: menuSelected === 'photos'
    },
    {
      title: 'Text',
      name: 'text',
      icon: 'ri-font-size',
      selected: menuSelected === 'text'
    },
    {
      title: 'Emojis',
      name: 'emojis',
      icon: 'ri-emotion-line',
      selected: menuSelected === 'emojis'
    },
    {
      title: 'Shapes',
      name: 'shapes',
      icon: 'ri-shape-2-line',
      selected: menuSelected === 'shapes'
    },
    {
      title: 'Designs',
      name: 'designs',
      icon: 'ri-paint-brush-line',
      selected: menuSelected === 'designs'
    }
  ];

  return (
    <nav className={styles}>
      <div className='navigation'>
        {navigation.map(nav => <NavigationItem {...nav} key={nav.name} />)}
      </div>
      <NavigationToggle open={menuOpen} />
    </nav>
  );
}
