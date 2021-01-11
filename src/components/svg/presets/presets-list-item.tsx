import React from 'react';

import { css } from '@emotion/css';
import { Radio } from '@components/radio';

interface Props {
  name: string;
  size: number[];
}

const styles = css`
  display: flex;
  list-style: none;
  
  p {
    margin: 0;
    width: 110px;
  }
  
  span {
    color: #999999;
    font-weight: 300;
  }
`;

export const PresetsListItem = (props: Props): JSX.Element => (
  <li key={props.name} className={styles}>
    <Radio id={`${props.name.toLowerCase()}-${props.size.join('-')}`} name='preset' value={props.size.join('-')}>
      <p>{props.name}</p>
      <span>{props.size[0]} x {props.size[1]} px</span>
    </Radio>
  </li>
);
