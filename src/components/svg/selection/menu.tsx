import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { MenuItem } from '@components/svg/selection/menu-item';
import { Element, projectSelector, deleteElement, updateElementIndex } from '@store/project';

interface Props {
  element: Element;
}

const styles = css`
  display: block;
  overflow: visible;
  
  .menu {
    background: white;
    border-radius: var(--border-radius-md);
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, .1);
    height: 100%;
    padding: .5rem;
    transform-origin: top left;
    width: 100%;
  }
`;

export const Menu = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { elements } = useSelector(projectSelector);

  const total = elements.length;
  const index = elements.findIndex(element => element.id === props.element.id);

  const scaleX = 1 / props.element.transform.s[0];
  const scaleY = 1 / props.element.transform.s[1];
  const rotate = - props.element.transform.r;
  const transform = `scale(${scaleX}, ${scaleY}) translate(24, 0) rotate(${rotate})`;

  const items = [
    {
      name: 'Bring forward',
      disabled: total === 2 || index === total - 1,
      handleClick: () => dispatch(updateElementIndex(index, index + 1))
    },
    {
      name: 'Bring to front',
      disabled: total === 2 || index === total - 1,
      handleClick: () => dispatch(updateElementIndex(index, total - 1))
    },
    {
      name: 'Send backwards',
      disabled: total === 2 || index === 1,
      handleClick: () => dispatch(updateElementIndex(index, index - 1))
    },
    {
      name: 'Send to back',
      disabled: total === 2 || index === 1,
      handleClick: () => dispatch(updateElementIndex(index, 1))
    },
    {
      name: 'Delete',
      disabled: false,
      handleClick: () => dispatch(deleteElement(props.element.id))
    }
  ];

  return (
    <foreignObject className={styles} height='210' width='180' transform={transform}>
      <div className='menu'>
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
