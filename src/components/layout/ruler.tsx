import React from 'react';

import { css } from '@emotion/css';

interface Props {
  className: string;
  value: number;
}

const styles = css`
  align-items: center;
  background: #e9e9e9;
  border-color: var(--secondary-text-color);
  border-style: solid;
  border-width: 0 1px 0 0;
  color: var(--secondary-text-color);
  display: flex;
  flex-shrink: 0;
  font-size: 12px;
  height: 1.5rem;
  justify-content: center;
  user-select: none;
  width: 100px;
  
  &:first-of-type {
    border-width: 0 1px 0 1px;
  }
  
  &.vertical {
    border-width: 0 0 1px 0;
    height: 100px;
    width: 1.5rem;
    
    &:first-of-type {
      border-width: 1px 0 1px 0;
    }
    
    span {
      transform: rotate(90deg);
    }
  }
`;

export const Ruler = (props: Props): JSX.Element => (
  <span className={`${styles} ${props.className} rule`}>
    <span>{props.value}</span>
  </span>
);
