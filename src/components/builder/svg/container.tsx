import React from 'react';

import { Element } from '@type/project';
import { Transform } from '@type/editor';
import { Selection } from '@components/builder/svg/selection/selection';
import { getBox } from '@lib/helpers';
import { useContext } from '@components/builder/store';

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
  element: Element;
}

export function Container(props: Props): JSX.Element {
  const { setState, updateProjectElement } = useContext();
  const ref = React.useRef<SVGGElement>(null);
  const box = getBox(ref.current);

  const { x, y, r, s } = props.element.transform;
  const transform = `translate(${x} ${y}) rotate(${r} ${(box.width * s[0]) / 2} ${(box.height * s[1]) / 2}) scale(${s[0]} ${s[1]})`;

  function handleClick() {
    setState({ selectedElement: props.element });
  }

  function handleTransform(update: Partial<Transform>) {
    const data = { ...props.element.transform, ...update };
    updateProjectElement(props.element.id, { transform: data });
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
            handleTransform={handleTransform}
          />
        )}
      </g>
    </g>
  );
}
