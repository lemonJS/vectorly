import React from 'react';

import { css } from '@emotion/css';

interface Props {
  icon: React.ReactNode;
  value: string | number;
  suffix?: string;
  handleChange: (value: number) => void;
}

const styles = css`
  align-items: center;
  border: 1px solid transparent;
  border-radius: .25rem;
  display: flex;
  font-size: 16px;
  height: 32px;
  padding: .5rem;
  
  &:hover {
    border-color: #bbb;
  }
  
  .input {
    background: none;
    border: none;
    font: inherit;
    font-weight: 400;
    margin: 0;
    outline: none;
    padding: 0;
    text-align: left;
    width: 100%;
  }
  
  .icon {
    color: #999;
    display: flex;
    font-size: 16px;
    flex-shrink: 0;
    margin-right: 1rem;
    width: .75rem;
    
    i {
      font-size: 16px;
    }
  }
`;

export const Input = (props: Props): JSX.Element => {
  const [edit, setEdit] = React.useState(false);

  const handleEditStart = () => setEdit(true);

  const handleEditEnd = () => setEdit(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    props.handleChange(value);
  };

  return (
    <label className={styles}>
      <span className='icon'>{props.icon}</span>

      {edit && (
        <input
          autoFocus
          className='input'
          type='text'
          value={props.value}
          onBlur={handleEditEnd}
          onChange={handleChange}
        />
      )}

      {!edit && (
        <button className='input' onClick={handleEditStart}>
          {props.value} {props.suffix || ''}
        </button>
      )}
    </label>
  );
};
