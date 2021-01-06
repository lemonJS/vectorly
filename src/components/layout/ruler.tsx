import React from 'react';

import { range } from 'lodash';
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
  height: 1.5rem;
  justify-content: center;
  user-select: none;
  position: relative;
  width: 100px;
  
  &:first-of-type {
    border-width: 0 1px 0 1px;
  }
  
  p {
    font-size: 10px;
    margin: 0 0 .25rem 0;
  }
  
  span {
    background: var(--secondary-text-color);
    bottom: 0;
    height: .25rem;
    position: absolute;
    width: 1px;

    ${range(10).map(i => `
      &:nth-of-type(${i + 1}) {
        left: ${(i + 1) * 10}px;
      }
    `)}
  }
  
  &.vertical {
    border-width: 0 0 1px 0;
    height: 100px;
    width: 1.5rem;
    
    &:first-of-type {
      border-width: 1px 0 1px 0;
    }
    
    p {
      margin: 0 .25rem 0 0;
      transform: rotate(270deg);
    }

    span {
      height: 1px;
      left: auto;
      top: 0;
      right: 0;
      width: .25rem;

      ${range(10).map(i => `
        &:nth-of-type(${i + 1}) {
          top: ${(i + 1) * 10}px;
        }
      `)}
    }
  }
`;

export const Ruler = React.memo((props: Props): JSX.Element => (
  <span className={`${styles} ${props.className} rule`}>
    <p>{props.value}</p>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </span>
));
