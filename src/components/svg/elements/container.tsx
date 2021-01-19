import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Element, ElementProps } from '@type/project';
import { Selection } from '@components/svg/selection/selection';
import { Outline } from '@components/svg/selection/outline';
import { getBox } from '@lib/editor/helpers';
import { setSelectionId } from '@lib/editor/actions';
import { controlSelector } from '@lib/editor/selectors';

interface Props extends ElementProps {
  id: string;
  element: Element;
  selected: boolean;
}

export const Container = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const control = useSelector(controlSelector);
  const isSelect = control === 'select';

  const [hover, setHover] = React.useState(false);

  const ref = React.useRef<SVGGElement>(null);
  const box = getBox(ref.current);

  const { x, y, r, s } = props.element.transform;
  const transform = `translate(${x} ${y}) rotate(${r} ${(box.width * s[0]) / 2} ${(box.height * s[1]) / 2}) scale(${s[0]} ${s[1]})`;

  const handleClick = () => {
    if (!props.selected && isSelect) {
      dispatch(setSelectionId(props.element.id));
    }
  };

  const handleMouseEnter = () => setHover(true);

  const handleMouseLeave = () => setHover(false);

  return (
    <g>
      <g id={props.id} className='container' onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={ref} transform={transform}>
        {props.children}

        {props.selected && (
          <Selection
            box={box}
            transform={props.element.transform}
            parent={props.id}
            element={props.element}
          />
        )}

        {!props.selected && isSelect && hover && (
          <Outline
            box={box}
            transform={props.element.transform}
          />
        )}
      </g>
    </g>
  );
};
