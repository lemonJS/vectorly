import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { layoutSelector } from '@lib/layout/selectors';
import { setMenuOpen } from '@lib/layout/actions';

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
    display: none;
  }
`;

export function NavigationToggle(): JSX.Element {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector(layoutSelector);

  const status = menuOpen ? 'open' : '';
  const icon = menuOpen ? 'ri-menu-fold-line' : 'ri-menu-unfold-line';
  const text = menuOpen ? 'Collapse' : 'Show';

  function handleClick() {
    dispatch(setMenuOpen(!menuOpen));
  }

  return (
    <button className={`${styles} ${status}`} onClick={handleClick}>
      <i className={icon} />
      <span>{text}</span>
    </button>
  );
}
