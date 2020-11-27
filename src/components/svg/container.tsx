import React from 'react';

import { useDispatch } from 'react-redux';
import { setSelectionId } from '../../lib/selection/actions';

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
}

export function Container(props: Props) {
  const dispatch = useDispatch();
  const ref = React.useRef(null);

  console.log(props.selected)

  function handleClick(event: React.MouseEvent<SVGGElement>) {
    dispatch(setSelectionId(props.id));
  }

  return (
    <g {...props} ref={ref} onClick={handleClick}>
      {props.children}

      {props.selected && (
        <g className='selection'>
          <rect stroke='red' fill='none' width={50} height={50} transform='translate(-4, -4)' />
        </g>
      )}
    </g>
  );
}
