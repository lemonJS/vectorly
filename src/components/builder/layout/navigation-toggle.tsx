import React from 'react';

import { css } from '@emotion/css';
import { useContext } from '@components/builder/store';

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

export function NavigationToggle(): JSX.Element {
  const { state, setState } = useContext();

  const status = state.menuOpen ? 'open' : '';
  const icon = state.menuOpen ? 'ri-menu-fold-line' : 'ri-menu-unfold-line';
  const text = state.menuOpen ? 'Collapse' : 'Show';

  function handleClick() {
    setState({ menuOpen: !state.menuOpen });
  }

  return (
    <button className={`${styles} ${status}`} onClick={handleClick}>
      <i className={icon} />
      <span>{text}</span>
    </button>
  );
}
