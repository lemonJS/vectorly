import React from 'react';

import { css } from '@emotion/css';

interface Props {
  max: number;
  min: number;
  value: number;
  suffix?: string;
  handleChange: (value: number) => void;
}

const styles = css`
  align-items: center;
  background: white;
  border: 1px solid transparent;
  border-radius: var(--border-radius-sm);
  display: flex;
  height: 2rem;
  
  .action {
    align-items: center;
    background: var(--gray-100);
    border: none;
    cursor: pointer;
    display: none;
    font-size: 1rem;
    flex-shrink: 0;
    height: 30px;
    justify-content: center;
    margin-left: 1px;
    width: 30px;
    
    &:hover {
      color: var(--primary);
      font-size: 1.2rem;
    }
    
    &:last-of-type {
      border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
    }
  }
  
  .value {
    background: none;
    border: none;
    cursor: text;
    font: inherit;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    padding: .3rem .5rem .3rem .5rem;
    text-align: left;
    width: calc(100% - 62px);
  }
  
  &:hover {
    border-color: var(--gray-300);
    
    .action {
      display: flex;
    }
  }
`;

export const Scale = (props: Props): JSX.Element => {
  const [edit, setEdit] = React.useState(false);

  const handleDown = () => {
    const value = props.value - 1;

    if (value >= props.min) {
      props.handleChange(value);
    }
  };

  const handleUp = () => {
    const value = props.value + 1;

    if (value < props.max) {
      props.handleChange(value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    props.handleChange(value);
  };

  const handleEditStart = () => setEdit(true);

  const handleEditEnd = () => setEdit(false);

  return (
    <div className={`scale ${styles}`}>
      {edit
        ? <input className='value' value={props.value} autoFocus onBlur={handleEditEnd} onChange={handleChange} />
        : <button className='value' onClick={handleEditStart}>{props.value} {props.suffix || ''}</button>
      }

      <button className='action' onClick={handleDown}>
        <i className='ri-subtract-line' />
      </button>

      <button className='action' onClick={handleUp}>
        <i className='ri-add-line' />
      </button>
    </div>
  );
};
