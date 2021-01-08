import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@components/button';
import { drawingSelector } from '@lib/editor/selectors';
import { setDrawing } from '@lib/editor/actions';

const styles = css`
  button {
    width: 100%;
  }
`;

export const Create = (): JSX.Element => {
  const dispatch = useDispatch();

  const drawing = useSelector(drawingSelector);

  const handleClick = () => {
    dispatch(setDrawing(!drawing));
  };

  return (
    <div className={styles}>
      <Button className='secondary' onClick={handleClick}>
        {drawing ? 'End' : 'Start'} Drawing
        <i className='ri-brush-line' />
      </Button>
    </div>
  );
}
