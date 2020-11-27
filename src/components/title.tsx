import React from 'react';

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { Input } from './input';
import { projectSelector } from '../lib/project/selectors';

const styles = css`
  align-items: center;
  display: flex;
  
  input {
    border: none;
    color: var(--secondary-text-color);
  }
`;

export function Title(): JSX.Element {
  const { title } = useSelector(projectSelector);

  return (
    <div className={styles}>
      <Input placeholder='Project title' value={title} readOnly />
    </div>
  );
}
