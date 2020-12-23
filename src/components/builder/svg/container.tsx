import React from 'react';

import { useDispatch } from 'react-redux';
import { Element, ElementProps } from '@type/project';
import { Transform } from '@type/editor';
import { Selection } from '@components/builder/svg/selection/selection';
import { getBox } from '@lib/helpers';
import { setSelectionId } from '@lib/selection/actions';
import { updateProjectElement } from '@lib/projects/actions';

interface Props extends ElementProps {
  id: string;
  element: Element;
  selected: boolean;
}

export function Container(props: Props): JSX.Element {
  const dispatch = useDispatch();

  const ref = React.useRef<SVGGElement>(null);
  const box = getBox(ref.current);

  const { x, y, r, s } = props.element.transform;
  const transform = `translate(${x} ${y}) rotate(${r} ${(box.width * s[0]) / 2} ${(box.height * s[1]) / 2}) scale(${s[0]} ${s[1]})`;

  function handleClick() {
    if (!props.selected) {
      dispatch(setSelectionId(props.element.elementId));
    }
  }

  function handleTransform(update: Partial<Transform>) {
    const data = { ...props.element.transform, ...update };
    dispatch(updateProjectElement(props.element.elementId, { transform: data }));
  }

  return (
    <g>
      <g id={props.id} className='container' onClick={handleClick} ref={ref} transform={transform}>
        {props.children}
        {props.selected && (
          <Selection
            box={box}
            transform={props.element.transform}
            parent={props.id}
            element={props.element}
            handleTransform={handleTransform}
          />
        )}
      </g>
    </g>
  );
}
