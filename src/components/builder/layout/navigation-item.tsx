import React from 'react';

import { css } from '@emotion/css';
import { NavigationData } from '@type/navigation';
import { useContext } from '@components/builder/store';

interface Props extends NavigationData {}

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
`;

export function NavigationItem(props: Props): JSX.Element {
  const [state, setState] = useContext();
  const status = state.menuSelected === props.name ? 'selected' : '';

  function handleClick() {
    setState({ menuSelected: props.name });
  }

  return (
    <button className={`${styles} ${status}`} onClick={handleClick}>
      <i className={props.icon} />
      <span>{props.title}</span>
    </button>
  );
}
