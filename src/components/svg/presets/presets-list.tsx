import React from 'react';

import { groupBy } from 'lodash';
import { css } from '@emotion/css';
import { PresetsListItem } from '@components/svg/presets/presets-list-item';

const presets = [
  {
    category: 'Facebook',
    name: 'Post',
    size: [1200, 900]
  },
  {
    category: 'Facebook',
    name: 'Story',
    size: [1200, 900]
  },
  {
    category: 'Facebook',
    name: 'Cover',
    size: [820, 312]
  },
  {
    category: 'Facebook',
    name: 'Profile',
    size: [512, 512]
  },
  {
    category: 'Twitter',
    name: 'Post',
    size: [1200, 900]
  },
  {
    category: 'Twitter',
    name: 'Fleet',
    size: [1200, 900]
  },
  {
    category: 'Twitter',
    name: 'Cover',
    size: [820, 312]
  },
  {
    category: 'Twitter',
    name: 'Profile',
    size: [512, 512]
  }
];

const styles = css`
  .wrapper {
    margin-bottom: 1rem;
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  .heading {
    color: #999;
    display: block;
    font-size: 10px;
    margin-bottom: .5rem;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const PresetsList = (): JSX.Element => {
  const groups = groupBy(presets, 'category');

  return (
    <div className={styles}>
      {Object.entries(groups).map(([name, presets]) => (
        <div className='wrapper' key={name}>
          <label className='heading'>{name}</label>
          <ul>
            {presets.map(preset => <PresetsListItem key={preset.name} {...preset} />)}
          </ul>
        </div>
      ))}
    </div>
  );
}
