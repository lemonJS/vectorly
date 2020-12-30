import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { editorSelector } from '@lib/editor/selectors';
import { setMenuSelected } from '@lib/editor/actions';

interface Props {
  name: string;
  icon: string;
  title: string;
}

const styles = css`
  align-items: center;
  background: none;
  border: none;
  color: var(--secondary-text-color);
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: 12px;
  flex-direction: column;
  height: 5rem;
  justify-content: center;
  text-transform: uppercase;
  width: 6rem;
  
  &:hover,
  &.selected {
    background: var(--sidebar-background-color);
    color: white;
  }
  
  i {
    font-size: 24px;
    margin-bottom: .5rem;
  }
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    height: 3rem;
    width: auto;
    
    i {
      display: none;
    }
  }
`;

export function NavigationItem(props: Props): JSX.Element {
  const dispatch = useDispatch();

  const { menuSelected } = useSelector(editorSelector);
  const status = menuSelected === props.name ? 'selected' : '';

  function handleClick() {
    const selected = props.name === menuSelected ? null : props.name;
    dispatch(setMenuSelected(selected));
  }

  return (
    <button className={`${styles} ${status}`} onClick={handleClick}>
      <i className={props.icon} />
      <span>{props.title}</span>
    </button>
  );
}
