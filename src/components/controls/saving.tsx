import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Spinner } from '@components/spinner';
import { savingSelector } from '@lib/editor/selectors';

const styles = css`
  align-items: center;
  border-radius: .25rem;
  color: var(--secondary-text-color);
  display: none;
  font-size: 14px;
  height: 42px;
  padding: 0 .5rem;
  user-select: none;
  
  &.saving {
    display: flex;
  }
  
  .spinner {
    height: 14px;
    margin-left: .5rem;
    width: 14px;
    
    div {
      border-color: var(--secondary-text-color) transparent transparent;
      border-width: 1px;
      height: 14px;
      width: 14px;
    }
  }
`;

export const Saving = (): JSX.Element => {
  const saving = useSelector(savingSelector);

  return (
    <React.Fragment>
      <div className={`${styles} ${saving ? 'saving' : ''}`}>
        Saving...
        <Spinner />
      </div>
      <span className='divider' />
    </React.Fragment>
  );
};
