import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { MenuItem } from '@components/svg/selection/menu-item';
import { Element } from '@type/project';
import { projectSelector } from '@lib/projects/selectors';
import { deleteElement, updateElementIndex } from '@lib/projects/actions';

interface Props {
  element: Element;
}

const styles = css`
  display: block;
  height: 210px;
  overflow: visible;
  width: 180px;
  
  .menu {
    background: white;
    border-radius: .5rem;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
    height: 100%;
    padding: .5rem;
    transform-origin: top left;
    width: 100%;
  }
`;

export const Menu = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const project = useSelector(projectSelector);

  const elements = project.elements.filter(e => !e.readonly);

  const total = elements.length;
  const index = elements.findIndex(element => element.id === props.element.id);

  const scaleX = 1 / props.element.transform.s[0];
  const scaleY = 1 / props.element.transform.s[1];
  const rotate = -props.element.transform.r;

  const items = [
    {
      name: 'Bring forward',
      disabled: total === 1 || index === total - 1,
      handleClick: () => dispatch(updateElementIndex(index, index + 1))
    },
    {
      name: 'Bring to front',
      disabled: total === 1 || index === total - 1,
      handleClick: () => dispatch(updateElementIndex(index, total - 1))
    },
    {
      name: 'Send backwards',
      disabled: total === 1 || index === 0,
      handleClick: () => dispatch(updateElementIndex(index, index - 1))
    },
    {
      name: 'Send to back',
      disabled: total === 1 || index === 0,
      handleClick: () => dispatch(updateElementIndex(index, 0))
    },
    {
      name: 'Delete',
      disabled: false,
      handleClick: () => dispatch(deleteElement(props.element.id))
    }
  ];

  return (
    <foreignObject className={styles}>
      <div className='menu' style={{ transform: `scale(${scaleX}, ${scaleY}) translate(24px, 0) rotate(${rotate}deg)` }}>
        {items.map(item => (
          <MenuItem
            key={item.name}
            name={item.name}
            disabled={item.disabled}
            handleClick={item.handleClick}
          />
        ))}
      </div>
    </foreignObject>
  );
};
