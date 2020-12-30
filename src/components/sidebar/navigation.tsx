import React from 'react';

import { css } from '@emotion/css';
import { NavigationItem } from '@components/sidebar/navigation-item';
import { NavigationToggle } from '@components/sidebar/navigation-toggle';

const styles = css`
  background: var(--sidebar-navigation-background-color);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 6rem;
  
  .navigation {
    flex: 1;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    
    .navigation {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
    .navigation {
      justify-content: space-evenly;
    }
  }
`;

export const Navigation = (): JSX.Element => {
  const navigation = [
    {
      title: 'Photos',
      name: 'photos',
      icon: 'ri-image-line',
    },
    {
      title: 'Text',
      name: 'text',
      icon: 'ri-font-size',
    },
    {
      title: 'Emojis',
      name: 'emojis',
      icon: 'ri-emotion-line',
    },
    {
      title: 'Shapes',
      name: 'shapes',
      icon: 'ri-shape-2-line',
    },
    {
      title: 'Designs',
      name: 'designs',
      icon: 'ri-paint-brush-line',
    }
  ];

  return (
    <nav className={styles}>
      <div className='navigation'>
        {navigation.map(nav => <NavigationItem {...nav} key={nav.name} />)}
      </div>
      <NavigationToggle />
    </nav>
  );
};
