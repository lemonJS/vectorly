import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Controls } from '@components/zoom/controls';
import { Listeners } from '@components/zoom/listeners';
import { zoomSelector } from '@lib/editor/selectors';
import { setZoom, setZoomScale } from '@lib/editor/actions';

interface Props {
  children: React.ReactNode;
}

export const Zoom = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const zoom = useSelector(zoomSelector);

  const handleZoomCount = (scale: number) => dispatch(setZoomScale(scale));

  const handleZoomDirection = (direction: 'up' | 'down') => dispatch(setZoom(direction));

  return (
    <React.Fragment>
      <Listeners zoom={zoom} handleZoom={handleZoomCount}>
        <Controls zoom={zoom} handleZoom={handleZoomDirection} />
        {props.children}
      </Listeners>
    </React.Fragment>
  );
};
