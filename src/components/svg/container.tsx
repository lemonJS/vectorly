import React from 'react';

import type { Transform } from '../../types/editor';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Selection } from './selection';
import { setSelectionId } from '../../lib/selection/actions';

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
  defaultTransform: Transform;
}

const styles = css`
  transform-box: fill-box;
  transform-origin: center;
`;

export function Container(props: Props): JSX.Element {
  const dispatch = useDispatch();
  const ref = React.useRef(null);
  const [transform, setTransform] = React.useState(props.defaultTransform);

  function handleClick() {
    dispatch(setSelectionId(props.id));
  }

  function handleTransform(update: Partial<Transform>) {
    setTransform({ ...transform, ...update });
  }

  return (
    <g id={props.id} className={`${styles} container`} onClick={handleClick} ref={ref} transform={`translate(${transform.x}, ${transform.y}), rotate(${transform.r})`}>
      {props.children}
      {props.selected && <Selection box={ref.current.getBBox()} handleTransform={handleTransform} />}
    </g>
  );
}
