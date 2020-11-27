import React from 'react';

import { css } from '@emotion/css';
import { Select } from '../select';

const styles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1.5rem;
  width: 100%;
  
  .designs {
    padding-top: 1.5rem;
  }
  
  .design {
    background: var(--sidebar-navigation-background-color);
    border-radius: .25rem;
    cursor: pointer;
    height: 200px;
    margin-bottom: 1.5rem;
    
    &:hover {
      transform: translate(-2px, -2px);
    }
`;

export function Designs(): JSX.Element {
  return (
    <div className={styles}>
      <Select>
        <option>Most popular</option>
        <option>Newest</option>
        <option>Top rated</option>
      </Select>

      <div className='designs'>
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
        <div className='design' />
      </div>
    </div>
  );
}
