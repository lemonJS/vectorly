import React from 'react';

import { css } from '@emotion/css';

interface Props {
  icon: React.ReactNode;
  value: string | number;
  handleChange: (value: string) => void;
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
  
  input {
    background: none;
    border: none;
    font: inherit;
    font-weight: 400;
    outline: none;
    width: 100%;
  }
  
  .icon {
    color: #999;
    display: block;
    font-size: 16px;
    flex-shrink: 0;
    margin-right: 1rem;
    width: .75rem;
    
    i {
      font-size: 16px;
    }
  }
`;

export const Input = (props: Props): JSX.Element => (
  <label className={styles}>
    <span className='icon'>{props.icon}</span>
    <input type='text' value={props.value} onChange={event => props.handleChange(event.target.value)} />
  </label>
);
