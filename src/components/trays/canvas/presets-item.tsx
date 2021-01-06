import React from 'react';

import { css } from '@emotion/css';
import { Preset } from '@components/trays/data/canvas';

interface Props {
  active: boolean;
  preset: Preset;
  handleChange: (width: number, height: number) => void;
}

const styles = css`
  align-items: center;
  background: var(--sidebar-navigation-background-color);
  border: 2px solid var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  cursor: pointer;
  display: flex;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  
  i {
    font-size: 1.5rem;
  }
  
  p {
    color: var(--foreground-color);
    font-size: 12px;
    margin: 0;
    text-align: center;
    
    &:nth-of-type(2) {
      color: var(--secondary-text-color);
    }
  }
  
  &.active {
    border-color: var(--primary-accent-color);
  }
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export const PresetsItem = (props: Props): JSX.Element => {
  const status = props.active ? 'active' : '';

  const handleClick = () => {
    props.handleChange(props.preset.width, props.preset.height);
  };

  return (
    <div className={`${styles} ${status}`} onClick={handleClick}>
      <i className={props.preset.iconName} style={{ color: props.preset.iconColor }} />
      <p>{props.preset.name}</p>
      <p>{props.preset.width} x {props.preset.height}</p>
    </div>
  );
};

