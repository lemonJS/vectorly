import React from 'react';

import { css } from '@emotion/css';

interface Props {
  message: string;
}

const styles = css`
  align-items: center;
  background: var(--tertiary-accent-color);
  border-radius: .25rem;
  color: white;
  display: flex;
  font-size: 14px;
  margin-bottom: 1.5rem;
  padding: .5rem;
  
  p {
    margin: 0 0 0 .5rem;
  }
  
  i {
    font-size: 16px;
  }
`;

export function ErrorMessage(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <i className='ri-error-warning-line' />
      <p>{props.message}</p>
    </div>
  );
}
