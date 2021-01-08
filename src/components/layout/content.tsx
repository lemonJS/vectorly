import React from 'react';

import { css } from '@emotion/css';
import { Zoom } from '@components/layout/zoom';
import { Rulers } from '@components/layout/rulers';
import { useDispatch, useSelector } from 'react-redux';
import { zoomSelector } from '@lib/editor/selectors';
import { setZoomScale } from '@lib/editor/actions';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: content;
  overflow: hidden;
  position: relative;
`;

export const Content = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const zoom = useSelector(zoomSelector);

  const handleZoom = (scale: number) => {
    dispatch(setZoomScale(scale));
  };

  return (
    <main id='editor-content' className={styles}>
      <Zoom zoom={zoom} handleZoom={handleZoom}>
        <Rulers>
          {props.children}
        </Rulers>
      </Zoom>
    </main>
  );
}
