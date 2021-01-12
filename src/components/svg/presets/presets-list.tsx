import React from 'react';

import { groupBy } from 'lodash';
import { css } from '@emotion/css';
import { Preset } from '@type/project';
import { presets } from '@lib/presets';
import { PresetsListItem } from '@components/svg/presets/presets-list-item';

interface Props {
  preset: Preset;
  handleChange: (id: string) => void;
}

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

export const PresetsList = (props: Props): JSX.Element => {
  const groups = groupBy(presets, 'category');

  return (
    <div className={styles}>
      {Object.entries(groups).map(([name, presets]) => (
        <div className='wrapper' key={name}>
          <label className='heading'>{name}</label>
          <ul>
            {presets.map(p => (
              <PresetsListItem
                key={p.id}
                preset={p}
                selected={p.id === props.preset.id}
                handleChange={props.handleChange}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
