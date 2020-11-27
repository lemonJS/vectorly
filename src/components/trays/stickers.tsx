import React from 'react';

import { css } from '@emotion/css';
import { Input } from '../input';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1.5rem;
  width: 100%;
  
  .stickers {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    padding-top: 1.5rem;
  }
  
  .sticker {
    background: var(--sidebar-navigation-background-color);
    border-radius: .25rem;
    cursor: pointer;
    height: 100px;
    
    &:hover {
      transform: translate(-2px, -2px);
    }
  }
`;

export function Stickers(): JSX.Element {
  return (
    <div className={styles}>
      <Input placeholder='Search...' />

      <div className='stickers'>
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
        <div className='sticker' />
      </div>
    </div>
  );
}
