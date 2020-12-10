import React from 'react';

import { css } from '@emotion/css';

interface Props {
  height?: number;
  slides: React.ReactNode[];
}

const styles = css`
  display: flex;
  position: relative;
  
  .arrow {
    align-items: center;
    background: var(--secondary-button-border-color);
    border: none;
    border-radius: 50%;
    color: var(--secondary-text-color);
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    height: 3rem;
    justify-content: center;
    position: absolute;
    top: calc(50% - 1.5rem);
    width: 3rem;
    
    &:hover {
      background: var(--primary-accent-color);
      color: white;
    }
    
    &.disabled {
      pointer-events: none;
    }
    
    &.left {
      left: -1.5rem;
    }
    
    &.right {
      right: -1.5rem;
    }
  }
  
  .body {
    border-radius: .25rem;
    flex: 1;
    overflow: hidden;
  }
  
  .slider {
    display: flex;
    height: 100%;
    transition: all .3s ease-in-out;
  }
  
  .slide {
    background: white;
    flex: 1;
  }
`;

export function Carousel(props: Props): JSX.Element {
  const [page, setPage] = React.useState(0);

  function handleBack() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function handleForward() {
    if (page < props.slides.length - 1) {
      setPage(page + 1);
    }
  }

  return (
    <div className={styles} style={{ height: props.height || 500 }}>
      <button className={`arrow left ${page === 0 ? 'disabled' : ''}`} onClick={handleBack}>
        <i className='ri-arrow-left-line' />
      </button>

      <div className='body'>
        <div className='slider' style={{ width: `${props.slides.length}00%`, marginLeft: `-${page}00%` }}>
          {props.slides.map((slide, index) => (
            <div className='slide' key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button className={`arrow right ${page === props.slides.length - 1 ? 'disabled' : ''}`} onClick={handleForward}>
        <i className='arrow ri-arrow-right-line' />
      </button>
    </div>
  );
}
