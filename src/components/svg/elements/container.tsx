import React from 'react';

import { useDispatch } from 'react-redux';
import { Element, ElementProps, Transform } from '@type/project';
import { Selection } from '@components/svg/selection/selection';
import { getBox } from '@lib/editor/helpers';
import { setSelectionId } from '@lib/editor/actions';
import { updateElement, deleteElement } from '@lib/projects/actions';

interface Props extends ElementProps {
  id: string;
  element: Element;
  selected: boolean;
}

export const Container = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const ref = React.useRef<SVGGElement>(null);
  const box = getBox(ref.current);

  const { x, y, r, s } = props.element.transform;
  const transform = `translate(${x} ${y}) rotate(${r} ${(box.width * s[0]) / 2} ${(box.height * s[1]) / 2}) scale(${s[0]} ${s[1]})`;

  const handleClick = () => {
    if (!props.selected && !props.element.readonly) {
      dispatch(setSelectionId(props.element.id));
    }
  };

  const handleTransform = (update: Partial<Transform>) => {
    const data = { ...props.element.transform, ...update };
    dispatch(updateElement(props.element.id, { transform: data }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteElement(id));
  };

  const handleDeselect = () => {
    dispatch(setSelectionId(null));
  };

  return (
    <g>
      <g id={props.id} className='container' onClick={handleClick} ref={ref} transform={transform}>
        {props.children}
        {props.selected && !props.element.readonly && (
          <Selection
            box={box}
            transform={props.element.transform}
            parent={props.id}
            element={props.element}
            handleDelete={handleDelete}
            handleDeselect={handleDeselect}
            handleTransform={handleTransform}
          />
        )}
      </g>
    </g>
  );
};
