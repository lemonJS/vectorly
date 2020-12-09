import React from 'react';

import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Element } from '@type/project';
import { Transform } from '@type/editor';
import { Selection } from '@components/builder/svg/selection/selection';
import { setSelectionId } from '@lib/selection/actions';
import { updateProjectElement } from '@lib/project/actions';

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
  element: Element;
}

const styles = css`
  transform-box: fill-box;
  transform-origin: center;
`;

export function Container(props: Props): JSX.Element {
  const dispatch = useDispatch();
  const ref = React.useRef(null);

  const { x, y, r, s } = props.element.transform;
  const transform = `translate(${x}, ${y}), rotate(${r}) scale(${s[0]}, ${s[1]})`;

  function handleClick() {
    dispatch(setSelectionId(props.id));
  }

  function handleTransform(update: Partial<Transform>) {
    const data = { ...props.element.transform, ...update };
    dispatch(updateProjectElement(props.element.id, { transform: data }));
  }

  return (
    <g id={props.id} className={`${styles} container`} onClick={handleClick} ref={ref} transform={transform}>
      {props.children}
      {props.selected && (
        <Selection
          box={ref.current.getBBox()}
          transform={props.element.transform}
          parent={props.id}
          handleTransform={handleTransform}
        />
      )}
    </g>
  );
}
