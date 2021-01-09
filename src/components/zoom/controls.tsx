import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/button';

interface Props {
  zoom: number;
  handleZoom: (direction: 'up' | 'down') => void;
}

const styles = css`
  background: var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  bottom: 1.5rem;
  color: var(--foreground-color);
  height: 42px;
  left: 3rem;
  position: absolute;
  z-index: 1;
  
  button {
    background: none;
    border: none;
    font-size: 14px;
    padding: 0 .5rem;
    
    i {
      color: var(--foreground-color);
      margin: 0;
    }
    
    &:hover {
      i {
        color: var(--primary-accent-color);
      }
    }
  }
  
  span {
    font-size: 14px;
    user-select: none;
  }
`;

export const Controls = (props: Props): JSX.Element => {
  const handleZoom = (direction: 'up' | 'down') => () => props.handleZoom(direction);

  return (
    <div className={styles}>
      <Button onClick={handleZoom('down')}>
        <i className='ri-subtract-line' />
      </Button>
      <span>{props.zoom}%</span>
      <Button onClick={handleZoom('up')}>
        <i className='ri-add-line' />
      </Button>
      <span className='divider' />
    </div>
  );
};
