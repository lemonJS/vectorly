import React from 'react';

import { css } from '@emotion/css';

interface Props {
  name: string;
  icon: string;
  handleClick: VoidFunction;
}

const styles = css`
  border-bottom: 1px solid var(--background-color);
  list-style: none;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  &:hover {
    background: var(--background-color);
  }
  
  button {
    align-items: center;
    background: none;
    border: none;
    color: var(--primary-text-color);
    cursor: pointer;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 1rem;
    text-decoration: none;
    width: 100%;
  }
`;

export function OptionsLink(props: Props) {
  return (
    <li className={styles}>
      <button onClick={props.handleClick}>
        <span>{props.name}</span>
        <i className={props.icon} />
      </button>
    </li>
  );
}
