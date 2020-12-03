import React from 'react';

import type { Element as ProjectElement } from '../../types/project';
import type { Transform } from '../../types/editor';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { Selection } from './selection';
import { setSelectionId } from '../../lib/selection/actions';
import { updateProjectElement } from '../../lib/project/actions';

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
  element: ProjectElement;
}

const styles = css`
  transform-box: fill-box;
  transform-origin: center;
`;

export function Container(props: Props): JSX.Element {
  const dispatch = useDispatch();
  const ref = React.useRef(null);

  const { x, y, r } = props.element.transform;

  const [transform, setTransform] = React.useState({ x, y, r });
  const handleUpdate = React.useCallback(value => saveChanges(value), []);

  function handleClick() {
    dispatch(setSelectionId(props.id));
  }

  function handleTransform(update: Partial<Transform>) {
    const data = { ...transform, ...update };
    handleUpdate(data);
    setTransform(data);
  }

  const saveChanges = debounce((transform: Transform) => {
    dispatch(updateProjectElement(props.element.id, { transform }));
  }, 1000);

  return (
    <g id={props.id} className={`${styles} container`} onClick={handleClick} ref={ref} transform={`translate(${transform.x}, ${transform.y}), rotate(${transform.r})`}>
      {props.children}
      {props.selected && (
        <Selection
          box={ref.current.getBBox()}
          transform={transform}
          parent={props.id}
          handleTransform={handleTransform}
        />
      )}
    </g>
  );
}
