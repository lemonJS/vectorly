import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Button } from '@components/header/button';
import { positionSelector } from '@lib/editor/selectors';
import { setPosition } from '@lib/editor/actions';

const styles = css`
  align-items: center;
  display: flex;
  
  .edit {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 40px;
  }
`;

export const Zoom = (): JSX.Element => {
  const dispatch = useDispatch();
  const { s: scale } = useSelector(positionSelector);
  const zoom = Math.floor(scale * 100);

  const [edit, setEdit] =  React.useState(false);

  const handleZoom = (direction: 'up' | 'down') => () => {
    const value = direction === 'up'
      ? scale + .1
      : scale - .1;
    dispatch(setPosition({ s: value }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value) / 100;
    dispatch(setPosition({ s: value }));
  };

  const handleBlur = () => setEdit(false);

  const handleStartEdit = () => setEdit(true);

  return (
    <div className={styles}>
      <Button onClick={handleZoom('down')} label='Zoom out'>
        <i className='ri-zoom-out-line' />
      </Button>

      {!edit && (
        <button className='edit' onClick={handleStartEdit}>{zoom}%</button>
      )}

      {edit && (
        <input className='edit' autoFocus defaultValue={zoom} onChange={handleChange} onBlur={handleBlur} />
      )}

      <Button onClick={handleZoom('up')} label='Zoom in'>
        <i className='ri-zoom-in-line' />
      </Button>
    </div>
  );
};
