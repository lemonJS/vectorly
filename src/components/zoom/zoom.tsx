import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Listeners } from '@components/zoom/listeners';
import { zoomSelector } from '@lib/editor/selectors';
import { setZoomScale } from '@lib/editor/actions';

interface Props {
  children: React.ReactNode;
}

export const Zoom = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const zoom = useSelector(zoomSelector);

  const handleZoom = (scale: number) => dispatch(setZoomScale(scale));

  return (
    <React.Fragment>
      <Listeners zoom={zoom} handleZoom={handleZoom}>
        {props.children}
      </Listeners>
    </React.Fragment>
  );
};
