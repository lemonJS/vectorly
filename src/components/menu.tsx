import React from 'react';

import { css } from '@emotion/css';

const styles = css`
  display: flex;
  margin: 0;
  padding: 0 1.5rem 0 0;
  
  button {
    background: none;
    border: none;
    border-left: 1px solid #ccc;
    color: var(--secondary-text-color);
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    margin: 0;
    padding: .5rem 1rem;
    text-align: center;
    
    &:last-of-type {
      border-right: 1px solid #ccc;
    }
    
    &:hover {
      color: var(--primary-text-color);
    }
  }
`;

export function Menu(): JSX.Element {
  const menuItems = [
    {
      title: 'Undo',
      name: 'undo'
    },
    {
      title: 'Redo',
      name: 'redo'
    },
    {
      title: 'Preview',
      name: 'preview'
    }
  ];

  return (
    <menu className={styles}>
      {menuItems.map(item => (
        <button key={item.name}>
          {item.title}
        </button>
      ))}
    </menu>
  );
}
