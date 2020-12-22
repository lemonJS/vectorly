import React from 'react';

import { css } from '@emotion/css';

interface Props {
  max: number;
  min: number;
  value: number;
  handleChange: (value: number) => void;
}

const styles = css`
  align-items: center;
  background: var(--secondary-button-background-color);
  border: 2px solid var(--secondary-button-border-color);
  border-radius: .25rem;
  color: var(--secondary-button-text-color);
  display: flex;
  height: 42px;
  
  button {
    align-items: center;
    background: none;
    border: none;
    color: var(--secondary-button-text-color);
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    width: 3rem;
    
    &:hover {
      color: white;
      font-size: 1.2rem;
    }
  }
  
  .value {
    flex: 1;
    text-align: center;
  }
`;

export function Scale(props: Props): JSX.Element {
  function handleDown() {
    const value = props.value - 1;

    if (value > props.min) {
      props.handleChange(value);
    }
  }

  function handleUp() {
    const value = props.value + 1;

    if (value < props.max) {
      props.handleChange(value);
    }
  }

  return (
    <div className={styles}>
      <button onClick={handleDown}>
        <i className='ri-subtract-line' />
      </button>

      <div className='value'>
        {props.value}
      </div>

      <button onClick={handleUp}>
        <i className='ri-add-line' />
      </button>
    </div>
  );
}
