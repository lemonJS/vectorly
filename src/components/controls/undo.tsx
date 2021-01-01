import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Button } from '@components/button';
import { editorSelector } from '@lib/editor/selectors';
import { redo, undo } from '@lib/editor/actions';

const styles = css`
  align-items: center;
  background: var(--foreground-color);
  border-radius: .25rem;
  display: flex;
  height: 42px;
  right: 1.5rem;
  padding: 0 .5rem;
  position: absolute;
  top: 1.5rem;
  
  .divider {
    background: var(--secondary-text-color);
    height: 16px;
    margin: 0 .5rem;
    width: 1px;
  }
  
  button {
    background: none;
    border: none;
    color: var(--primary-text-color);
    padding: 0 .5rem;
    
    i {
      margin: 0;
    }
    
    &.disabled {
      color: var(--secondary-text-color);
      pointer-events: none;
    }
    
    &.active {
      color: var(--primary-accent-color);
    }
    
    &:hover {
      i {
        color: var(--primary-accent-color);
      }
    }
  }
`;

export const Undo = (): JSX.Element => {
  const dispatch = useDispatch();

  const { undoStack, undoStackIndex } = useSelector(editorSelector);

  const canUndo = undoStack.length > 0 && undoStackIndex > 0;

  const canRedo = undoStack.length > 0 && undoStackIndex < undoStack.length - 1;

  const handleUndo = () => dispatch(undo());

  const handleRedo = () => dispatch(redo());

  return (
    <div className={styles}>
      <Button className={canUndo ? '' : 'disabled'} onClick={handleUndo}>
        <i className='ri-arrow-go-back-line' />
      </Button>
      <span className='divider' />
      <Button className={canRedo ? '' : 'disabled'} onClick={handleRedo}>
        <i className='ri-arrow-go-forward-line' />
      </Button>
    </div>
  );
};
