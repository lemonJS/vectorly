import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { controlSelector, setControl } from '@store/editor';

interface Props {
  name: string;
  icon: string;
  title: string;
}

const styles = css`
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 2.5rem;
  margin: .5rem 0;
  padding: 0;
  position: relative;
  width: 2.5rem;

  i {
    font-size: 1.5rem;
    margin: 0;
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    background: var(--gray-100);

    i {
      color: var(--primary);
    }

    &:after {
      display: block;
    }
  }

  &.selected {
    i {
      color: var(--primary);
    }
  }

  &:after {
    background: var(--gray-700);
    border-radius: var(--border-radius-sm);
    color: white;
    content: attr(data-label);
    display: none;
    left: 4rem;
    padding: .35rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    white-space: nowrap;
  }
`;

export const Button = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const control = useSelector(controlSelector);
  const active = props.name === control;

  const handleClick = () => {
    dispatch(setControl(active ? null : props.name));
  };

  return (
    <button className={`${styles} ${active ? 'selected' : ''}`} onClick={handleClick} data-label={props.title}>
      <i className={props.icon} />
    </button>
  );
};
