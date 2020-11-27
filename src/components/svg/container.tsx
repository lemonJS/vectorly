import React from 'react';

import { useDispatch } from 'react-redux';
import { setSelectionId } from '../../lib/selection/actions';
import { Selection } from './selection';

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
}

export function Container(props: Props) {
  const dispatch = useDispatch();
  const ref = React.useRef(null);

  function handleClick(_event: React.MouseEvent<SVGGElement>) {
    dispatch(setSelectionId(props.id));
  }

  return (
    <g {...props} ref={ref} onClick={handleClick}>
      {props.children}
      {props.selected && <Selection box={ref.current.getBBox()} />}
    </g>
  );
}
