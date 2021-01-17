import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Button } from '@components/header/button';
import { Divider } from '@components/header/divider';
import { editorSelector } from '@lib/editor/selectors';
import { redo, undo } from '@lib/editor/actions';

const styles = css`
  align-items: center;
  display: flex;
  
  button {
    background: none;
    border: none;
    border-radius: 50%;
    height: 2.5rem;
    margin: 0 .5rem;
    padding: 0;
    width: 2.5rem;
    
    i {
      font-size: 1.5rem;
      margin: 0;
    }
    
    &:hover {
      background: var(--gray-100);
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
      <Button className={canUndo ? '' : 'disabled'} onClick={handleUndo} label='Undo'>
        <i className='ri-arrow-go-back-line' />
      </Button>
      <Divider />
      <Button className={canRedo ? '' : 'disabled'} onClick={handleRedo} label='Redo'>
        <i className='ri-arrow-go-forward-line' />
      </Button>
    </div>
  );
};
