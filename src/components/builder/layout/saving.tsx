import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Spinner } from '@components/common/spinner';
import { savingSelector } from '@lib/editor/selectors';

const styles = css`
  align-items: center;
  background: var(--foreground-color);
  border-radius: .25rem;
  bottom: 1.5rem;
  color: var(--primary-text-color);
  display: none;
  font-size: 14px;
  height: 42px;
  right: 1.5rem;
  padding: 0 .5rem;
  position: absolute;
  user-select: none;
  
  &.saving {
    display: flex;
  }
  
  .spinner {
    height: 14px;
    margin-right: .5rem;
    width: 14px;
    
    div {
      border-color: var(--primary-accent-color) transparent transparent;
      border-width: 2px;
      height: 14px;
      width: 14px;
    }
  }
`;

export function Saving(): JSX.Element {
  const saving = useSelector(savingSelector);

  return (
    <div className={`${styles} ${saving ? 'saving' : ''}`}>
      <Spinner />
      Saving...
    </div>
  );
}
