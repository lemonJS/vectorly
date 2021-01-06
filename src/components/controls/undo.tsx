import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@components/button';
import { editorSelector } from '@lib/editor/selectors';
import { redo, undo } from '@lib/editor/actions';

export const Undo = (): JSX.Element => {
  const dispatch = useDispatch();

  const { undoStack, undoStackIndex } = useSelector(editorSelector);

  const canUndo = undoStack.length > 0 && undoStackIndex > 0;

  const canRedo = undoStack.length > 0 && undoStackIndex < undoStack.length - 1;

  const handleUndo = () => dispatch(undo());

  const handleRedo = () => dispatch(redo());

  return (
    <React.Fragment>
      <Button className={canUndo ? '' : 'disabled'} onClick={handleUndo}>
        Undo
        <i className='ri-arrow-go-back-line' />
      </Button>
      <span className='divider' />
      <Button className={canRedo ? '' : 'disabled'} onClick={handleRedo}>
        Redo
        <i className='ri-arrow-go-forward-line' />
      </Button>
      <span className='divider' />
    </React.Fragment>
  );
};
