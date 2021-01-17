import React from 'react';

import { css } from '@emotion/css';

interface Props {
  href: string;
  filter?: string;
  handleClick: (filter: string) => void;
  selected: boolean;
}

const styles = css`
  border: 2px solid transparent;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  height: 88px;
  overflow: hidden;
  
  &:hover,
  &.selected {
    border-color: var(--primary);
  }
`;

export const Filter = (props: Props): JSX.Element => {
  const status = props.selected ? 'selected' : '';

  const handleClick = () => {
    props.handleClick(props.filter);
  };

  return (
    <div className={`${styles} ${status}`} onClick={handleClick}>
      <svg viewBox='0 0 88 88'>
        <image
          filter={props.filter ? `url(#${props.filter})` : null}
          height='100%'
          href={props.href}
          preserveAspectRatio='xMidYMid slice'
          width='100%'
        />
      </svg>
    </div>
  );
};
