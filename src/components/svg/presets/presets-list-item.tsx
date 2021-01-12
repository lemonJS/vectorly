import React from 'react';

import { css } from '@emotion/css';
import { Radio } from '@components/radio';
import { PresetItem } from '@lib/presets';

interface Props {
  preset: PresetItem;
  selected: boolean;
  handleChange: (id: string) => void;
}

const styles = css`
  display: flex;
  list-style: none;
  
  p {
    margin: 0;
    width: 70px;
  }
  
  span {
    color: #999999;
    font-weight: 300;
  }
`;

export const PresetsListItem = (props: Props): JSX.Element => {
  const handleChange = () => {
    props.handleChange(props.preset.id);
  };

  return (
    <li key={props.preset.id} className={styles}>
      <Radio id={props.preset.id} name='preset' value={props.preset.id} checked={props.selected} onChange={handleChange}>
        <p>{props.preset.name}</p>
        <span>{props.preset.width} x {props.preset.height} px</span>
      </Radio>
    </li>
  );
};
