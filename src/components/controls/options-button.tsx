import React from 'react';

import { css } from '@emotion/css';

interface Props {
  handleClick: VoidFunction;
}

const styles = css`
  align-items: center;
  background: none;
  border: 2px solid var(--secondary-button-border-color);
  border-radius: .25rem;
  color: var(--primary-text-color);
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: 14px;
  margin-left: 1rem;
  padding: .5rem;

  i {
    margin: 0;
  }

  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export const OptionsButton = (props: Props): JSX.Element => (
  <button className={`dropdown-button ${styles}`} onClick={props.handleClick}>
    <i className='ri-more-2-fill' />
  </button>
);
